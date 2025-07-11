import { IWidgetLayoutConfig } from "../widget.type";
import { ICounterConfig, ICounterWidget } from "./counter.types";

// Size of the counter buttons: increment, decrement, reset...
export const COUNTER_BUTTONS_SIZE = 18;

export const COUNTER_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 1,
    maxH: 2,
    maxW: 2,
} as const;

export const COUNTER_DEFAULT_LAYOUT: ICounterWidget['layout'] = { x: 0, y: 0, w: 2, h: 1 };

export const COUNTER_DEFAULT_OPTIONS: ICounterWidget['options'] = { step: 1, total: 10, label: '' };

export const COUNTER_WIDGET_CONFIG: IWidgetConfigNumber[] = [
    { name: 'Counter', field: 'total', type: 'number', min: 0, max: 1_000_000 },
];

type IWidgetConfigNumber = {
    name: string;
    type: 'number';
    field: keyof ICounterConfig;
    min?: number;
    max?: number;
}
