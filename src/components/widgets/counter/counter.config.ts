import { IWidgetLayoutConfig } from "../widget.type";
import { ICounterWidget } from "./counter.types";

// Size of the counter buttons: increment, decrement, reset...
export const COUNTER_BUTTONS_SIZE = 18;

export const COUNTER_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 2,
    maxH: 2,
    maxW: 2,
} as const;

export const COUNTER_DEFAULT_LAYOUT: ICounterWidget['options'] = { step: 1, total: 10 }

export const COUNTER_DEFAULT_OPTIONS: ICounterWidget['options'] = { step: 1, total: 10 }