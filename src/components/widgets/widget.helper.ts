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
import { IWidget, IWidgetLayoutConfig } from "./widget.type";
import { PICTURE_LAYOUT_CONFIG } from "./picture/picture.config";
import { QUOTE_LAYOUT_CONFIG } from "./quote/quote.config";
import { TODO_LAYOUT_CONFIG } from "./todo/todo.config";

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