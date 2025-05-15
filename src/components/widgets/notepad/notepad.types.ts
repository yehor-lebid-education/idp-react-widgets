import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type INotepadConfig = {
    title: string;
};

export type INotepadOptions = IWidgetCommonOptions & INotepadConfig;

export interface INotepadWidget extends IWidgetCommon {
    type: 'notepad';
    options: INotepadOptions;
}
