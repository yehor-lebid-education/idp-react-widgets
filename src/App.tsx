import { IWidget } from './components/widgets/widget.type'
import GridWidget from './components/common/Grid';
import * as widgetHelper from './components/widgets/widget.helper';

const widgets: IWidget[] = [
    widgetHelper.createClockWidget({ id: 'test-1', layout: { x: 0, y: 0, w: 2, h: 1 }, options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }),
    widgetHelper.createCounterWidget({ id: 'test-2', layout: { x: 2, y: 0, w: 2, h: 2 }, options: { step: 1, total: 10 } }),
    widgetHelper.createLinkWidget({ id: 'test-3', layout: { x: 4, y: 0, w: 1, h: 1 }, options: { label: 'Google', url: 'https://google.com' } }),
    widgetHelper.createNotepadWidget({ id: 'test-4', layout: { x: 0, y: 4, w: 2, h: 2 }, options: { title: '📝 Notes' } }),
    
    widgetHelper.createTodoWidget({ id: 'test-7', layout: { x: 4, y: 2, w: 3, h: 4 }, options: {} }),
    widgetHelper.createPictureWidget({ id: 'test-5', layout: { x: 0, y: 2, w: 2, h: 2 }, options: { url: 'https://picsum.photos/200/300', title: 'Picture' } }),
    widgetHelper.createQuoteWidget({ id: 'test-6', layout: { x: 2, y: 2, w: 2, h: 2 }, options: { refreshDuration: 1000 * 60 * 10 } }),
];

export default function App() {
    return (
        <GridWidget widgets={widgets} />
    )
}
