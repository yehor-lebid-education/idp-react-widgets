import { useCallback } from "react";
import { IWidget } from "../components/widgets/widget.type";
import { ActionWidgetUpdateData, useWidgetContext } from "../context/widget-context/reducer";
import { widgetBroadcastChannel } from "../utils/broadcast";

type Data = ActionWidgetUpdateData['payload']['data'];

export default function useWidgetData<T extends Data = Data>(id: IWidget['id']): {
    widgetData: T | null;
    updateWidgetData: (data: T) => void;
} {
    const { state, dispatch } = useWidgetContext();

    const widgetData = state.widgetsData?.[id] || null;
    const updateWidgetData = useCallback((data: Data) => {
        const action = { type: 'WIDGET_UPDATE_DATA', payload: { id, data } } as const;

        dispatch(action);
        widgetBroadcastChannel.postMessage(action);
    }, [dispatch, id]);

    return {
        widgetData,
        updateWidgetData,
    }
}