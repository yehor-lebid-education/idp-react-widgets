import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type IQuoteConfig = {
    refreshDuration: number; // in milliseconds
}

export type IQuoteOptions = IWidgetCommonOptions & IQuoteConfig;

export interface IQuoteWidget extends IWidgetCommon {
    type: 'quote';
    options: IQuoteOptions;
}
