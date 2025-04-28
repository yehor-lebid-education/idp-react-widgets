import { IWidgetCommon, IWidgetCommonOptions } from "../widget-common.type";

export type ITodoWidgetOptions = IWidgetCommonOptions & {
    title?: string;
}

export interface ITodoWidget extends IWidgetCommon {
    type: 'todo';
    options: ITodoWidgetOptions;
}

export interface ITodo {
    id: string;
    label: string;
    isDone: boolean;
}
