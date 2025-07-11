import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDefaultTab, getInitialState } from "./widgets/widgetsUtils";
import { IWidget, IWidgetLayoutChange } from "../../components/widgets/widget.type";
import generateId from "../../utils/generate-id";

const initialState = getInitialState();

export const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidget: (state, action: PayloadAction<{ widget: IWidget }>) => {
            const { widget } = action.payload;
            state.widgets.push(widget);
        },
        deleteWidget: (state, action: PayloadAction<{ id: IWidget['id'] }>) => {
            const { id } = action.payload;
            // Delete widget data
            delete state.widgetsData[id];
            // Delete widget
            state.widgets = state.widgets.filter(widget => widget.id !== id);
        },
        updateWidgetOptions: (state, action: PayloadAction<{ id: IWidget['id'], options: Partial<IWidget['options']> }>) => {
            const { id, options } = action.payload;
            const widget = state.widgets.find(widget => widget.id === id);
            if (widget) {
                widget.options = { ...widget.options, ...options };
            }
        },
        updateWidgetLayout: (state, action: PayloadAction<{ id: IWidget['id'], layout: IWidgetLayoutChange }>) => {
            const { id, layout } = action.payload;
            const widget = state.widgets.find(widget => widget.id === id);
            if (widget) {
                widget.layout = { ...widget.layout, ...layout };
            }
        },
        updateWidgetData: (state, action: PayloadAction<{ id: IWidget['id'], data: IWidget['data'] }>) => {
            const { id, data } = action.payload;
            state.widgetsData[id] = data;
        },
        initTab: (state) => {
            const tab = getDefaultTab();
            // Assign the new tab ID to existing widgets
            const newWidgets = state.widgets.map(widget => ({
                ...widget,
                tabId: tab.id,
            }));
            // Reset state with the new tab and updated widgets
            state.tabs = [tab];
            state.widgets = newWidgets;
        },
        addTab: (state) => {
            const newTab = {
                id: generateId(),
                title: `Tab ${state.tabs.length + 1}`,
            }
            state.tabs.push(newTab);
        },
        updateTab: (state, action: PayloadAction<{ id: string, title: string }>) => {
            const { id, title } = action.payload;
            const tab = state.tabs.find(tab => tab.id === id);
            if (tab) {
                tab.title = title;
            }
        },
        deleteTab: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;

            if (state.tabs.length === 1) return; // Prevent deleting the last tab

            // Collect IDs of widgets to delete and filter widgets
            const widgetIdsToDelete = new Set<string>();

            state.widgets = state.widgets.filter(widget => {
                const shouldDelete = widget.tabId === id;
                if (shouldDelete) widgetIdsToDelete.add(widget.id);
                return !shouldDelete;
            });

            // Delete corresponding widget data
            widgetIdsToDelete.forEach(widgetId => {
                delete state.widgetsData[widgetId];
            });

            // Remove the tab
            state.tabs = state.tabs.filter(tab => tab.id !== id);
        },
        deleteAll: (state) => {
            state.tabs = [];
            state.widgets = [];
            state.widgetsData = {};
        },
    },
});

export const {
    addWidget,
    deleteWidget,
    updateWidgetOptions,
    updateWidgetLayout,
    updateWidgetData,
    initTab,
    addTab,
    updateTab,
    deleteTab,
    deleteAll,
} = widgetsSlice.actions;
export default widgetsSlice.reducer;
export type WidgetActions = typeof widgetsSlice.actions;