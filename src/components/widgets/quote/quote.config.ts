import { IWidgetLayoutConfig } from "../widget.type";

export const QUOTE_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 3,
    maxH: 2,
    // maxW: 9,
} as const;

export const QUOTE_REFRESH_DURATION = 1000 * 60 * 5; // 5 minutes