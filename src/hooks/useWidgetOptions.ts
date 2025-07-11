import { IWidget } from "../components/widgets/widget.type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../storage/store";
import { updateWidgetOptions } from "../storage/reducers/widgetsReducer";

export default function useWidgetOptions<T extends Partial<IWidget['options']> = Partial<IWidget['options']>>(id: IWidget['id']): {
    widgetOptions: T | null;
    updateWidgetOptions: (options: T) => void;
} {
    const widgetOptions = useSelector((state: RootState) => {
        const widget = state.widgets.widgets.find(({ id: widgetId }) => widgetId === id);    
        return widget?.options as T || null;
    });
    const dispatch  = useDispatch<AppDispatch>();
    
    const _updateWidgetOptions = (options: Partial<IWidget['options']>) => {
        dispatch(updateWidgetOptions({ id, options }));
    }

    return {
        widgetOptions,
        updateWidgetOptions: _updateWidgetOptions,
    }
}