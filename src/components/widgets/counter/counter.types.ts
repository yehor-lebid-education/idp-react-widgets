import IWidgetCommon from "../widget-common.type";

export type ICounterOptions = {
    total: number;
    step: number;
};

export interface ICounterWidget extends IWidgetCommon {
    type: 'counter';
    options: ICounterOptions;
}

