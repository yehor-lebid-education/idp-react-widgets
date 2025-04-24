import IWidgetCommon from "../widget-common.type";

export interface IPictureOptions {
    url: string;
    title?: string;
}

export interface IPictureWidget extends IWidgetCommon {
    type: 'picture';
    options: IPictureOptions;
}
