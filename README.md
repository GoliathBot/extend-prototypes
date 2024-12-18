# Extend Prototypes
This library is used by Goliath to extend various prototypes to make things a bit simpler.

## Installation
```
npm install @goliathbot/extend-prototypes
```

## Usage
```ts
import '@goliathbot/extend-prototypes';
```

Then you can use the prototypes like this:

```ts
import '@goliathbot/extend-prototypes';

const arr = [1, 2, 3];
const randomItem = arr.getRandom(); // 1, 2, or 3
```

## Methods

### Array
- `getRandom(): T | undefined`: Returns a random item from the array.

### Number
- `toOrdinal(): string`: Converts the number to its ordinal form.

### String
- `asUrl(http?: boolean): string`: Converts the string to a URL safe string.
- `capitalize(): string`: Capitalizes the first letter of the string.
- `decodeCommonHtmlEntities(): string`: Cleans the HTML entities in the string.
- `getLinks(): string[] | null`: Returns the links in the string.
- `isHexColor(): boolean`: Checks if the string is a hex color.
- `pluralize(count: number): string`: Pluralizes the string.
- `possessive(): string`: Converts the string into its possessive form.
- `prettifyJson(): string`: Prettifies the JSON string.
- `trimTo(length: number, noEllipsis?: boolean): string`: Trims the string to a certain length.

### URL
- `isImage(): Promise<boolean>`: Checks if the URL is an image.