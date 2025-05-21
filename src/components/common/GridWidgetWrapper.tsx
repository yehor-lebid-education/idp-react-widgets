import { useSearchParams } from "react-router-dom";
import { useWidgetContext } from "../../context/widget-context/reducer";
import { IWidget, IWidgetLayoutChange } from "../widgets/widget.type";
import GridWidget from "./GridWidget";

export default function GridWidgetWrapper() {
    const { state, dispatch } = useWidgetContext();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const mode = searchParams.get('mode') === 'edit' ? 'edit' : 'view';

    function handleModeChange(mode: 'view' | 'edit') {
        if (mode === 'edit') {
            searchParams.set('mode', 'edit')
            setSearchParams(searchParams);
        } else {
            searchParams.delete('mode')
            setSearchParams(searchParams);
        }
    }

    function handleWidgetDelete(id: IWidget['id']) {
        dispatch({ type: 'WIDGET_DELETE', payload: { id } });
    }

    function handleWidgetConfigChange(id: IWidget['id'], options: Partial<IWidget['options']>) {
        dispatch({ type: 'WIDGET_UPDATE_CONFIG', payload: { id, options } });
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
            mode={mode}
            onModeChange={handleModeChange}
            widgets={state.widgets}
            onWidgetAdd={handleWidgetAdd}
            onWidgetDelete={handleWidgetDelete}
            onWidgetConfigChange={handleWidgetConfigChange}
            onWidgetLayoutChange={handleWidgetLayoutChange}
            onDeleteAll={handleDeleteAll}
        />
    )
}