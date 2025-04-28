import { IWidget } from "../components/widgets/widget.type";
import * as widgetHelper from '../components/widgets/widget.helper';
import { CLOCK_DEFAULT_OPTIONS } from "../components/widgets/clock/clock.config";
import { COUNTER_DEFAULT_OPTIONS } from "../components/widgets/counter/counter.config";
import { LINK_DEFAULT_OPTIONS } from "../components/widgets/link/link.config";
import { IClockWidget } from "../components/widgets/clock/clock.types";
import { ICounterWidget } from "../components/widgets/counter/counter.types";
import { ILinkWidget } from "../components/widgets/link/link.types";

export function getWidgetsData(): IWidget[] {
    return [
        getClockWidget(),
        getCounterWidget(),
        getLinkWidget(),

        widgetHelper.createNotepadWidget({ id: 'test-4', layout: { x: 0, y: 4, w: 2, h: 2 }, options: { title: '📝 Notes' } }),        
        widgetHelper.createTodoWidget({ id: 'test-7', layout: { x: 4, y: 2, w: 3, h: 4 }, options: {} }),
        widgetHelper.createPictureWidget({ id: 'test-5', layout: { x: 0, y: 2, w: 2, h: 2 }, options: { url: 'https://picsum.photos/200/300', title: 'Picture' } }),
        widgetHelper.createQuoteWidget({ id: 'test-6', layout: { x: 2, y: 2, w: 2, h: 2 }, options: { refreshDuration: 1000 * 60 * 10 } }),
    ];
}

export function getClockWidget(): IClockWidget {
    return widgetHelper.createClockWidget({ id: 'test-1', layout: { x: 0, y: 0, w: 2, h: 1 }, options: CLOCK_DEFAULT_OPTIONS });
}

export function getCounterWidget(): ICounterWidget {
    return widgetHelper.createCounterWidget({ id: 'test-2', layout: { x: 2, y: 0, w: 2, h: 2 }, options: COUNTER_DEFAULT_OPTIONS });
}

export function getLinkWidget(): ILinkWidget {
    return widgetHelper.createLinkWidget({ id: 'test-3', layout: { x: 4, y: 0, w: 1, h: 1 }, options: LINK_DEFAULT_OPTIONS });
};