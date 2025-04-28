import { IWidget } from "./widget.type";

export type ITab = {
    id: string;
    title: string;
    widgets: IWidget[];
    isActive: boolean;
};