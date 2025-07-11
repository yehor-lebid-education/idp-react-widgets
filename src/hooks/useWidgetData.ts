import { IWidget } from "../components/widgets/widget.type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../storage/store";
import { updateWidgetData } from "../storage/reducers/widgetsReducer";

export default function useWidgetData<T extends IWidget['data'] = IWidget['data']>(id: IWidget['id']): {
    widgetData: T | null;
    updateWidgetData: (data: T) => void;
} {
    const widgetData = useSelector((state: RootState) => state.widgets.widgetsData?.[id] as T || null);
    const dispatch = useDispatch<AppDispatch>();

    const _updateWidgetData = (data: T) => dispatch(updateWidgetData({ id, data }));

    return {
        widgetData,
        updateWidgetData: _updateWidgetData,
    }
}