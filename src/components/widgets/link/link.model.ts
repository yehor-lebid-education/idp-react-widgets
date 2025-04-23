import IWidgetCommon from "../widget-common.type";

export type ILinkOptions = {
    url: string;
    label: string;
};

export interface ILinkWidget extends IWidgetCommon {
    type: 'link';
    options: ILinkOptions;
}

export class LinkWidget implements ILinkWidget {
    public type: ILinkWidget['type'] = 'link';

    constructor(
        public id: ILinkWidget['id'],
        public layout: ILinkWidget['layout'],
        public options: ILinkWidget['options'],
    ) {

    }
}
