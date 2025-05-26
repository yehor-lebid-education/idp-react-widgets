export interface IWidgetCommon {
    id: string;
    layout: Omit<ReactGridLayout.Layout, 'i'>;
    data?: any;
}

export interface IWidgetCommonOptions {
    mode?: 'preview' | 'default';
}
