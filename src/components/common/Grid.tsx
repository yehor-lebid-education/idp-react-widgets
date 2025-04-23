import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const GridWidget = () => {
    const layout = [
        { i: '1', x: 0, y: 0, w: 2, h: 2 },
        { i: '2', x: 2, y: 0, w: 2, h: 2 },
        { i: '3', x: 4, y: 0, w: 2, h: 2 },
    ];

    return (
        <div className="w-screen h-screen bg-black">
            <GridLayout
                className="layout"
                layout={layout}
                cols={8}
                maxRows={9}
                rowHeight={80}
                width={window.innerWidth}
                margin={[12, 12]}
                isResizable={true}
                isDraggable={true}
                compactType={null}
                preventCollision={true}
            >
                {layout.map((item) => (
                    <div
                        key={item.i}
                        className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-center text-white font-mono"
                    >
                        Item {item.i}
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default GridWidget;





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