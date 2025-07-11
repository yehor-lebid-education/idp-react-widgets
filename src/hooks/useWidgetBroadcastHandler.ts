import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { AppDispatch } from "../storage/store";
import { tabId, widgetBroadcastChannel, WidgetBroadcastMessage } from "../utils/broadcast";

export default function useWidgetBroadcastHandler() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const handleMessage = (event: MessageEvent<WidgetBroadcastMessage>) => {
            if (
                !event.data || typeof event.data !== 'object'
                || !event.data.meta || typeof event.data.meta !== 'object'
                || !event.data.action || typeof event.data.action !== 'object'
            ) {
                return console.warn("Received invalid message from widget broadcast channel:", event.data);
            }

            console.debug("Received message from widget broadcast channel:", event.data);
            if (event.data.meta.tabId === tabId) {
                return;
            }

            console.debug("Apply action from widget broadcast channel:", event.data);
            dispatch({
                ...event.data.action,
                // Change was received from broadcast, no need to emit again
                meta: { skipBroadcast: true },
            });
        };

        widgetBroadcastChannel.addEventListener(handleMessage);
        return () => widgetBroadcastChannel.removeEventListener(handleMessage);
    }, [dispatch]);
}