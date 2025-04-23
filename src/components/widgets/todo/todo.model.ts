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

export class TodoWidget implements ITodoWidget {
    public type: ITodoWidget['type'] = 'todo';

    constructor(
        public id: ITodoWidget['id'],
        public layout: ITodoWidget['layout'],
        public options: ITodoWidget['options'],
    ) {

    }
}
