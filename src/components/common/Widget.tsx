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
    widget: IWidget;
    editMode?: boolean;
}

export default function Widget({ editMode, widget }: WidgetProps) {
    function renderWidget() {
        switch (widget.type) {
            case 'clock':
                return <Clock id={widget.id} options={widget.options} />
            case 'todo':
                return <Todo id={widget.id} options={widget.options} />
            case 'notepad':
                return <Notepad id={widget.id} options={widget.options} />
            case 'quote':
                return <Quote options={widget.options} />
            case 'link':
                return <Link options={widget.options} />
            case 'counter':
                return <Counter id={widget.id} options={widget.options} />
            case 'picture':
                return <Picture options={widget.options} />
            default:
                // @ts-expect-error
                throw new Error(`Unknown widget type: ${widget.type}`);
        }
    }

    const widgetComponent = renderWidget();
    const center = !['todo'].includes(widget.type);

    return (
        <div className={classname(
            "w-full h-full flex overflow-scroll",
            center ? "items-center justify-center" : "items-end justify-center",
            editMode && "pointer-events-none opacity-40",
        )}>
            {widgetComponent}
        </div>
    );
}