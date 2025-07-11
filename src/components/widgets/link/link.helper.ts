
export function getFaviconUrl(url: string): string {
    try {
        const { hostname } = new URL(url);
        return `https://${hostname}/favicon.ico`;
    } catch (error) {
        console.warn(error);
        return '';
    }
}
