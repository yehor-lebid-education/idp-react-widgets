import GridWidget from './components/common/Grid';
import { Action, useWidgetContext } from './context/widget-context/reducer';
import { IWidget, IWidgetLayoutChange } from './components/widgets/widget.type';
import useWidgetBroadcastHandler from './hooks/useWidgetBroadcastHandler';
import { widgetBroadcastChannel } from './utils/broadcast';


export default function App() {
    useWidgetBroadcastHandler();

    const { state, dispatch } = useWidgetContext();
    const dispatchAction = (action: Action) => {
        dispatch(action);
        widgetBroadcastChannel.postMessage(action);
    };

    function handleWidgetDelete(id: IWidget['id']) {
        dispatchAction({ type: 'WIDGET_DELETE', payload: { id } });
    }

    function handleWidgetConfigChange(id: IWidget['id'], options: Partial<IWidget['options']>) {
        dispatchAction({ type: 'WIDGET_UPDATE_CONFIG', payload: { id, options } });
    }

    function handleWidgetLayoutChange(id: IWidget['id'], layout: IWidgetLayoutChange) {
        dispatchAction({ type: 'WIDGET_UPDATE_LAYOUT', payload: { id, layout } });
    }

    function handleWidgetAdd(widget: IWidget) {
        dispatchAction({ type: 'WIDGET_ADD', payload: { widget } });
    }

    function handleDeleteAll() {
        dispatchAction({ type: 'DELETE_ALL' });
    }

    return (
        <GridWidget
            widgets={state.widgets}
            onWidgetAdd={handleWidgetAdd}
            onWidgetDelete={handleWidgetDelete}
            onWidgetConfigChange={handleWidgetConfigChange}
            onWidgetLayoutChange={handleWidgetLayoutChange}
            onDeleteAll={handleDeleteAll}
        />
    )
}
