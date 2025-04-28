import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type ICounterOptions = IWidgetCommonOptions & {
    total: number;
    step: number;
};

export interface ICounterWidget extends IWidgetCommon {
    type: 'counter';
    options: ICounterOptions;
}

