import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { IWidget } from '../widgets/widget.type';
import Widget from './Widget';

interface GridWidgetProps {
    widgets: IWidget[];
    onWidgetLayoutChange: (newWidget: IWidget) => void;
}
const GridWidget = ({ widgets }: { widgets: IWidget[] }) => {

    function handleLayoutChange(layout: Layout[]) {
        console.log({ msg: 'layout Change', layout });
    }

    function handleResizeStop(_layout: Layout[], _oldLayout: Layout, newLayout: Layout) {
        const { i, w, h } = newLayout;
        const widget = widgets.find(widget => widget.id === i);
        if (!widget) return;
    }

    function handleDragStop(...props) {
        console.log({ msg: 'drag stop', props });
    }

    return (
        <div className="w-screen h-screen bg-black">
            <GridLayout
                className="layout"
                cols={8}
                maxRows={9}
                rowHeight={80}
                width={window.innerWidth}
                margin={[12, 12]}
                isResizable={true}
                isDraggable={true}
                compactType={null}
                preventCollision={true}
                onLayoutChange={handleLayoutChange}
                onResizeStop={handleResizeStop}
                onDragStop={handleDragStop}
            >
                {widgets.map(widget => (
                    <div
                        key={widget.id}
                        data-grid={widget.layout}
                        className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-center text-white font-mono overflow-hidden"
                    >
                        <Widget widget={widget} />
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default GridWidget;


/*

{widgets.map(widget => (
                    <div key={widget.id}>
                        <Widget widget={widget} />
                    </div>
                ))}

*/


/*
function GridWidget() {
  const rows = 5;
  const cols = 8;
  const total = rows * cols;

  // State: items = index of item in each cell (null means empty)
  const [items, setItems] = useState<number[]>(Array.from({ length: total }, (_, i) => i));

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const updated = [...items];
    const draggedItem = updated[draggedIndex];
    const targetItem = updated[dropIndex];

    updated[dropIndex] = draggedItem;
    updated[draggedIndex] = targetItem;

    setItems(updated);
    setDraggedIndex(null);
  };

  return (
    <div className="w-screen h-screen bg-black p-4">
      <div className="w-full h-full grid grid-cols-8 grid-rows-5 gap-2">
        {items.map((item, i) => (
          <div
            key={i}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(i)}
            className="flex items-center justify-center select-none cursor-grab w-full h-full bg-white/10 border border-white/20 rounded-xl backdrop-blur-md text-white font-mono text-lg"
          >
            {item + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

*/