import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type ILinkConfig = {
    url: string;
    label: string;
}

export type ILinkOptions = IWidgetCommonOptions & ILinkConfig;

export interface ILinkWidget extends IWidgetCommon {
    type: 'link';
    options: ILinkOptions;
}
