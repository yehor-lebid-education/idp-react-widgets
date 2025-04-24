import { IWidget } from './components/widgets/widget.type'
import { ClockWidget } from './components/widgets/clock/clock.types';
import { CounterWidget } from './components/widgets/counter/counter.types';
import { LinkWidget } from './components/widgets/link/link.types';
import { NotepadWidget } from './components/widgets/notepad/notepad.types';
import { PictureWidget } from './components/widgets/picture/picture.model';
import { QuoteWidget } from './components/widgets/quote/quote.types';
import { TodoWidget } from './components/widgets/todo/todo.types';
import GridWidget from './components/common/Grid';

const widgets: IWidget[] = [
    new ClockWidget('test-1', { x: 0, y: 0, w: 4, h: 1 }, { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' }),
    // new CounterWidget('test-2', { x: 2, y: 0, w: 2, h: 2 }, { step: 1, total: 10 }),
    // new LinkWidget('test-3', { x: 4, y: 0, w: 2, h: 2 }, { label: 'Google', url: 'https://google.com' }),
    // new NotepadWidget('test-4', { x: 6, y: 0, w: 2, h: 2 }, { title: '📝 Notes' }),
    // new PictureWidget('test-5', { x: 0, y: 2, w: 2, h: 2 }, { url: 'https://picsum.photos/200/300', title: 'Picture' }),
    // new QuoteWidget('test-6', { x: 2, y: 2, w: 2, h: 2 }, { refreshDuration: 1000 * 10 }),
    // new TodoWidget('test-7', { x: 4, y: 2, w: 2, h: 2 }, {}),
];

export default function App() {
    return (
        <GridWidget widgets={widgets} />
    )
}
