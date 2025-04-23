import IWidgetCommon from "../widget-common.type";

export interface IPictureOptions {
    url: string;
    title?: string;
}

export interface IPictureWidget extends IWidgetCommon {
    type: 'picture';
    options: IPictureOptions;
}

export class PictureWidget implements IPictureWidget {
    public type: IPictureWidget['type'] = 'picture';

    constructor(
        public id: IPictureWidget['id'],
        public layout: IPictureWidget['layout'],
        public options: IPictureWidget['options'],
    ) {

    }
}
