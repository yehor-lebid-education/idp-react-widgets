import { Action } from "../context/widget-context/types";


export type WidgetBroadcastMessage = {
    action: Action;
    meta: { tabId: string };
}

export const tabId = crypto.randomUUID();
const _widgetBroadcastChannel = new BroadcastChannel("widget");

export const widgetBroadcastChannel = {
    postMessage: (action: Action) => {
        try {
            const message: WidgetBroadcastMessage = {
                action,
                meta: { tabId }
            };

            console.debug("Posting message to widget broadcast channel:", message);
            _widgetBroadcastChannel.postMessage(message);
        } catch (error) {
            console.error("Failed to post message to widget broadcast channel:", error);
        }
    },

    addEventListener: (callback: (event: MessageEvent<WidgetBroadcastMessage>) => void) => {
        try {
            _widgetBroadcastChannel.addEventListener("message", callback);
        } catch (error) {
            console.error("Failed to add event listener to widget broadcast channel:", error);
        }
    },

    removeEventListener: (callback: (event: MessageEvent<WidgetBroadcastMessage>) => void) => {
        try {
            _widgetBroadcastChannel.removeEventListener("message", callback);
        } catch (error) {
            console.error("Failed to remove event listener from widget broadcast channel:", error);
        }
    },

} as const;