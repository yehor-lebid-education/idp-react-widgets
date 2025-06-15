import { Action } from "../context/widget-context/types";
import { useWidgetContext } from "../context/widget-context/WidgetContext";
import { widgetBroadcastChannel } from "../utils/broadcast";

export default function useWidgetContextWithBroadcast() {
    const { state, dispatch } = useWidgetContext();

    function dispatchWithBroadcast(action: Action) {
        dispatch(action);
        widgetBroadcastChannel.postMessage(action);
    }

    return {
        state,
        dispatch: dispatchWithBroadcast,
    };
}
