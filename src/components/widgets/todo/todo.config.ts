import { IWidgetLayoutConfig } from "../widget.type";
import { ITodoConfig } from "./todo.types";

export const TODO_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 4,
    minW: 2,
    // maxH: 3,
    // maxW: 9,
} as const;

export const TODO_DELETE_ICON_SIZE = 22;
export const TODO_ADD_ICON_SIZE = 20;
export const TODO_DEFAULT_OPTIONS: ITodoConfig = { title: 'Todo' };