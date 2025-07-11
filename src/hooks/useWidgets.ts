import { useDispatch, useSelector } from "react-redux";
import { ITab } from "../components/widgets/tab.type";
import { AppDispatch, RootState } from "../storage/store";
import { IWidget, IWidgetLayoutChange } from "../components/widgets/widget.type";
import { addWidget, deleteAll, deleteWidget, updateWidgetOptions, updateWidgetLayout } from "../storage/reducers/widgetsReducer";

export default function useWidgetsData() {
    const widgets = useSelector((state: RootState) => state.widgets.widgets);
    const dispatch = useDispatch<AppDispatch>();

    const widgetDelete = (id: IWidget['id']) => dispatch(deleteWidget({ id }));

    const widgetUpdateConfig = (
        id: IWidget['id'],
        options: Partial<IWidget['options']>
    ) => dispatch(updateWidgetOptions({ id, options }));

    const widgetUpdateLayout = (
        id: IWidget['id'],
        layout: IWidgetLayoutChange
    ) => dispatch(updateWidgetLayout({ id, layout }));

    const widgetAdd = (
        widget: IWidget,
        tabId: ITab['id']
    ) => dispatch(addWidget({ widget: { ...widget, tabId } }));

    const _deleteAll = () => dispatch(deleteAll());

    return {
        widgets,
        widgetDelete,
        widgetUpdateConfig,
        widgetUpdateLayout,
        widgetAdd,
        deleteAll: _deleteAll,
    };
}