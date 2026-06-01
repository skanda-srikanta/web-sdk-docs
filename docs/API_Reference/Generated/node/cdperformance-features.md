---
title: CDPerformanceFeatures
---

> Generated from `dist/node/CDPerformanceFeatures.d.ts` when `npm run docs` is executed at the SDK root.

- `description`: This class is used to set the performance settings for the decoder

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

- `description`: This API is used to set Data Parsing.

### getDataParsing

```ts
getDataParsing(): Promise<CDDataParsing>
```

- `description`: This API is called to get the Data Parsing type set

### getConfigStringForDataParsing

```ts
getConfigStringForDataParsing(): Promise<string>
```

- `description`: This API is called to retrieve the configuration string set for data parsing

### setDataFormatting

```ts
setDataFormatting(enable: boolean, formatString: string): Promise<void>
```

### getDataFormatting

```ts
getDataFormatting(): Promise<boolean>
```

### getConfigStringForDataFormatting

```ts
getConfigStringForDataFormatting(): Promise<string>
```

- `description`: API to retrieve the Data Formatting configuration string


## Accessors

### stringFromPerformanceType

```ts
get stringFromPerformanceType(): CDPerformanceType
```

### lowContrast

```ts
set lowContrast(lowContrast: boolean): void
```

- `description`: Property to enable or disable low contrast decoding

### lowContrast

```ts
get lowContrast(): boolean
```

### DPMMode

```ts
set DPMMode(dpm: CDDPM): void
```

- `description`: Method to set the DPM mode

### DPMMode

```ts
get DPMMode(): CDDPM
```

### verification

```ts
set verification(type: CDVerifier): void
```

- `description`: Enables verification for decoding. Adds the verification results in the decode results

### verification

```ts
get verification(): CDVerifier
```
