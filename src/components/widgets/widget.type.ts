import { IClockWidget } from "./clock/clock.types";
import { ITodoWidget } from "./todo/todo.types";
import { INotepadWidget } from "./notepad/notepad.types";
import { IQuoteWidget } from "./quote/quote.types";
import { ILinkWidget } from "./link/link.types";
import { ICounterWidget } from "./counter/counter.types";
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