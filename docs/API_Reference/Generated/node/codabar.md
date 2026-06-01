---
title: Codabar
---

> Generated from `dist/node/CDSymbology.d.ts` when `npm run docs` is executed at the SDK root.

Configuration accessors for the Codabar symbology helper.

## Accessors

### enable

```ts
set enable(value: boolean): void
```

This method is used to enable or disable Codabar symbology

### enable

```ts
get enable(): boolean
```

### minimumLength

```ts
set minimumLength(value: number): void
```

This method is used to set sefault values for Codabar symbology

Usage: `CDSymbology.Codabar.minChars = 10`

Input must be less than 100

### minimumLength

```ts
get minimumLength(): number
```

### sendStartStopCharacters

```ts
set sendStartStopCharacters(value: boolean): void
```

This method is enable stripStartStopCharacters for Codabar symbology

### sendStartStopCharacters

```ts
get sendStartStopCharacters(): boolean
```

### checksum

```ts
set checksum(value: CodabarChecksum): void
```

This method is used to set the checksum for Codabar symbology

Usage: `CDSymbology.Codabar.checksum = 0`

Inputs can be 0, 1, 2

### checksum

```ts
get checksum(): CodabarChecksum
```
