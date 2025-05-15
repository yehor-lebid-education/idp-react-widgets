import { X } from "lucide-react";
import { IWidget } from "../widgets/widget.type";
import Row from "./ui/Row";
import Text from "./ui/Text";
import React from "react";
import LinkConfig from "../widgets/link/LinkConfig";
import CounterConfig from "../widgets/counter/CounterConfig";
import ClockConfig from "../widgets/clock/ClockConfig";
import NotepadConfig from "../widgets/notepad/NotepadConfig";
import PictureConfig from "../widgets/picture/PictureConfig";
import QuoteConfig from "../widgets/quote/QuoteConfig";
import TodoConfig from "../widgets/todo/TodoConfig";

export const CONTEXT_MENU_WIDTH = 300;
export const CONTEXT_MENU_PADDING = 8;

interface WidgetContextMenu {
    widget: IWidget;
    position: { x: number; y: number };
    onClose: () => void;
    onChange: (widgetId: IWidget['id'], options: Partial<IWidget['options']>) => void;
}
export default function WidgetContextMenu({ widget, position, onClose, onChange }: WidgetContextMenu) {

    function handleChange(newConfig: Partial<IWidget['options']>) {
        onChange(widget.id, newConfig);
    }

    function getWidgetConfig() {
        switch (widget.type) {
            case 'link':
                return (<LinkConfig widget={widget} onChange={handleChange} />)
            case 'counter':
                return (<CounterConfig widget={widget} onChange={handleChange} />);
            case 'clock':
                return (<ClockConfig widget={widget} onChange={handleChange} />);
            case 'notepad':
                return (<NotepadConfig widget={widget} onChange={handleChange} />)
            case 'picture':
                return (<PictureConfig widget={widget} onChange={handleChange} />)
            case 'quote': 
                return (<QuoteConfig widget={widget} onChange={handleChange} />)
            case 'todo':
                return (<TodoConfig widget={widget} onChange={handleChange} />)
            default:
                return (<Text size="sm" className="py-2">This widget doesn't have configuration</Text>)
        }
    }

    const widgetConfigComponent = getWidgetConfig();

    return (
        <WidgetContextMenuWrapper
            position={position}
            onClose={onClose}
        >
            {widgetConfigComponent}
        </WidgetContextMenuWrapper>
    );
}

type WidgetContextMenuWrapper = {
    position: { x: number; y: number };
    onClose: () => void;

    children?: React.ReactNode;
}
function WidgetContextMenuWrapper({ position, onClose, children }: WidgetContextMenuWrapper) {
    const { x, y } = position;

    return (
        <div // Wrapper for click out
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/5"
        >
            <div // Context menu
                className="fixed bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl py-3 px-5 text-white"
                style={{ width: CONTEXT_MENU_WIDTH, top: y, left: x }}
            >
                <div className="w-[100%]">
                    <Row alignX="between">
                        <Text size="lg">Widget Settings:</Text>
                        <button
                            className="flex items-center hover:text-white text-white/50 transition shadow-md cursor-pointer"
                            onClick={() => onClose()}
                        >
                            <X size={20} />
                        </button>
                    </Row>

                    {/* Widget Configuration */}
                    {children}

                    {/* <Row alignY="center" alignX="center">
                        <button
                            title="Done"
                            onClick={() => onClose()}
                            className="flex items-center justify-center text-sm font-medium w-[100%] px-3 mt-2 py-2 rounded-xl text-white bg-white/10 hover:bg-white/30 transition shadow-md cursor-pointer"
                        >
                            Done
                        </button>
                    </Row> */}
                </div>
            </div>
        </div>
    )
}