export default interface IWidgetCommon {
    id: string;
    layout: Omit<ReactGridLayout.Layout, 'i'>;
}
