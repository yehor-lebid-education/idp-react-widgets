import { createContext, useContext } from "react";
import { ModeAction, ModeState } from "./types";

export const ModeContext = createContext<{
    state: ModeState,
    dispatch: React.Dispatch<ModeAction>,
} | null>(null);

export function useModeContext() {
    const context = useContext(ModeContext);
    if (!context) {
        throw new Error('useModeContext must be used within a ModeContextProvider');
    }
    return context;
}
