export function save(key: string, data: unknown) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(data));
}

export function get(key: string): unknown {
    if (typeof window === 'undefined') return null;

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