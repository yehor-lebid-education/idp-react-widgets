export interface IWidgetCommon {
    id: string;
    layout: Omit<ReactGridLayout.Layout, 'i'>;
}

export interface IWidgetCommonOptions {
    size?: 'small' | 'default';
    mode?: 'preview';
}
