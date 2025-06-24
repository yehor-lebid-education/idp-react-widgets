import { useCallback } from "react";
import { IWidget } from "../components/widgets/widget.type";
import { widgetBroadcastChannel } from "../utils/broadcast";
import useWidgetContextWithBroadcast from "./useWidgetContextWithBroadcast";
import { ActionWidgetUpdateData } from "../context/widget-context/types";

type Data = ActionWidgetUpdateData['payload']['data'];

export default function useWidgetData<T extends Data = Data>(id: IWidget['id']): {
    widgetData: T | null;
    updateWidgetData: (data: T) => void;
} {
    const { state, dispatch } = useWidgetContextWithBroadcast();

    const widgetData = state.widgetsData?.[id] as T || null;
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