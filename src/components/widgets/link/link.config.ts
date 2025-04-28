import { IWidgetLayoutConfig } from "../widget.type";
import { ILinkWidget } from "./link.types";

export const LINK_ICON_SIZE = 20;

export const LINK_LAYOUT_CONFIG: IWidgetLayoutConfig = {
    minH: 1,
    minW: 1,
    maxH: 2,
    maxW: 1,
} as const

export const LINK_DEFAULT_OPTIONS: ILinkWidget['options'] = { label: 'Google', url: 'https://google.com' };
