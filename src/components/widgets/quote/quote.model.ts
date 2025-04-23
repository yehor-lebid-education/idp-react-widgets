import IWidgetCommon from "../widget-common.type";

export type IQuoteOptions = {
    refreshDuration?: number; // in milliseconds
};

export interface IQuoteWidget extends IWidgetCommon {
    type: 'quote';
    options: IQuoteOptions;
}

export class QuoteWidget implements IQuoteWidget {
    public type: IQuoteWidget['type'] = 'quote';

    constructor(
        public id: IQuoteWidget['id'],
        public layout: IQuoteWidget['layout'],
        public options: IQuoteWidget['options'],
    ) {

    }
}
