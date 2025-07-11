import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type ITodoConfig = {
    title: string;
}

export type ITodoWidgetOptions = IWidgetCommonOptions & ITodoConfig;

export interface ITodoWidget extends IWidgetCommon {
    type: 'todo';
    options: ITodoWidgetOptions;
    data: ITodo[];
}

export interface ITodo {
    id: string;
    label: string;
    isDone: boolean;
}
