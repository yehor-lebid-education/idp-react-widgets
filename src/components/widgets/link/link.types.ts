import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type ILinkOptions = IWidgetCommonOptions & {
    url: string;
    label: string;
};

export interface ILinkWidget extends IWidgetCommon {
    type: 'link';
    options: ILinkOptions;
}
