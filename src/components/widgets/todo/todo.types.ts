import IWidgetCommon from "../widget-common.type";

export interface ITodoWidgetOptions {
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
