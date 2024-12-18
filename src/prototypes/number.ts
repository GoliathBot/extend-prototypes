Number.prototype.toOrdinal = function (): string {
    const s = ["th", "st", "nd", "rd"], v = this.valueOf() % 100;
    return this + (s[(v - 20) % 10] || s[v] || s[0]);
}