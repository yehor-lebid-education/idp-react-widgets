import { Plus, X } from "lucide-react";
import * as widgetData from "../../spec/widget.data";
import { IWidget } from "../widgets/widget.type";
import Widget from "./Widget";


const availableWidgets: IWidget[] = widgetData.getWidgetsData({
    mode: 'preview',
});

interface WidgetSelectorProps {
    onClose: () => void;
    onAdd: (widget: IWidget) => void;
}
export default function WidgetSelector({ onClose, onAdd }: WidgetSelectorProps) {
    function handleAdd() {
        console.log('ADD');
    }

    function getLabel({ type }: IWidget) {
        return type.charAt(0).toUpperCase() + type.slice(1);
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
                    {availableWidgets.map(widget => (
                        <div
                            key={widget.type}
                            className="group rounded-xl p-4 flex flex-col items-center gap-2 text-white hover:bg-black/60"
                        >
                            <button className="widget w-full cursor-pointer">
                                <div className="relative w-full h-[90px] flex items-center justify-center rounded-md bg-white/10 border border-white/10">
                                    <Widget widget={widget} editMode={true} />
                                    <Plus className="absolute top-[50%] left-[50%] translate-[-50%] w-12 h-12 p-3 rounded-4xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-sm mt-4">{getLabel(widget)}</div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
