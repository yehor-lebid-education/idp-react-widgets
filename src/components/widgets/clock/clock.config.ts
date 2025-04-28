import { IWidget, IWidgetLayoutConfig } from "../widget.type";
import { IClockWidget } from "./clock.types";

export const CLOCK_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 2,
} as const;

export const CLOCK_REFRESH_INTERVAL = 1000 * 1; // 1 second

export const CLOCK_DEFAULT_LAYOUT: IWidget['layout'] = { x: 0, y: 0, w: 2, h: 1 };

export const CLOCK_DEFAULT_OPTIONS: IClockWidget['options'] = { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' };
