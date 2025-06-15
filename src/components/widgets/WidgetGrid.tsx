import GridWidget from "../common/Grid";
import { Action } from "../../context/widget-context/types";
import { IWidget, IWidgetLayoutChange } from "./widget.type";
import { widgetBroadcastChannel } from "../../utils/broadcast";
import { useWidgetContext } from "../../context/widget-context/reducer";
import { ITab } from "./tab.type";

interface WidgetGridProps {
    activeTabId: ITab['id'];
}

export default function WidgetGrid({ activeTabId }: WidgetGridProps) {
    const { state, dispatch } = useWidgetContext();
    const widgets = state.widgets.filter(widget => widget.tabId === activeTabId);


    const dispatchAction = (action: Action) => {
        dispatch(action);
        widgetBroadcastChannel.postMessage(action);
    };

    const handlers = {
        handleWidgetDelete: (id: IWidget['id']) => dispatchAction({
            type: 'WIDGET_DELETE',
            payload: { id }
        }),
        handleWidgetConfigChange: (id: IWidget['id'], options: Partial<IWidget['options']>) => dispatchAction({
            type: 'WIDGET_UPDATE_CONFIG',
            payload: { id, options }
        }),
        handleWidgetLayoutChange: (id: IWidget['id'], layout: IWidgetLayoutChange) => dispatchAction({
            type: 'WIDGET_UPDATE_LAYOUT',
            payload: { id, layout }
        }),
        handleWidgetAdd: (widget: IWidget) => dispatchAction({
            type: 'WIDGET_ADD',
            payload: { widget: { ...widget, tabId: activeTabId } }
        }),
        handleDeleteAll: () => dispatchAction({
            type: 'DELETE_ALL',
        }),
    };

    return (
        <GridWidget
            widgets={widgets}
            onWidgetAdd={handlers.handleWidgetAdd}
            onWidgetDelete={handlers.handleWidgetDelete}
            onWidgetConfigChange={handlers.handleWidgetConfigChange}
            onWidgetLayoutChange={handlers.handleWidgetLayoutChange}
            onDeleteAll={handlers.handleDeleteAll}
        />
    );
}
