interface Array<T> {
    /**
     * Returns a random item from the array
     * 
     * @returns {T} The random item
     */
    getRandom(): T | undefined;
}

interface Number {
    /**
     * Converts the number to its ordinal form
     * 
     * @returns {string} The ordinal form of the number
     */
    toOrdinal(): string;
}

interface String {
    /**
     * Converts the string to a URL safe string
     *
     * @param {boolean} http - Whether to use http instead of https
     * @returns {string} The URL safe string
     */
    asUrl(http?: boolean): string;

    /**
     * Capitalizes the first letter of the string
     * 
     * @returns {string} The string with the first letter capitalized
     */
    capitalize(): string;

    /**
     * Cleans the HTML entities in the string
     * 
     * @returns {string} The string without HTML entities
     */
    decodeCommonHtmlEntities(): string;

    /**
     * Returns the links in the string
     * 
     * @returns {(string[]|null)} The links in the string
     */
    getLinks(): string[] | null;

    /**
     * Checks if the string is a hex color
     * 
     * @returns {boolean} Whether the string is a hex color
     */
    isHexColor(): boolean;

    /**
     * Pluralizes the string
     * 
     * @param {number} count - The number of items
     * @returns {string} The pluralized string
     */
    pluralize(count: number): string;

    /**
     * Converts the string into its possessive form
     * 
     * @returns {string} The string in its possessive form 
     */
    possessive(): string;

    /**
     * Prettifies the JSON string
     * 
     * @returns {string} The prettified JSON string
     */
    prettifyJson(): string;

    /**
     * Trims the string to a certain length
     * 
     * @param {number} length - The length to trim to
     * @param {boolean} noEllipsis - Whether to omit the ellipsis appended to the trimmed string
     * @returns {string} The trimmed string
     */
    trimTo(length: number, noEllipsis?: boolean): string;
}

interface URL {
    /**
     * Checks if the URL is an image
     *  
     * @returns {Promise<boolean>} Whether the URL is an image
     */
    isImage(): Promise<boolean>;
}