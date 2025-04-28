import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type IQuoteOptions = IWidgetCommonOptions & {
    refreshDuration?: number; // in milliseconds
};

export interface IQuoteWidget extends IWidgetCommon {
    type: 'quote';
    options: IQuoteOptions;
}
