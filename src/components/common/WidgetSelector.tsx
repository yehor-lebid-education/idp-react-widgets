import { Plus, X } from "lucide-react";
import * as widgetData from "../../spec/widget.data";
import * as widgetHelper from "../widgets/widget.helper";
import { IWidget } from "../widgets/widget.type";
import Widget from "./Widget";
import { useEffect, useMemo, useState } from "react";
import generateId from "../../utils/generate-id";
import classname from "../../utils/classname";

interface WidgetSelectorProps {
    widgets: IWidget[];
    onClose: () => void;
    onAdd: (widget: IWidget) => void;
}
export default function WidgetSelector({ widgets, onClose, onAdd }: WidgetSelectorProps) {
    const widgetList = useMemo(() => widgetData.getWidgetsData({ mode: 'preview' }), []);
    const [availableSpotMap, setAvailableSpotMap] = useState<Map<IWidget['type'], IWidget['layout'] | null>>(new Map());

    useEffect(() => {
        function createAvailableSpotMap() {
            const spotMap = new Map<IWidget['type'], IWidget['layout'] | null>();
            widgetList.forEach(widget => spotMap.set(widget.type, widgetHelper.findFreeSpot(widgets, widget.layout)))
            setAvailableSpotMap(spotMap);
        }

        createAvailableSpotMap();
    }, [widgets, widgetList]);

    function hasSpotForItem(widget: IWidget) {
        const spot = availableSpotMap.get(widget.type);
        return Boolean(spot);
    }

    function handleAdd(widget: IWidget) {
        const spot = availableSpotMap.get(widget.type);
        if (!spot) {
            return;
        }

        // Set widget defaults
        const newWidget: IWidget = { ...widget };
        newWidget.id = generateId();
        newWidget.layout = { ...widget.layout, ...spot };
        delete newWidget.options.mode;

        onAdd(newWidget);
        onClose();
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 max-w-4xl w-full shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white">Add Widget</h2>
                    <button onClick={onClose} className="text-white rounded-2xl p-2 cursor-pointer hover:opacity-80 hover:bg-white/20"><X size={18} /></button>
                </div>

                <div className="grid grid-cols-3 auto-rows-auto gap-4 overflow-auto">
                    {widgetList.map(widget => (
                        <div key={widget.type} className="group flex flex-col items-center gap-2">
                            <WidgetSelectorItem disabled={!hasSpotForItem(widget)} widget={widget} onClick={handleAdd} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

type WidgetSelectorItemProps = {
    widget: IWidget;
    disabled: boolean;
    onClick: (widget: IWidget) => void;
}
function WidgetSelectorItem({ disabled, widget, onClick }: WidgetSelectorItemProps) {
    function getLabel({ type }: IWidget) {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }

    function handleAdd() {
        if (disabled) return;
        onClick(widget);
    }

    return (
        <button
            disabled={disabled}
            onClick={handleAdd}
            className={classname(
                "widget w-full cursor-pointer rounded-xl p-4 text-white hover:bg-black/60 transition",
                "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
            )}
        >
            <div className="relative w-full h-[90px] flex items-center justify-center rounded-md bg-white/10 border border-white/10">
                <Widget
                    widgetId={widget.id}
                    widgetType={widget.type}
                    editMode={true}
                    previewMode={widget.options?.mode === 'preview' || false}
                />
                {!disabled && <Plus className="absolute top-[50%] left-[50%] translate-[-50%] w-12 h-12 p-3 rounded-4xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </div>
            {disabled
                ? (<>
                    <div className="text-sm mt-2">{getLabel(widget)}</div>
                    <div className="text-xs">(Not enough space for widget)</div>
                </>)
                : (<div className="text-sm mt-4">{getLabel(widget)}</div>)
            }

        </button>
    )
}
