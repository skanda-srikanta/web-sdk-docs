---
title: MSIPlessey
---

> Generated from `dist/node/CDSymbology.d.ts` when `npm run docs` is executed at the SDK root.

Configuration accessors for the MSIPlessey symbology helper.

## Accessors

### enable

```ts
set enable(value: boolean): void
```

This method is used to enable or disable MSIPlessey symbology

### enable

```ts
get enable(): boolean
```

### checksum

```ts
set checksum(value: MSIPlesseyChecksum): void
```

This method is used to set checksum for MSIPlessey symbology

Usage: `CDSymbology.MSIPlessey.checksum = 0`

Inputs can be 0, 1, 2, 3

### checksum

```ts
get checksum(): MSIPlesseyChecksum
```

### minimumLength

```ts
set minimumLength(value: number): void
```

This method is used to set minChars for MSIPlessey symbology

Usage: `CDSymbology.MSIPlessey.minChars = 10`

Input must be less than 100

### minimumLength

```ts
get minimumLength(): number
```

### stripChecksum

```ts
set stripChecksum(value: boolean): void
```

This method is used to enableStripCheckSum for MSIPlessey symbology

### stripChecksum

```ts
get stripChecksum(): boolean
```
