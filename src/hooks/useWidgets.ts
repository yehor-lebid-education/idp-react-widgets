import { ITab } from "../components/widgets/tab.type";
import { IWidget, IWidgetLayoutChange } from "../components/widgets/widget.type";
import useWidgetContextWithBroadcast from "./useWidgetContextWithBroadcast";

export default function useWidgetsData() {
    const { state, dispatch } = useWidgetContextWithBroadcast();
    const widgets = state.widgets;

    const widgetDelete = (id: IWidget['id']) => dispatch({
        type: 'WIDGET_DELETE',
        payload: { id }
    });
    const widgetUpdateConfig = (id: IWidget['id'], options: Partial<IWidget['options']>) => dispatch({
        type: 'WIDGET_UPDATE_CONFIG',
        payload: { id, options }
    });
    const widgetUpdateLayout = (id: IWidget['id'], layout: IWidgetLayoutChange) => dispatch({
        type: 'WIDGET_UPDATE_LAYOUT',
        payload: { id, layout }
    });
    const widgetAdd = (widget: IWidget, tabId: ITab['id']) => dispatch({
        type: 'WIDGET_ADD',
        payload: { widget: { ...widget, tabId } }
    });
    const deleteAll = () => dispatch({
        type: 'DELETE_ALL',
    });

    return {
        widgets,
        widgetDelete,
        widgetUpdateConfig,
        widgetUpdateLayout,
        widgetAdd,
        deleteAll,
    };
}