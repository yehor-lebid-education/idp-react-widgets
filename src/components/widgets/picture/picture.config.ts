import { IWidgetLayoutConfig } from "../widget.type";
import { IPictureConfig } from "./picture.types";

export const PICTURE_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 1,
    maxH: 9,
    // maxW: 9,
}

export const PICTURE_DEFAULT_OPTIONS: IPictureConfig = {
    url: 'https://picsum.photos/240/90',
    title: 'Picture',
    width: 100,
};