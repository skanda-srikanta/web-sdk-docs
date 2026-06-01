---
title: Interleaved2of5
---

> Generated from `dist/node/CDSymbology.d.ts` when `npm run docs` is executed at the SDK root.

Configuration accessors for the Interleaved2of5 symbology helper.

## Accessors

### enable

```ts
set enable(value: boolean): void
```

This method is used to enable or disable Interleaved2of5 symbology

### enable

```ts
get enable(): boolean
```

### rejectPartialDecode

```ts
set rejectPartialDecode(value: boolean): void
```

This method is used to either rejectPartialDecode or not for Interleaved2of5 symbology

Usage: `CDSymbology.Interleaved2of5.rejectPartialDecode = true`

### rejectPartialDecode

```ts
get rejectPartialDecode(): boolean
```

### quietZone

```ts
set quietZone(value: boolean): void
```

This method is used to either allowShortQietZone or not for Interleaved2of5 symbology

Usage: `CDSymbology.Interleaved2of5.allowShortQuietZone = false;`

### quietZone

```ts
get quietZone(): boolean
```

### checksum

```ts
set checksum(value: Interleaved2Of5Checksum): void
```

This method is used to set the checksum for Interleaved2of5 symbology

Usage: `CDSymbology.Interleaved2of5.checksum = 0`

Inputs can be 0, 1, 2

### checksum

```ts
get checksum(): Interleaved2Of5Checksum
```

### minimumLength

```ts
set minimumLength(value: number): void
```

This method is used to set the minChars for Interleaved2of5 symbology

Usage: `CDSymbology.Interleaved2of5.minChars = 10`

Value must be less than 100

### minimumLength

```ts
get minimumLength(): number
```
