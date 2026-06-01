---
title: CDPerformanceFeatures
---

> Generated from `dist/src/web/CDPerformanceFeatures.d.ts` when `npm run docs` is executed at the SDK root.

Configure optional decoder behaviors that improve readability for specific imaging or data-processing scenarios.

- `description`: This singleton exposes browser decoder settings for low contrast, data parsing, data formatting, DPM, and verification features.

## Constructors

### constructor

```ts
constructor(): void
```


## Methods

### setDataParsing

```ts
setDataParsing(parsing: CDDataParsing, configString: string): Promise<void>
```

Configure structured data parsing for decoded content.

### getDataParsing

```ts
getDataParsing(): Promise<CDDataParsing>
```

Return the currently configured data-parsing mode.

### getConfigStringForDataParsing

```ts
getConfigStringForDataParsing(): Promise<string>
```

Return the configuration string currently associated with data parsing.

### setDataFormatting

```ts
setDataFormatting(enable: boolean, formatString: string): Promise<void>
```

Configure decoded-data formatting.

### getDataFormatting

```ts
getDataFormatting(): Promise<boolean>
```

Return whether output formatting is enabled.

### getConfigStringForDataFormatting

```ts
getConfigStringForDataFormatting(): Promise<string>
```

Return the formatting template currently configured for decoded data.


## Accessors

### stringFromPerformanceType

```ts
get stringFromPerformanceType(): CDPerformanceType
```

Return the placeholder performance-type value exposed by this singleton.

- `remarks`: This accessor currently returns CDPerformanceType.UNDEFINED and does not reflect active feature state.

### lowContrast

```ts
set lowContrast(lowContrast: boolean): void
```

Enable or disable low-contrast decoding assistance.

### lowContrast

```ts
get lowContrast(): boolean
```

Return whether low-contrast decoding assistance is enabled.

### DPMMode

```ts
set DPMMode(dpm: CDDPM): void
```

Configure the decoder for direct-part-marking capture modes.

### DPMMode

```ts
get DPMMode(): CDDPM
```

Return the currently configured DPM mode.

### verification

```ts
set verification(type: CDVerifier): void
```

Enable verification grading for supported decoding workflows.

- `remarks`: Verification results are attached to decode results when the active license and decode path support them.

### verification

```ts
get verification(): CDVerifier
```

Return the currently configured verification mode.
