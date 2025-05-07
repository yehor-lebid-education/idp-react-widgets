import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type ICounterConfig = {
    total: number;
    step: number;
}

export type ICounterOptions = IWidgetCommonOptions & ICounterConfig;

export interface ICounterWidget extends IWidgetCommon {
    type: 'counter';
    options: ICounterOptions;
}

