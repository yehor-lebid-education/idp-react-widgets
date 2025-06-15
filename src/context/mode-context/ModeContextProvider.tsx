import { useReducer } from "react";
import reducer from "./reducer";
import { getDefaultState } from "./defaults";
import { ModeContext } from "./ModeContext";

interface ModeContextProviderProps {
    children?: React.ReactNode;
}
export function ModeContextProvider({ children }: ModeContextProviderProps) {
    const [state, dispatch] = useReducer(reducer, getDefaultState());

    return (
        <ModeContext.Provider value={{ state, dispatch }}>
            {children}
        </ModeContext.Provider>
    )
}
