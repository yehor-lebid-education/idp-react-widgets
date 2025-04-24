import IWidgetCommon from "../widget-common.type";

export type IQuoteOptions = {
    refreshDuration?: number; // in milliseconds
};

export interface IQuoteWidget extends IWidgetCommon {
    type: 'quote';
    options: IQuoteOptions;
}
