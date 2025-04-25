import { useState } from 'react';

import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Widget from './Widget';
import { Edit3, Eye, Minus } from 'lucide-react';
import classname from '../../utils/classname';
import { IWidget } from '../widgets/widget.type';
import { NON_DRAGGABLE_CLASS } from '../../constants';

interface GridWidgetProps {
    widgets: IWidget[];
    onWidgetLayoutChange?: (newWidget: IWidget) => void;
}
const GridWidget = ({ widgets }: GridWidgetProps) => {
    const [editMode, setEditMode] = useState(true);

    function handleLayoutChange(layout: Layout[]) {
        // console.log({ msg: 'layout Change', layout });
    }

    function handleResizeStop(_layout: Layout[], _oldLayout: Layout, newLayout: Layout) {
        // const { i, w, h } = newLayout;
        // const widget = widgets.find(widget => widget.id === i);
        // if (!widget) return;
    }

    function handleDragStop(_layout: Layout[], _oldLayout: Layout, newLayout: Layout) {
        // console.log({ msg: 'drag stop', props });
    }

    function handleDeleteWidget(id: IWidget['id']) {
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
                isResizable={editMode}
                isDraggable={editMode}
                compactType={null}
                preventCollision={true}
                draggableCancel={'.' + NON_DRAGGABLE_CLASS}
                onLayoutChange={handleLayoutChange}
                onResizeStop={handleResizeStop}
                onDragStop={handleDragStop}
            >
                {widgets.map(widget => (
                    <div
                        key={widget.id}
                        data-grid={widget.layout}
                        className={classname(
                            "bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-center text-white font-mono",
                            editMode && "border-2 animate-[pulse-border_3s_ease-in-out_infinite]"
                        )}
                    >
                        {editMode && <ButtonDelete onClick={() => handleDeleteWidget(widget.id)} />}
                        <Widget widget={widget} />
                    </div>
                ))}
            </GridLayout>

            <button
                onClick={() => setEditMode(prev => !prev)}
                title={editMode ? 'View' : 'Edit'}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-transparent text-white hover:bg-white/20 transition shadow-md cursor-pointer fixed bottom-2 right-2"
            >
                {editMode ? <Eye size={20} /> : <Edit3 size={20} />}
            </button>

            {/* <button
                className="text-white cursor-pointer"
                onClick={() => setEditMode(prev => !prev)}
            >Toggle Edit</button> */}

        </div>
    );
};

export default GridWidget;


function ButtonDelete({ onClick }: { onClick: () => void }) {
    function handleClick() {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button
            className={`${NON_DRAGGABLE_CLASS} transition rounded-2xl cursor-pointer absolute top-[-8px] left-[-8px] bg-white hover:bg-red-400`}
            onClick={handleClick}
        >
            <Minus size={24} className="text-black p-0.5" />
        </button>
    );
}