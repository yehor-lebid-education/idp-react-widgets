import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type INotepadOptions = IWidgetCommonOptions & {
    title: string;
};

export interface INotepadWidget extends IWidgetCommon {
    type: 'notepad';
    options: INotepadOptions;
}
