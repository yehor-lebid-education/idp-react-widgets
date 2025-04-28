import { IWidget } from "../components/widgets/widget.type";

export function saveWidget(id: IWidget['id'], type: IWidget['type'], data: any) {
    const key = getWidgetStorageKey(id, type);
    save(key, data);
}

export function getWidget(id: IWidget['id'], type: IWidget['type']): any {
    const key = getWidgetStorageKey(id, type);
    return get(key);
}

export function save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function get(key: string): any {
    const json = localStorage.getItem(key);
    if (!json) return null;

    try {
        const parsed = JSON.parse(json);
        return parsed || null;
    } catch (error) {
        return null;
    }
}

function getWidgetStorageKey(id: IWidget['id'], type: IWidget['type']) {
    return `w-${type}-${id}`;
}
