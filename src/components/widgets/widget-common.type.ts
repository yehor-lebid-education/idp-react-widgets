export interface IWidgetCommon {
    id: string;
    layout: Omit<ReactGridLayout.Layout, 'i'>;
    data?: unknown;
}

export interface IWidgetCommonOptions {
    mode?: 'preview' | 'default';
}
