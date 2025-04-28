import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type IPictureOptions = IWidgetCommonOptions & {
    url: string;
    title?: string;
}

export interface IPictureWidget extends IWidgetCommon {
    type: 'picture';
    options: IPictureOptions;
}
