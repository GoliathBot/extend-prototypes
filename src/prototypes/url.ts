URL.prototype.isImage = async function (): Promise<boolean> {
    try {
        const response = await fetch(this.href, { method: 'HEAD' });
        if (!response.ok) return false;
        const contentType = response.headers.get('content-type');
        return contentType?.startsWith('image/') || false;
    } catch {
        return false;
    }
}
