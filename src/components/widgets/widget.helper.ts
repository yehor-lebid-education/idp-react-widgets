import { IClockWidget } from "./clock/clock.types";
import { ICounterWidget } from "./counter/counter.types";
import { ILinkWidget } from "./link/link.types";
import { INotepadWidget } from "./notepad/notepad.types";
import { IPictureWidget } from "./picture/picture.model";
import { IQuoteWidget } from "./quote/quote.types";
import { ITodoWidget } from "./todo/todo.types";

import { CLOCK_LAYOUT_CONFIG } from "./clock/clock.config";
import { COUNTER_LAYOUT_CONFIG } from "./counter/counter.config";
import { LINK_LAYOUT_CONFIG } from './link/link.config';
import { NOTEPAD_LAYOUT_CONFIG } from "./notepad/notepad.config";
import { IWidget, IWidgetLayoutChange, IWidgetLayoutConfig } from "./widget.type";
import { PICTURE_LAYOUT_CONFIG } from "./picture/picture.config";
import { QUOTE_LAYOUT_CONFIG } from "./quote/quote.config";
import { TODO_LAYOUT_CONFIG } from "./todo/todo.config";
import { GRID } from "../../constants";


const LAYOUT_CONFIG_BY_TYPE: Record<IWidget['type'], IWidgetLayoutConfig> = {
    clock: CLOCK_LAYOUT_CONFIG,
    counter: COUNTER_LAYOUT_CONFIG,
    link: LINK_LAYOUT_CONFIG,
    notepad: NOTEPAD_LAYOUT_CONFIG,
    picture: PICTURE_LAYOUT_CONFIG,
    quote: QUOTE_LAYOUT_CONFIG,
    todo: TODO_LAYOUT_CONFIG,
};



export function createClockWidget(widgetData: Omit<IClockWidget, 'type'>): IClockWidget {
    return {
        ...widgetData,
        type: 'clock',
        layout: getLayout(widgetData.layout, CLOCK_LAYOUT_CONFIG),
    };
}

export function createCounterWidget(widgetData: Omit<ICounterWidget, 'type'>): ICounterWidget {
    return {
        ...widgetData,
        type: 'counter',
        layout: getLayout(widgetData.layout, COUNTER_LAYOUT_CONFIG),
    };
}

export function createLinkWidget(widgetData: Omit<ILinkWidget, 'type'>): ILinkWidget {
    return {
        ...widgetData,
        type: 'link',
        layout: getLayout(widgetData.layout, LINK_LAYOUT_CONFIG),
    };
}

export function createNotepadWidget(widgetData: Omit<INotepadWidget, 'type'>): INotepadWidget {
    return {
        ...widgetData,
        type: 'notepad',
        layout: getLayout(widgetData.layout, NOTEPAD_LAYOUT_CONFIG),
    };
}

export function createPictureWidget(widgetData: Omit<IPictureWidget, 'type'>): IPictureWidget {
    return {
        ...widgetData,
        type: 'picture',
        layout: getLayout(widgetData.layout, PICTURE_LAYOUT_CONFIG),
    };
}

export function createQuoteWidget(widgetData: Omit<IQuoteWidget, 'type'>): IQuoteWidget {
    return {
        ...widgetData,
        type: 'quote',
        layout: getLayout(widgetData.layout, QUOTE_LAYOUT_CONFIG),
    };
}

export function createTodoWidget(widgetData: Omit<ITodoWidget, 'type'>): ITodoWidget {
    return {
        ...widgetData,
        type: 'todo',
        layout: getLayout(widgetData.layout, TODO_LAYOUT_CONFIG),
    };
}

function getLayout(layout: IWidget['layout'], config: IWidgetLayoutConfig) {
    const result = { ...layout, ...config };

    if (config.minH && layout.h < config.minH) result.h = config.minH;
    if (config.minW && layout.w < config.minW) result.w = config.minW;
    if (config.maxH && layout.h > config.maxH) result.h = config.maxH;
    if (config.maxW && layout.w > config.maxW) result.w = config.maxW;

    return result;
}

export function hasLayoutChange(sourceLayout: IWidget['layout'], newLayout: IWidgetLayoutChange): boolean {
    for (const key of Object.keys(newLayout) as (keyof IWidgetLayoutChange)[]) {
        if (newLayout[key] !== sourceLayout[key]) {
            return true;
        }
    }
    return false;
}

export function findFreeSpot(widgets: IWidget[], config: IWidgetLayoutConfig): IWidget['layout'] | null {
    // Create layout matrix for easy and optimal checking
    const layoutMatrix = getLayoutMatrix(widgets);

    const w = config.minW || 1;
    const h = config.minH || 1;

    if (w > GRID.COLS || h > GRID.ROWS) return null; // impossible size

    for (let y = 0; y < layoutMatrix.length; y++) {
        if (y + h > GRID.ROWS) {
            continue; // Out of bounds
        }

        for (let x = 0; x < layoutMatrix[y].length; x++) {
            if (
                layoutMatrix[y][x] === 1 || // Spot is occupied
                x + w > GRID.COLS           // Out of bounds
            ) {
                continue;
            }

            // Check if the spot is free
            if (hasSpot(layoutMatrix, x, y, w, h)) {
                return { x, y, w, h };
            }
        }
    }

    return null;
}

function hasSpot(layoutMatrix: number[][], x: number, y: number, w: number, h: number): boolean {
    // Check if the spot is free
    for (let wY = y; wY < y + h; wY++) {
        for (let wX = x; wX < x + w; wX++) {
            if (layoutMatrix[wY]?.[wX] !== 0 || layoutMatrix[wY][wX] === 1) {
                return false; // Spot is occupied
            }
        }
    }
    return true; // Spot is free
}

function getLayoutMatrix(widgets: IWidget[]): number[][] {
    const matrix: number[][] = Array.from({ length: GRID.ROWS }, () => Array(GRID.COLS).fill(0));

    widgets.forEach(widget => {
        const { x, y, w, h } = widget.layout;
        for (let i = y; i < y + h; i++) {
            for (let j = x; j < x + w; j++) {
                matrix[i][j] = 1;
            }
        }
    });

    return matrix;
}

export function applyWidgetOptions(widgets: IWidget[]) {
    return widgets.map(widget => {
        const config = LAYOUT_CONFIG_BY_TYPE[widget.type];
        if (config) widget.layout = getLayout(widget.layout, config);
        return widget;
    });
}
