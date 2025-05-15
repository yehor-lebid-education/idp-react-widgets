import { DATE_FORMATS } from "../../../utils/date";
import { IWidgetCommonOptions, IWidgetCommon } from "../widget-common.type";

export type IClockConfig = {
    dateFormat: typeof DATE_FORMATS[number]['dateTimeFormat'];
}

export type IClockOptions = IWidgetCommonOptions & IClockConfig;

export interface IClockWidget extends IWidgetCommon {
    type: 'clock';
    options: IClockOptions;
}
