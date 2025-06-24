import classname from "../../utils/classname";
import Clock from "../widgets/clock/Clock";
import Counter from "../widgets/counter/Counter";
import Link from "../widgets/link/Link";
import Notepad from "../widgets/notepad/Notepad";
import Picture from "../widgets/picture/Picture";
import Quote from "../widgets/quote/Quote";
import Todo from "../widgets/todo/Todo";
import { IWidget } from "../widgets/widget.type";


interface WidgetProps {
    widgetId: IWidget['id'];
    widgetType: IWidget['type'];

    previewMode?:boolean;
    editMode?: boolean;
}

export default function Widget({ editMode, previewMode, widgetType, widgetId }: WidgetProps) {    
    function renderWidget() {
        switch (widgetType) {
            case 'clock':
                return <Clock id={widgetId} previewMode={previewMode} />
            case 'todo':
                return <Todo id={widgetId} previewMode={previewMode} />
            case 'notepad':
                return <Notepad id={widgetId} previewMode={previewMode} />
            case 'quote':
                return <Quote id={widgetId} previewMode={previewMode} />
            case 'link':
                return <Link id={widgetId} previewMode={previewMode} />
            case 'counter':
                return <Counter id={widgetId} previewMode={previewMode} />
            case 'picture':
                return <Picture id={widgetId} previewMode={previewMode} />
            default:
                throw new Error(`Unknown widget type: ${widgetType}`);
        }
    }

    const widgetComponent = renderWidget();
    const center = !['todo'].includes(widgetType);

    return (
        <div
            className={classname(
                "w-full h-full flex overflow-scroll",
                center ? "items-center justify-center" : "items-end justify-center",
                editMode && "pointer-events-none opacity-40",
            )}
        >
            {widgetComponent}
        </div>
    );
}