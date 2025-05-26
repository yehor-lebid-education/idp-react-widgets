import { useCallback } from "react";
import { IWidget } from "../components/widgets/widget.type";
import { ActionWidgetUpdateConfig, useWidgetContext } from "../context/widget-context/reducer";

type Options = ActionWidgetUpdateConfig['payload']['options'];

export default function useWidgetOptions(id: IWidget['id']): {
    widgetOptions: IWidget['options'] | null;
    updateWidgetOptions: (options: Options) => void;
} {
    const { state, dispatch } = useWidgetContext();

    const widget = state.widgets.find(({ id: widgetId }) => widgetId === id);
    const updateWidgetOptions = useCallback((options: Options) => {
        dispatch({ type: 'WIDGET_UPDATE_CONFIG', payload: { id, options } });
    }, [dispatch, id]);

    return {
        widgetOptions: widget?.options || null,
        updateWidgetOptions,
    }
}