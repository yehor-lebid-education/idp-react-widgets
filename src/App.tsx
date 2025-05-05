import GridWidget from './components/common/Grid';
import { useWidgetContext } from './context/widget-context/reducer';
import { IWidget, IWidgetLayoutChange } from './components/widgets/widget.type';


export default function App() {
    const { state, dispatch } = useWidgetContext();

    function handleWidgetDelete(id: IWidget['id']) {
        dispatch({ type: 'WIDGET_DELETE', payload: { id } });
    }

    function handleWidgetLayoutChange(id: IWidget['id'], layout: IWidgetLayoutChange) {
        dispatch({ type: 'WIDGET_UPDATE_LAYOUT', payload: { id, layout } });
    }

    function handleWidgetAdd(widget: IWidget) {
        dispatch({ type: 'WIDGET_ADD', payload: { widget } });
    }

    function handleDeleteAll() {
        dispatch({ type: 'DELETE_ALL' });
    }

    return (
        <GridWidget
            widgets={state.widgets}
            onWidgetAdd={handleWidgetAdd}
            onWidgetDelete={handleWidgetDelete}
            onWidgetLayoutChange={handleWidgetLayoutChange}
            onDeleteAll={handleDeleteAll}
        />
    )
}
