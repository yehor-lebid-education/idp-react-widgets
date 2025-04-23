import IWidgetCommon from "../widget-common.type";

export type ICounterOptions = {
    total: number;
    step: number;
};

export interface ICounterWidget extends IWidgetCommon {
    type: 'counter';
    options: ICounterOptions;
}

export class CounterWidget implements ICounterWidget {
    public type: ICounterWidget['type'] = 'counter';

    constructor(
        public id: ICounterWidget['id'],
        public layout: ICounterWidget['layout'],
        public options: ICounterWidget['options'],
    ) {

    }
}
