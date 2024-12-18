String.prototype.asUrl = function (http: boolean = false): string {
    const regex = new RegExp("^(http|https)://");
    if (this.match(regex)) return this.valueOf();

    return http ? "http://" : "https://" + this.valueOf();
}

String.prototype.capitalize = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decodeCommonHtmlEntities = function (): string {
    const entityMap: { [key: string]: string } = {
        '&nbsp;': ' ',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#x2F;': '/',
        '&#x60;': '`',
        '&#x3D;': '='
    };

    return this.replace(/&[^;]+;/g, function (match) {
        return entityMap[match] || match;
    });
}

String.prototype.getLinks = function (): string[] | null {
    const match = this.valueOf().match(/https?:\/\/[^\s]+/g);
    return match || null;
}

String.prototype.isHexColor = function (): boolean {
    return /^#([0-9A-F]{3,4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(this.valueOf());
}

String.prototype.pluralize = function (count: number): string {
    return this.valueOf() + (count === 1 ? '' : 's');
}

String.prototype.possessive = function (): string {
    if (this.valueOf() === '') return this.valueOf();
    return `${this.valueOf()}${this.valueOf().slice(-1).toLowerCase() == 's' ? "'" : "'s"}`;
}

String.prototype.prettifyJson = function (): string {
    const cleaned = JSON.stringify(JSON.parse(this.valueOf()), null, 2);

    return cleaned.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, function (match) {
        return match.replace(/"/g, "");
    });
}

String.prototype.trimTo = function (length: number, noEllipsis: boolean = false): string {
    return this.valueOf().length > length ? `${this.valueOf().slice(0, length)}${noEllipsis ? '' : '...'}` : this.valueOf();
}