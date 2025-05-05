export function save(key: string, data: unknown) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function get(key: string): unknown {
    const json = localStorage.getItem(key);
    if (!json) return null;

    try {
        const parsed = JSON.parse(json);
        return parsed || null;
    } catch (error) {
        console.error('Failed to parse json', error);
        return null;
    }
}

export function remove(key: string): void {
    localStorage.removeItem(key);
}