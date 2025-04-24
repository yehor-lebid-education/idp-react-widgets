import IWidgetCommon from "../widget-common.type";

export type ILinkOptions = {
    url: string;
    label: string;
};

export interface ILinkWidget extends IWidgetCommon {
    type: 'link';
    options: ILinkOptions;
}
