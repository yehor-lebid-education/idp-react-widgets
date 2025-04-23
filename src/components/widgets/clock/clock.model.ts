import IWidgetCommon from "../widget-common.type";

export type IClockOptions = {
    dateFormat: string;
};

export interface IClockWidget extends IWidgetCommon {
    type: 'clock';
    options: IClockOptions;
}

export class ClockWidget implements IClockWidget {
    public type: IClockWidget['type'] = 'clock';

    constructor(
        public id: IClockWidget['id'],
        public layout: IClockWidget['layout'],
        public options: IClockWidget['options'],
    ) {

    }
}
