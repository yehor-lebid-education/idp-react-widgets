import { Action, ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { widgetBroadcastChannel } from "../../utils/broadcast";

type ActionWithMeta = Action & {
    meta?: {
        skipBroadcast: boolean,
    },
}

const addBroadcastMiddleware = (listenerMiddleware: ListenerMiddlewareInstance) => {
    listenerMiddleware.startListening({
        matcher: (action: ActionWithMeta): action is ActionWithMeta =>
            action.type.startsWith('widgets/') && !action.meta?.skipBroadcast,
        effect: async (action: ActionWithMeta) => widgetBroadcastChannel.postMessage(action),
    });
}

export default addBroadcastMiddleware;