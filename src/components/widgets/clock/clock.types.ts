import IWidgetCommon from "../widget-common.type";

export type IClockOptions = {
    dateFormat: string;
};

export interface IClockWidget extends IWidgetCommon {
    type: 'clock';
    options: IClockOptions;
}
