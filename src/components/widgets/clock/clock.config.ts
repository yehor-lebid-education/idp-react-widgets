import { IWidgetLayoutConfig } from "../widget.type";

export const CLOCK_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 2,
} as const;

export const CLOCK_REFRESH_INTERVAL = 1000; // 1 second
