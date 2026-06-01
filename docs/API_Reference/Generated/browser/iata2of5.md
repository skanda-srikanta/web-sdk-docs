---
title: IATA2of5
---

> Generated from `dist/src/web/CDSymbology.d.ts` when `npm run docs` is executed at the SDK root.

Configuration accessors for the IATA2of5 symbology helper.

## Accessors

### enable

```ts
set enable(value: boolean): void
```

This method is used to enable or disable IATA2of5 symbology

### enable

```ts
get enable(): boolean
```

### checksum

```ts
set checksum(value: IATA2Of5Checksum): void
```

This method is used to set checksum for IATA2of5 symbology

Usage: `CDSymbology.IATA2of5.checksum = 0`

Inputs can be 0, 1, 2

### checksum

```ts
get checksum(): IATA2Of5Checksum
```

### minimumLength

```ts
set minimumLength(value: number): void
```

This method is used to set the minChars for IATA2of5 symbology

Usage: `CDSymbology.IATA2of5.minChars = 10`

Input must be less than 100

### minimumLength

```ts
get minimumLength(): number
```
