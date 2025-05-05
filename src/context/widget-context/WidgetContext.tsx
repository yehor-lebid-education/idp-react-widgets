import { useEffect, useReducer } from "react";
import * as storage from "../../utils/storage.helper";
import { State, WidgetContext, reducer, DEFAULT_STATE } from "./reducer";
import { applyWidgetOptions } from "../../components/widgets/widget.helper";


const STORAGE_KEY = 'widgets_state';


interface WidgetContextProviderProps {
    children?: React.ReactNode;
}
export function WidgetContextProvider({ children }: WidgetContextProviderProps) {
    const [state, dispatch] = useReducer(reducer, getInitialState());

    useEffect(() => {
        storage.save(STORAGE_KEY, state);
    }, [state]);

    return (
        <WidgetContext.Provider value={{ state, dispatch }}>
            {children}
        </WidgetContext.Provider>
    )
}

// TOOLS:
function getInitialState(): State {
    const value = storage.get(STORAGE_KEY);
    const initialState: State = value && typeof value === 'object' ? value : DEFAULT_STATE;

    // On load apply changes to widgets from configs
    initialState.widgets = applyWidgetOptions(initialState.widgets);

    return initialState;
}
