import { IWidget } from "../../components/widgets/widget.type";
import generateId from "../../utils/generate-id";
import { getDefaultState, getDefaultTab } from "./defaults";
import { ActionTabDelete, ActionTabUpdate, ActionWidgetAdd, ActionWidgetDelete, ActionWidgetUpdateConfig, ActionWidgetUpdateData, ActionWidgetUpdateLayout, State } from "./types";

export function handleWidgetAddAction(state: State, { payload }: ActionWidgetAdd): State {
    const newWidgets = [...state.widgets, payload.widget];
    return { ...state, widgets: newWidgets };
}

export function handleWidgetDeleteAction(state: State, { payload }: ActionWidgetDelete): State {
    // Delete widget
    const newWidgets = state.widgets.filter(widget => widget.id !== payload.id);

    // Delete widget data
    const newWidgetData = { ...state.widgetsData };
    delete newWidgetData[payload.id];

    return {
        ...state,
        widgets: newWidgets,
        widgetsData: newWidgetData,
    };
}

export function handleWidgetUpdateConfigAction(state: State, { payload }: ActionWidgetUpdateConfig): State {
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

export function handleWidgetUpdateLayoutAction(state: State, { payload }: ActionWidgetUpdateLayout): State {
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

export function handleWidgetUpdateData(state: State, { payload }: ActionWidgetUpdateData): State {
    return {
        ...state,
        widgetsData: {
            ...state.widgetsData,
            [payload.id]: payload.data,
        },
    };
}

export function handleTabInitAction(state: State): State {
    const tab = getDefaultTab();

    // Assign the new tab ID to existing widgets
    const newWidgets = state.widgets.map(widget => ({
        ...widget,
        tabId: tab.id,
    }));

    return { ...state, tabs: [tab], widgets: newWidgets };

}

export function handleTabAddAction(state: State): State {
    const newTab = {
        id: generateId(),
        title: `Tab ${state.tabs.length + 1}`,
    };
    return { ...state, tabs: [...state.tabs, newTab] };
}

export function handleTabUpdateAction(state: State, { payload }: ActionTabUpdate): State {
    const newTabs = state.tabs.map(tab => {
        if (tab.id === payload.id) {
            return { ...tab, ...payload, id: tab.id };
        }
        return tab;
    });

    return { ...state, tabs: newTabs };
}

export function handleTabDeleteAction(state: State, { payload }: ActionTabDelete): State {
    if (state.tabs.length === 1) {
        return state; // Prevent deleting the last tab
    }

    // Step 1: Handle widgets
    const newWidgets: IWidget[] = [];
    const widgetIdsToDelete: string[] = [];
    state.widgets.forEach(widget => {
        if (widget.tabId === payload.id) {
            widgetIdsToDelete.push(widget.id);
        } else {
            newWidgets.push(widget);
        }
    });

    // Step 2: Handle widgets data
    const newWidgetData = { ...state.widgetsData };
    widgetIdsToDelete.forEach(id => {
        delete newWidgetData[id];
    });

    // Step 3: Filter out the tab
    const newTabs = state.tabs.filter(tab => tab.id !== payload.id);

    return {
        ...state,
        tabs: newTabs,
        widgets: newWidgets,
        widgetsData: newWidgetData,
    };
}

export function handleDeleteAllAction(): State {
    return getDefaultState();
}
