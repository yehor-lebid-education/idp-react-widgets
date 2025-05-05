import { IWidget } from "../components/widgets/widget.type";
import * as widgetHelper from '../components/widgets/widget.helper';
import { CLOCK_DEFAULT_OPTIONS } from "../components/widgets/clock/clock.config";
import { COUNTER_DEFAULT_OPTIONS } from "../components/widgets/counter/counter.config";
import { LINK_DEFAULT_OPTIONS } from "../components/widgets/link/link.config";
import { IClockWidget } from "../components/widgets/clock/clock.types";
import { ICounterWidget } from "../components/widgets/counter/counter.types";
import { ILinkWidget } from "../components/widgets/link/link.types";
import { INotepadWidget } from "../components/widgets/notepad/notepad.types";
import { NOTEPAD_DEFAULT_OPTIONS } from "../components/widgets/notepad/notepad.config";
import { ITodoWidget } from "../components/widgets/todo/todo.types";
import { TODO_DEFAULT_OPTIONS } from "../components/widgets/todo/todo.config";
import { IPictureWidget } from "../components/widgets/picture/picture.types";
import { PICTURE_DEFAULT_OPTIONS } from "../components/widgets/picture/picture.config";
import { QUOTE_DEFAULT_OPTIONS } from "../components/widgets/quote/quote.config";
import { IQuoteWidget } from "../components/widgets/quote/quote.types";
import { IWidgetCommonOptions } from "../components/widgets/widget-common.type";

export function getWidgetsData(options?: IWidgetCommonOptions): IWidget[] {
    return [
        getClockWidget(options),
        getCounterWidget(options),
        getLinkWidget(options),
        getNotepadWidget(options),
        getTodoWidget(options),
        getPictureWidget(options),
        getQuoteWidget(options),
    ];
}

export function getClockWidget(options?: Partial<IClockWidget['options']>): IClockWidget {
    return widgetHelper.createClockWidget({
        id: 'preview-1',
        layout: { x: 0, y: 0, w: 2, h: 1 },
        options: isObject(options) ? { ...CLOCK_DEFAULT_OPTIONS, ...options } : CLOCK_DEFAULT_OPTIONS,
    });
}

export function getCounterWidget(options?: Partial<ICounterWidget['options']>): ICounterWidget {
    return widgetHelper.createCounterWidget({
        id: 'preview-2',
        layout: { x: 2, y: 0, w: 2, h: 2 },
        options: isObject(options) ? { ...COUNTER_DEFAULT_OPTIONS, ...options } : COUNTER_DEFAULT_OPTIONS,
    });
}

export function getLinkWidget(options?: Partial<ILinkWidget['options']>): ILinkWidget {
    return widgetHelper.createLinkWidget({
        id: 'test-3',
        layout: { x: 4, y: 0, w: 1, h: 1 },
        options: isObject(options) ? { ...LINK_DEFAULT_OPTIONS, ...options } : LINK_DEFAULT_OPTIONS,
    });
}

export function getNotepadWidget(options?: Partial<INotepadWidget['options']>): INotepadWidget {
    return widgetHelper.createNotepadWidget({
        id: 'test-4',
        layout: { x: 0, y: 4, w: 2, h: 2 },
        options: isObject(options) ? { ...NOTEPAD_DEFAULT_OPTIONS, ...options } : NOTEPAD_DEFAULT_OPTIONS,
    });
}

export function getTodoWidget(options?: Partial<ITodoWidget['options']>): ITodoWidget {
    return widgetHelper.createTodoWidget({
        id: 'test-7',
        layout: { x: 4, y: 2, w: 3, h: 4 },
        options: isObject(options) ? { ...TODO_DEFAULT_OPTIONS, ...options } : TODO_DEFAULT_OPTIONS,
    });
}

export function getPictureWidget(options?: Partial<IPictureWidget['options']>): IPictureWidget {
    return widgetHelper.createPictureWidget({
        id: 'test-5',
        layout: { x: 0, y: 2, w: 2, h: 2 },
        options: isObject(options) ? { ...PICTURE_DEFAULT_OPTIONS, ...options } : PICTURE_DEFAULT_OPTIONS,
    });
}

export function getQuoteWidget(options?: Partial<IQuoteWidget['options']>): IQuoteWidget {
    return widgetHelper.createQuoteWidget({
        id: 'test-6',
        layout: { x: 2, y: 2, w: 2, h: 2 },
        options: isObject(options) ? { ...QUOTE_DEFAULT_OPTIONS, ...options } : QUOTE_DEFAULT_OPTIONS,
    });
}

function isObject<T>(value: unknown): value is T {
    return typeof value === 'object' && value !== null;
}