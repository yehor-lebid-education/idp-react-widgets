import { IClockWidget } from "./clock/clock.types";
import { ITodoWidget } from "./todo/todo.types";
import { INotepadWidget } from "./notepad/notepad.types";
import { IQuoteWidget } from "./quote/quote.types";
import { ILinkWidget } from "./link/link.types";
import { ICounterWidget } from "./counter/counter.types";
import { IPictureWidget } from "./picture/picture.types";

export type IWidget =
    | IClockWidget
    | ITodoWidget
    | INotepadWidget
    | IQuoteWidget
    | ILinkWidget
    | ICounterWidget
    | IPictureWidget;

export type IWidgetType = IWidget['type'];
export type IWidgetLayoutConfig = Partial<Pick<IWidget['layout'], 'minH' | 'minW' | 'maxH' | 'maxW'>>;
export type IWidgetLayoutChange = Pick<IWidget['layout'], 'x' | 'y' | 'w' | 'h'>;
