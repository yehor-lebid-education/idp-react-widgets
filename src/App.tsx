import { IWidget } from './components/widgets/widget.type'
import GridWidget from './components/common/Grid';

const widgets: IWidget[] = [
  [
    { id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } },
    { id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } },
    { id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } },
    { id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } },
    { id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } },
  ],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],
  [{ id: 'test-1', type: 'clock', options: { dateFormat: 'dddd, MMMM D, YYYY h:mm:ss' } }],

  [{ id: 'test-2', type: 'todo', options: {} }],
  [{ id: 'test-3', type: 'notepad', options: { title: '📝 Notes' } }],
  [{ id: 'test-4', type: 'quote', options: { refreshDuration: 1000 * 10 } }],
  [{ id: 'test-5', type: 'link', options: { label: 'Google', url: 'https://google.com' } }],
  [{ id: 'test-5', type: 'counter', options: { step: 1, total: 10 } }],
  [{ id: 'test-6', type: 'picture', options: { url: 'https://picsum.photos/200/300', title: 'Picture' } }],
];

export default function App() {
  return (
    <GridWidget />
  )
}
