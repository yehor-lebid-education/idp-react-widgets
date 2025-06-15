export interface IWidgetCommon {
    id: string;
    layout: Omit<ReactGridLayout.Layout, 'i'>;
    data?: unknown;
    tabId: string;
}

export interface IWidgetCommonOptions {
    mode?: 'preview' | 'default';
}
