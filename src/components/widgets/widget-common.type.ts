export interface IWidgetCommon {
    id: string;
    layout: Omit<ReactGridLayout.Layout, 'i'>;
}

export interface IWidgetCommonOptions {
    mode?: 'preview' | 'default';
}
