import { useEffect, useReducer } from "react";

import { State } from "./types";
import * as storage from "../../utils/storage.helper";
import { getDefaultState, STORAGE_KEY } from "./defaults";
import { applyWidgetOptions } from "../../components/widgets/widget.helper";
import { reducer } from "./reducer";
import { WidgetContext } from "./WidgetContext";


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

    const storageState = handleStateFromStorage(value);

    return storageState;
}


function handleStateFromStorage(state: unknown): State {
    const {
        tabs: defaultTabs,
        widgets: defaultWidgets,
        widgetsData: defaultWidgetsData,
    } = getDefaultState();

    const validState: State = {
        tabs: isValidTabs(state)               ? state.tabs        : defaultTabs,
        widgets: isValidWidgets(state)         ? state.widgets     : defaultWidgets,
        widgetsData: isValidWidgetsData(state) ? state.widgetsData : defaultWidgetsData,
    };

    // On load apply changes to widgets from configs
    validState.widgets = applyWidgetOptions(validState.widgets);

    return validState;
}

function isValidTabs(state: unknown): state is { tabs: State['tabs'] } {
    if (typeof state !== 'object' || state === null) {
        return false;
    }

    if (!('tabs' in state) || !Array.isArray(state.tabs)) {
        return false;
    }

    return state.tabs.length > 0;
}

function isValidWidgets(state: unknown): state is { widgets: State['widgets'] } {
    if (typeof state !== 'object' || state === null) {
        return false;
    }

    if (!('widgets' in state) || !Array.isArray(state.widgets)) {
        return false;
    }

    return true;
}

function isValidWidgetsData(state: unknown): state is { widgetsData: State['widgetsData'] } {
    if (typeof state !== 'object' || state === null) {
        return false;
    }

    if (!('widgetsData' in state) || typeof state.widgetsData !== 'object' || !state.widgetsData) {
        return false;
    }

    return true;
}