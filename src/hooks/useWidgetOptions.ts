import { useCallback } from "react";
import { IWidget } from "../components/widgets/widget.type";
import { widgetBroadcastChannel } from "../utils/broadcast";
import { ActionWidgetUpdateConfig } from "../context/widget-context/types";
import useWidgetContextWithBroadcast from "./useWidgetContextWithBroadcast";

type Options = ActionWidgetUpdateConfig['payload']['options'];

export default function useWidgetOptions<T extends Options = Options>(id: IWidget['id']): {
    widgetOptions: T | null;
    updateWidgetOptions: (options: T) => void;
} {
    const { state, dispatch } = useWidgetContextWithBroadcast();

    const widget = state.widgets.find(({ id: widgetId }) => widgetId === id);
    const updateWidgetOptions = useCallback((options: Options) => {
        const action = { type: 'WIDGET_UPDATE_CONFIG', payload: { id, options } } as const;

        dispatch(action);
        widgetBroadcastChannel.postMessage(action);
    }, [dispatch, id]);

    return {
        widgetOptions: widget?.options as T || null,
        updateWidgetOptions,
    }
}