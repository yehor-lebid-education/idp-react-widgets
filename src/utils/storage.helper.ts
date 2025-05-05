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

export function remove(key: string) {
    localStorage.removeItem(key);
}