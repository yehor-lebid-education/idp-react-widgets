import { useState } from 'react';

import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Widget from './Widget';
import { Edit3, Eye, Minus, Plus } from 'lucide-react';
import classname from '../../utils/classname';
import { IWidget, IWidgetLayoutChange } from '../widgets/widget.type';
import { GRID, NON_DRAGGABLE_CLASS } from '../../constants';
import { hasLayoutChange } from '../widgets/widget.helper';
import WidgetSelector from './WidgetSelector';

interface GridWidgetProps {
    widgets: IWidget[];
    // Handle both size change and movement
    onWidgetLayoutChange?: (id: IWidget['id'], newLayout: IWidgetLayoutChange) => void;
    onWidgetDelete?: (id: IWidget['id']) => void;
}
export default function GridWidget({ widgets, onWidgetLayoutChange, onWidgetDelete }: GridWidgetProps) {
    const [editMode, setEditMode] = useState(true);
    const [addMode, setAddMode] = useState(true);

    function handleLayoutChange(_layout: Layout[], _oldLayout: Layout, newLayout: Layout) {
        if (typeof onWidgetLayoutChange !== 'function') {
            return;
        }

        const layoutChange = {
            x: newLayout.x,
            y: newLayout.y,
            w: newLayout.w,
            h: newLayout.h,
        };

        // Check if layout is actually changed
        const widget = widgets.find(w => w.id === newLayout.i);
        if (!widget || !hasLayoutChange(widget.layout, layoutChange)) {
            return;
        }

        onWidgetLayoutChange(widget.id, layoutChange);
    }

    function handleAddWidget(widget: IWidget) {

    }

    function handleDeleteWidget(id: IWidget['id']) {
        if (typeof onWidgetDelete !== 'function') {
            return;
        }

        onWidgetDelete(id);
    }

    return (
        <div className="w-screen h-screen bg-black">
            <GridLayout
                className="layout"
                cols={GRID.COLS}
                maxRows={GRID.ROWS}
                rowHeight={GRID.ROW_HEIGHT}
                width={GRID.WIDTH}
                margin={[12, 12]}
                isResizable={editMode}
                isDraggable={editMode}
                compactType={null}
                preventCollision={true}
                draggableCancel={GRID.DRAGGABLE_CANCEL}
                onResizeStop={handleLayoutChange}
                onDragStop={handleLayoutChange}
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
                        <Widget editMode={editMode} widget={widget} />
                    </div>
                ))}
            </GridLayout>

            <div className="flex flex-col fixed bottom-2 right-2">
                {editMode && <AddWidgetButton onClick={() => setAddMode(true)} />}
                <EditViewGridButton editMode={editMode} onClick={() => setEditMode(prev => !prev)} />
            </div>

            {addMode && (
                <WidgetSelector
                    onClose={() => setAddMode(false)}
                    onAdd={(widget: IWidget) => handleAddWidget(widget)}
                />)
            }
        </div>
    );
};

interface AddWidgetButtonProps {
    onClick: () => void;
}
function AddWidgetButton({ onClick }: AddWidgetButtonProps) {
    return (
        <button
            onClick={() => onClick()}
            title="Add"
            className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-transparent text-white hover:bg-white/20 transition shadow-md cursor-pointer"
        >
            <Plus size={20} /> Add
        </button>
    );
}


interface EditViewGridButtonProps {
    editMode: boolean;
    onClick: () => void;
}
function EditViewGridButton({ editMode, onClick }: EditViewGridButtonProps) {
    return (
        <button
            onClick={() => onClick()}
            title={editMode ? 'View' : 'Edit'}
            className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-transparent text-white hover:bg-white/20 transition shadow-md cursor-pointer"
        >
            {editMode ? <Eye size={20} /> : <Edit3 size={20} />}
            {editMode ? 'View' : ''}
        </button>
    );
}

interface ButtonDeleteProps {
    onClick?: () => void;
}
function ButtonDelete({ onClick }: ButtonDeleteProps) {
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