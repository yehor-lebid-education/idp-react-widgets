import { IWidget } from "../components/widgets/widget.type";

export function getStorageKey(id: IWidget['id'], type: IWidget['type']) {
    return `w-${type}-${id}`;
}

export function save(id: IWidget['id'], type: IWidget['type'], data: any) {
    const key = getStorageKey(id, type);
    localStorage.setItem(key, JSON.stringify(data));
}

export function get(id: IWidget['id'], type: IWidget['type']): any {
    const key = getStorageKey(id, type);
    const json = localStorage.getItem(key);
    if (!json) return [];

    try {
        const parsed = JSON.parse(json);
        return parsed || null;
    } catch (error) {
        return null;
    }
}
