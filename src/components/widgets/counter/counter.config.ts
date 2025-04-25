import { IWidgetLayoutConfig } from "../widget.type";

// Size of the counter buttons: increment, decrement, reset...
export const COUNTER_BUTTONS_SIZE = 20;

export const COUNTER_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 1,
    maxH: 2,
    maxW: 2,
} as const;
