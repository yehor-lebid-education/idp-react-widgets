import { ITab } from "../../components/widgets/tab.type";
import generateId from "../../utils/generate-id";
import { State } from "./types";

export const getDefaultTab = (): ITab => ({
    id: generateId(),
    title: 'Tab 1',
});

export const getDefaultState = (): State => ({
    tabs: [getDefaultTab()],
    widgets: [],
    widgetsData: {},
});

export const STORAGE_KEY = 'widgets_state';
