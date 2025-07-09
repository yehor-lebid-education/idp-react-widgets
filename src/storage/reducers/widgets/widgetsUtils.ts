import { applyWidgetOptions } from "../../../components/widgets/widget.helper";
import { ITab } from "../../../components/widgets/tab.type";
import * as storage from "../../../utils/storage.helper";
import generateId from "../../../utils/generate-id";
import { WidgetState } from "./types";

export const getDefaultTab = (): ITab => ({
    id: generateId(),
    title: 'Tab 1',
});

export const getDefaultState = (): WidgetState => ({
    tabs: [getDefaultTab()],
    widgets: [],
    widgetsData: {},
});

export const STORAGE_KEY = 'widgets_state';

export function getInitialState(): WidgetState {
    const value = storage.get(STORAGE_KEY);
    const storageState = handleStateFromStorage(value);
    return storageState;
}


function handleStateFromStorage(state: unknown): WidgetState {
    const {
        tabs: defaultTabs,
        widgets: defaultWidgets,
        widgetsData: defaultWidgetsData,
    } = getDefaultState();

    const validState: WidgetState = {
        tabs: isValidTabs(state)               ? state.tabs        : defaultTabs,
        widgets: isValidWidgets(state)         ? state.widgets     : defaultWidgets,
        widgetsData: isValidWidgetsData(state) ? state.widgetsData : defaultWidgetsData,
    };

    // On load apply changes to widgets from configs
    validState.widgets = applyWidgetOptions(validState.widgets);

    return validState;
}

function isValidTabs(state: unknown): state is { tabs: WidgetState['tabs'] } {
    if (typeof state !== 'object' || state === null) {
        return false;
    }

    if (!('tabs' in state) || !Array.isArray(state.tabs)) {
        return false;
    }

    return state.tabs.length > 0;
}

function isValidWidgets(state: unknown): state is { widgets: WidgetState['widgets'] } {
    if (typeof state !== 'object' || state === null) {
        return false;
    }

    if (!('widgets' in state) || !Array.isArray(state.widgets)) {
        return false;
    }

    return true;
}

function isValidWidgetsData(state: unknown): state is { widgetsData: WidgetState['widgetsData'] } {
    if (typeof state !== 'object' || state === null) {
        return false;
    }

    if (!('widgetsData' in state) || typeof state.widgetsData !== 'object' || !state.widgetsData) {
        return false;
    }

    return true;
}