import { IWidgetLayoutConfig } from "../widget.type";
import { INotepadWidget } from "./notepad.types";

export const NOTEPAD_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 3,
    minW: 2,
    maxH: 9,
    maxW: 4,
} as const;

export const NOTEPAD_DEFAULT_OPTIONS: INotepadWidget['options'] = { title: '📝 Notes'};
