
import Todo from "../widgets/todo/Todo";
import Clock from "../widgets/clock/Clock";
import WidgetWrapper from "./WidgetWrapper";
import Notepad from "../widgets/notepad/Notepad";

import { IWidget } from "../widgets/widget.type";
import { IClockOptions } from "../widgets/clock/clock.options";
import { INotepadOptions } from "../widgets/notepad/notepad.options";
import Quote from "../widgets/quote/Quote";
import { IQuoteOptions } from "../widgets/quote/quote.options";
import Link from "../widgets/link/Link";
import { ILinkOptions } from "../widgets/link/link.options";
import Counter from "../widgets/counter/Counter";
import { ICounterOptions } from "../widgets/counter/counter.options";
import Picture from "../widgets/picture/Picture";
import { IPictureOptions } from "../widgets/picture/picture.options";

interface WidgetProps {
    id: IWidget['id'];
    type: IWidget['type'];
    options: IWidget['options'],
}

export default function Widget({ id, type, options }: WidgetProps) {
    function getWidget() {
        switch (type) {
            case 'clock':
                return <Clock id={id} options={options as IClockOptions} />
            case 'todo':
                return <Todo id={id} />
            case 'notepad':
                return <Notepad id={id} options={options as INotepadOptions} />
            case 'quote':
                return <Quote options={options as IQuoteOptions} />
            case 'link':
                return <Link options={options as ILinkOptions} />
            case 'counter':
                return <Counter id={id} options={options as ICounterOptions} />
            case 'picture':
                return <Picture options={options as IPictureOptions} />
            default:
                throw new Error(`Unknown widget type: ${type}`);
        }
    };

    return (
        <WidgetWrapper>
            {getWidget()}
        </WidgetWrapper>
    );
}