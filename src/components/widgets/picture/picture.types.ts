import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type IPictureConfig = {
    url: string;
    title: string;
    width: number;
};

export type IPictureOptions = IWidgetCommonOptions & IPictureConfig

export interface IPictureWidget extends IWidgetCommon {
    type: 'picture';
    options: IPictureOptions;
}
