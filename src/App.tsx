import GridWidget from './components/common/Grid';
import { IWidget, IWidgetLayoutChange } from './components/widgets/widget.type';
import { useWidgetContext } from './context/WidgetContext';


export default function App() {
    const { state, dispatch } = useWidgetContext();

    function handleWidgetDelete(id: IWidget['id']) {
        dispatch({ type: 'WIDGET_DELETE', payload: { id } });
    }

    function handleWidgetLayoutChange(id: IWidget['id'], layout: IWidgetLayoutChange) {
        dispatch({ type: 'WIDGET_UPDATE_LAYOUT', payload: { id, layout } });
    }

    return (
        <GridWidget
            widgets={state.widgets}
            onWidgetDelete={handleWidgetDelete}
            onWidgetLayoutChange={handleWidgetLayoutChange}
        />
    )
}
