import ReactGridLayout from "react-grid-layout";
import { IClockOptions } from "./clock/clock.options";
import { ICounterOptions } from "./counter/counter.options";
import { ILinkOptions } from "./link/link.options";
import { INotepadOptions } from "./notepad/notepad.options";
import { IPictureOptions } from "./picture/picture.options";
import { IQuoteOptions } from "./quote/quote.options";
import IWidgetCommon from "./widget-common.type";


export interface IClockWidget extends IWidgetCommon {
    type: 'clock';
    options: IClockOptions;
}

export interface ITodoWidget extends IWidgetCommon {
    type: 'todo';
    options?: {};
};

export interface INotepadWidget extends IWidgetCommon {
    type: 'notepad';
    options: INotepadOptions;
}

export interface IQuoteWidget extends IWidgetCommon {
    type: 'quote';
    options: IQuoteOptions;
}

export interface ILinkWidget extends IWidgetCommon {
    type: 'link';
    options: ILinkOptions;
}

export interface ICounterWidget extends IWidgetCommon {
    type: 'counter';
    options: ICounterOptions;
}

export interface IPictureWidget extends IWidgetCommon {
    type: 'picture';
    options: IPictureOptions;
}

export type IWidget =
    | IClockWidget
    | ITodoWidget
    | INotepadWidget
    | IQuoteWidget
    | ILinkWidget
    | ICounterWidget
    | IPictureWidget;

export type IWidgetType = IWidget['type'];