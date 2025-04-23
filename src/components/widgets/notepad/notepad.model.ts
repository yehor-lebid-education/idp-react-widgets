import IWidgetCommon from "../widget-common.type";

export type INotepadOptions = {
    title: string;
};

export interface INotepadWidget extends IWidgetCommon {
    type: 'notepad';
    options: INotepadOptions;
}

export class NotepadWidget implements INotepadWidget {
    public type: INotepadWidget['type'] = 'notepad';

    constructor(
        public id: INotepadWidget['id'],
        public layout: INotepadWidget['layout'],
        public options: INotepadWidget['options'],
    ) {

    }
}
