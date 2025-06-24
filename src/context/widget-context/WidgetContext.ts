import { createContext, useContext } from "react";
import { Action, State } from "./types";

export const WidgetContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
} | null>(null);

/**
 * To access data please use `useWidgetContextWithBroadcast()` hook. (It will handle broadcasting)
 */
export function useWidgetContext() {
    const context = useContext(WidgetContext);
    if (!context) {
        throw new Error('useWidgetContext must be used within a WidgetContextProvider');
    }
    return context;
}