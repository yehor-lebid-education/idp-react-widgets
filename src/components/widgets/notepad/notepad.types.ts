import IWidgetCommon from "../widget-common.type";

export type INotepadOptions = {
    title: string;
};

export interface INotepadWidget extends IWidgetCommon {
    type: 'notepad';
    options: INotepadOptions;
}
