import { IWidgetLayoutConfig } from "../widget.type";

export const PICTURE_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 1,
    maxH: 9,
    // maxW: 9,
}

export const PICTURE_DEFAULT_OPTIONS = {
    url: 'https://picsum.photos/240/90',
    title: 'Picture',
} as const;