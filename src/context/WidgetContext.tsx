import { createContext, useContext, useEffect, useReducer } from "react";
import { IWidget, IWidgetLayoutChange } from "../components/widgets/widget.type";
import * as storage from "../utils/storage.helper";
import { applyWidgetOptions } from "../components/widgets/widget.helper";


// STATE:
type State = {
    widgets: IWidget[];
};


// ACTIONS::
type ActionWidgetAdd = { type: 'WIDGET_ADD'; payload: { widget: IWidget } };
type ActionWidgetDelete = { type: 'WIDGET_DELETE'; payload: { id: IWidget['id'] } };
type ActionWidgetUpdateLayout = { type: 'WIDGET_UPDATE_LAYOUT'; payload: { id: IWidget['id'], layout: IWidgetLayoutChange } };
type ActionDeleteAll = { type: 'DELETE_ALL'; };
type Action =
    | ActionWidgetAdd
    | ActionWidgetDelete
    | ActionWidgetUpdateLayout
    | ActionDeleteAll;


// CONSTANTS:
const STORAGE_KEY = 'widgets_state';
const DEFAULT_STATE: State = {
    widgets: [],
};


// REDUCER:
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'WIDGET_ADD':
            return handleWidgetAddAction(state, action);
        case 'WIDGET_DELETE':
            return handleWidgetDeleteAction(state, action);
        case 'WIDGET_UPDATE_LAYOUT':
            return handleWidgetUpdateLayoutAction(state, action);
        case 'DELETE_ALL':
            return handleDeleteAllAction(state, action);
        default:
            throw new Error(`Unknown action type: ${action['type']}`);
    }
}


// CONTEXT:
export const WidgetContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
} | null>(null);

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

export function useWidgetContext() {
    const context = useContext(WidgetContext);
    if (!context) {
        throw new Error('useWidgetContext must be used within a WidgetContextProvider');
    }
    return context;
}


// TOOLS:
function getInitialState(): State {
    const value = storage.get(STORAGE_KEY);
    const initialState: State = value && typeof value === 'object' ? value : DEFAULT_STATE;

    // On load apply changes to widgets from configs
    initialState.widgets = applyWidgetOptions(initialState.widgets);

    return initialState;
}

function handleWidgetAddAction(state: State, { payload }: ActionWidgetAdd): State {
    const newWidgets = [...state.widgets, payload.widget];
    return { ...state, widgets: newWidgets };
}

function handleWidgetDeleteAction(state: State, { payload }: ActionWidgetDelete): State {
    const newWidgets = state.widgets.filter(widget => widget.id !== payload.id);

    // TODO: Maybe move to other place, since reducer should not have side effects:
    storage.remove(payload.id);

    return { ...state, widgets: newWidgets };
}

function handleWidgetUpdateLayoutAction(state: State, { payload }: ActionWidgetUpdateLayout): State {
    const newWidgets = state.widgets.map(widget => {
        if (widget.id === payload.id) {
            return {
                ...widget,
                layout: { ...widget.layout, ...payload.layout }
            };
        }
        return widget;
    });
    return { ...state, widgets: newWidgets };
}

function handleDeleteAllAction(state: State, action: ActionDeleteAll) {
    // TODO: Maybe move to other place, since reducer should not have side effects:
    state.widgets.forEach(({ id }) => storage.remove(id));
    return DEFAULT_STATE;
}