import { IWidgetCommonOptions, IWidgetCommon } from "../widget-common.type";

export type IClockOptions = IWidgetCommonOptions & {
    dateFormat: string;
};

export interface IClockWidget extends IWidgetCommon {
    type: 'clock';
    options: IClockOptions;
}
