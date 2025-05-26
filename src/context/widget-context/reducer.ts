

import * as storage from "../../utils/storage.helper";
import { IWidget, IWidgetLayoutChange } from "../../components/widgets/widget.type";
import { createContext, useContext } from "react";

// STATE:
export type State = {
    widgets: IWidget[];
    widgetsData: { [key: IWidget['id']]: IWidget['data'] };
};


// ACTIONS::
export type ActionWidgetAdd = { type: 'WIDGET_ADD'; payload: { widget: IWidget } };
export type ActionWidgetDelete = { type: 'WIDGET_DELETE'; payload: { id: IWidget['id'] } };
export type ActionWidgetUpdateConfig = { type: 'WIDGET_UPDATE_CONFIG'; payload: { id: IWidget['id'], options: Partial<IWidget['options']> } };
export type ActionWidgetUpdateLayout = { type: 'WIDGET_UPDATE_LAYOUT'; payload: { id: IWidget['id'], layout: IWidgetLayoutChange } };
export type ActionWidgetUpdateData = { type: 'WIDGET_UPDATE_DATA'; payload: { id: IWidget['id'], data: IWidget['data'] } };
export type ActionDeleteAll = { type: 'DELETE_ALL'; };
export type Action =
    | ActionWidgetAdd
    | ActionWidgetDelete
    | ActionWidgetUpdateConfig
    | ActionWidgetUpdateLayout
    | ActionWidgetUpdateData
    | ActionDeleteAll;


// CONSTANTS:
export const DEFAULT_STATE: State = {
    widgets: [],
    widgetsData: {},
};


// REDUCER:
export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'WIDGET_ADD':
            return handleWidgetAddAction(state, action);
        case 'WIDGET_DELETE':
            return handleWidgetDeleteAction(state, action);
        case 'WIDGET_UPDATE_CONFIG':
            return handleWidgetUpdateConfigAction(state, action);
        case 'WIDGET_UPDATE_LAYOUT':
            return handleWidgetUpdateLayoutAction(state, action);
        case 'WIDGET_UPDATE_DATA':
            return handleWidgetUpdateData(state, action);
        case 'DELETE_ALL':
            return handleDeleteAllAction(state);
        default:
            throw new Error(`Unknown action type: ${action['type']}`);
    }
}


// CONTEXT:
export const WidgetContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
} | null>(null);

export function useWidgetContext() {
    const context = useContext(WidgetContext);
    if (!context) {
        throw new Error('useWidgetContext must be used within a WidgetContextProvider');
    }
    return context;
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

function handleWidgetUpdateConfigAction(state: State, { payload }: ActionWidgetUpdateConfig): State {
    const newWidgets = state.widgets.map(widget => {
        if (widget.id === payload.id) {
            return {
                ...widget,
                options: { ...widget.options, ...payload.options }
            };
        }
        return widget;
    }) as IWidget[];
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

function handleWidgetUpdateData(state: State, { payload }: ActionWidgetUpdateData): State {
    return {
        ...state,
        widgetsData: {
            ...state.widgetsData,
            [payload.id]: payload.data,
        },
    };
}

function handleDeleteAllAction(state: State) {
    // TODO: Maybe move to other place, since reducer should not have side effects:
    state.widgets.forEach(({ id }) => storage.remove(id));
    return DEFAULT_STATE;
}