import { IClockWidget } from "./clock/clock.model";
import { ITodoWidget } from "./todo/todo.model";
import { INotepadWidget } from "./notepad/notepad.model";
import { IQuoteWidget } from "./quote/quote.model";
import { ILinkWidget } from "./link/link.model";
import { ICounterWidget } from "./counter/counter.model";
import { IPictureWidget } from "./picture/picture.model";

export type IWidget =
    | IClockWidget
    | ITodoWidget
    | INotepadWidget
    | IQuoteWidget
    | ILinkWidget
    | ICounterWidget
    | IPictureWidget;

export type IWidgetType = IWidget['type'];