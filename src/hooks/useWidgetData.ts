import { useCallback } from "react";
import { IWidget } from "../components/widgets/widget.type";
import { ActionWidgetUpdateData, useWidgetContext } from "../context/widget-context/reducer";

type Data = ActionWidgetUpdateData['payload']['data'];

export default function useWidgetData<T extends Data = Data>(id: IWidget['id']): {
    widgetData: T | null;
    updateWidgetData: (data: T) => void;
} {
    const { state, dispatch } = useWidgetContext();

    const widgetData = state.widgetsData?.[id] || null;
    const updateWidgetData = useCallback((data: Data) => {
        dispatch({ type: 'WIDGET_UPDATE_DATA', payload: { id, data } });
    }, [dispatch, id]);

    return {
        widgetData,
        updateWidgetData,
    }
}