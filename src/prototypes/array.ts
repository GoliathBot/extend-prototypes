Array.prototype.getRandom = function (): any {
    return this[Math.floor(Math.random() * this.length)];
};