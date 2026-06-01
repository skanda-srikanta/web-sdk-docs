---
title: Code39
---

> Generated from `dist/src/web/CDSymbology.d.ts` when `npm run docs` is executed at the SDK root.

Configuration accessors for the Code39 symbology helper.

## Accessors

### enable

```ts
set enable(value: boolean): void
```

This method is used to enable or disable Code39 symbology

### enable

```ts
get enable(): boolean
```

### sendStartStopCharacters

```ts
set sendStartStopCharacters(value: boolean): void
```

This method is used to set stripStartStopCharacters property of Code39 symbology

### sendStartStopCharacters

```ts
get sendStartStopCharacters(): boolean
```

### ASCIIModeEnable

```ts
set ASCIIModeEnable(value: boolean): void
```

This method is used to set ASCIIModeEnable property of Code39 symbology

Usage: `CDSymbology.Code39.ASCIIModeEnable = true;`

### ASCIIModeEnable

```ts
get ASCIIModeEnable(): boolean
```

### checksum

```ts
set checksum(value: Code39Checksum): void
```

This method is used to set the checksum of Code39 symbology

Usage: `CDSymbology.Code39.checksum = 0`

Inputs can be 0, 1, 2

### checksum

```ts
get checksum(): Code39Checksum
```

### minimumLength

```ts
set minimumLength(value: number): void
```

This method is used to set the minChars for Code39 symbology

Usage: `CDSymbology.Code39.minChars = 10`

Input must be less than 100

### minimumLength

```ts
get minimumLength(): number
```
