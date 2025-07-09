import { ITab } from "../../../components/widgets/tab.type";
import { IWidget, IWidgetLayoutChange } from "../../../components/widgets/widget.type";

export interface WidgetState {
    tabs: ITab[];
    widgets: IWidget[];
    widgetsData: { [key: IWidget['id']]: IWidget['data'] };
}

// Tabs
export type ActionTabInit = { type: 'TAB_INIT'; payload?: unknown }; // Used when there are not tabs in the state
export type ActionTabAdd = { type: 'TAB_ADD'; payload?: unknown };
export type ActionTabDelete = { type: 'TAB_DELETE'; payload: { id: ITab['id'] } };
export type ActionTabUpdate = { type: 'TAB_UPDATE'; payload: { id: ITab['id'], title: string } };

// Widgets
export type ActionWidgetAdd = { type: 'addWidget'; payload: { widget: IWidget } };
export type ActionWidgetDelete = { type: 'deleteWidget'; payload: { id: IWidget['id'] } };
export type ActionWidgetUpdateConfig = { type: 'WIDGET_UPDATE_CONFIG'; payload: { id: IWidget['id'], options: Partial<IWidget['options']> } };
export type ActionWidgetUpdateLayout = { type: 'WIDGET_UPDATE_LAYOUT'; payload: { id: IWidget['id'], layout: IWidgetLayoutChange } };
export type ActionWidgetUpdateData = { type: 'WIDGET_UPDATE_DATA'; payload: { id: IWidget['id'], data: IWidget['data'] } };

// Other
export type ActionDeleteAll = { type: 'DELETE_ALL'; };

export type Action =
    // Tabs
    | ActionTabInit
    | ActionTabAdd
    | ActionTabUpdate
    | ActionTabDelete
    // Widgets
    | ActionWidgetAdd
    | ActionWidgetDelete
    | ActionWidgetUpdateConfig
    | ActionWidgetUpdateLayout
    | ActionWidgetUpdateData
    // Other
    | ActionDeleteAll;