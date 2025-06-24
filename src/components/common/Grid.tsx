import { useState } from 'react';

import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Widget from './Widget';
import classname from '../../utils/classname';
import { IWidget, IWidgetLayoutChange } from '../widgets/widget.type';
import { GRID, NON_DRAGGABLE_CLASS } from '../../constants';
import { hasLayoutChange } from '../widgets/widget.helper';
import WidgetSelector from './WidgetSelector';
import { TileButton } from './buttons/TileButton';
import WidgetContextMenu, { CONTEXT_MENU_PADDING, CONTEXT_MENU_WIDTH } from './WidgetContextMenu';
import useMode from '../../hooks/useMode';
import Guide from '../guides/Guide';

interface IPosition {
    x: number;
    y: number;
}

interface GridWidgetProps {
    widgets: IWidget[];
    // Handle both size change and movement
    onWidgetLayoutChange: (id: IWidget['id'], newLayout: IWidgetLayoutChange) => void;
    onWidgetConfigChange: (id: IWidget['id'], newConfig: Partial<IWidget['options']>) => void
    onWidgetDelete: (id: IWidget['id']) => void;
    onWidgetAdd: (widget: IWidget) => void;
}
export default function GridWidget({
    widgets,
    onWidgetLayoutChange,
    onWidgetConfigChange,
    onWidgetDelete,
    onWidgetAdd,
}: GridWidgetProps) {
    const { editMode, addMode, setMode } = useMode();
    const [contextMenu, setContextMenu] = useState<{ widgetId: IWidget['id']; position: IPosition } | null>(null);
    const contextMenuWidget = (contextMenu && widgets.find(({ id }) => id === contextMenu.widgetId)) || null;

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
        if (typeof onWidgetAdd !== 'function') {
            return;
        }

        onWidgetAdd(widget);
    }

    function handleDeleteWidget(id: IWidget['id']) {
        if (typeof onWidgetDelete !== 'function') {
            return;
        }

        onWidgetDelete(id);
    }

    function handleContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>, widget: IWidget) {
        e.preventDefault();

        if (!editMode) {
            return;
        }

        const maxX = window.innerWidth - (CONTEXT_MENU_WIDTH + CONTEXT_MENU_PADDING);
        const x = Math.min(e.pageX, maxX);
        const y = e.pageY;

        setContextMenu({ widgetId: widget.id, position: { x, y } });
    }

    return (
        <>
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
                        onContextMenu={(e) => handleContextMenu(e, widget)}
                        className={classname(
                            "bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-center text-white font-mono",
                            editMode && "border-2 animate-[pulse-border_3s_ease-in-out_infinite]",
                            widget.id === contextMenu?.widgetId && "border-4 border-white/80",
                        )}
                    >
                        {editMode && <TileButton icon="minus" position="top-left" className={[NON_DRAGGABLE_CLASS, 'hover:bg-red-400']} onClick={() => handleDeleteWidget(widget.id)} />}
                        <Widget
                            widgetId={widget.id}
                            widgetType={widget.type}
                            editMode={editMode}
                            previewMode={widget.options?.mode === 'preview' || false}
                        />
                    </div>
                ))}
            </GridLayout>


            {contextMenu && contextMenuWidget && (
                <WidgetContextMenu
                    widget={contextMenuWidget}
                    position={contextMenu.position}
                    onClose={() => setContextMenu(null)}
                    onChange={onWidgetConfigChange}
                />
            )}


            {/* Guide for new users */}
            {!widgets.length && <Guide />}

            {/* Add mode: Widget Selector Dialog */}
            {addMode && (
                <WidgetSelector
                    widgets={widgets}
                    onClose={() => setMode('add', false)}
                    onAdd={(widget: IWidget) => handleAddWidget(widget)}
                />)
            }
        </>
    );
};