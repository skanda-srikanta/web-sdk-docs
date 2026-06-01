---
title: CDDecoder
---

> Generated from `dist/src/web/CDDecoder.d.ts` when `npm run docs` is executed at the SDK root.

- `description`: This class consists of APIs to set various decoder settings and to access the decoder

## Constructors

### constructor

```ts
constructor(): void
```


## Methods

### init

```ts
init(url?: string): Promise<number>
```

Initialize the decoder runtime, create the native decoder handle, and prepare default decoding state.

- `remarks`: This must be called before invoking decode or other APIs that depend on the native decoder handle.
- `throws`: Error when the decoder library cannot be initialized or the native handle cannot be created.

### decoderVersion

```ts
decoderVersion(): Promise<string>
```

Return the version string reported by the underlying Cortex decoder engine.

### libraryVersion

```ts
libraryVersion(): Promise<string>
```

Return the JavaScript SDK package version.

### setBarcodesToDecode

```ts
setBarcodesToDecode(value: number, exactMatch: boolean): Promise<number>
```

Configure how many barcodes the decoder should attempt to return from each image.

- `remarks`: The effective maximum is capped by the currently licensed multi-code capability.
- `throws`: Error when the decoder has not been initialized or the requested value is invalid.

### getBarcodesToDecode

```ts
getBarcodesToDecode(): { value: number; exactMatch: Boolean; }
```

Return the current barcode-count configuration used by decode.

### setRegionOfInterest

```ts
setRegionOfInterest(ROI: CDRect, ensureCorners: boolean): Promise<void>
```

Restrict decoding to a region of interest within the preview or image coordinates.

- `remarks`: This ROI is shared with the preview overlay pipeline so live camera decoding and single-image decoding use the same region.
- `throws`: Error when the supplied ROI is not a CDRect instance.

### getRegionOfInterest

```ts
getRegionOfInterest(): Promise<CDRect>
```

Return the currently configured region of interest.

### setDuplicateDelay

```ts
setDuplicateDelay(filter_time: number): void
```

Configure duplicate-result suppression for single-barcode decoding flows.

- `remarks`: Duplicate filtering is only supported when barcodesToDecode is configured for a single barcode.
- `throws`: Error when duplicate delay is configured while multi-barcode decoding is active.

### getDuplicateDelay

```ts
getDuplicateDelay(): number
```

Return the currently configured duplicate-result suppression interval.

### decode

```ts
decode(image: DecodeMethodInput, previewWidth?: number, previewHeight?: number): Promise<CDResult[]>
```

Decode one image source and return the barcode results produced by the native engine.

- `remarks`: The returned array always contains at least one CDResult, including status-only results for license errors, timeouts, and no-decode conditions.


## Accessors

### timeLimit

```ts
set timeLimit(value: number): void
```

- `description`: This property is used to set the value of time in milliseconds the decoder should spend decoding each code in the image. Setting 0 sets it to default.

### timeLimit

```ts
get timeLimit(): number
```

### picklistMode

```ts
set picklistMode(value: number): void
```

- `description`: This mode can be used to define the percentage of distance from the center where the code can be found.

For example, value 0 would look for codes that is located exactly at the center of the image or preview. And a value 10 will look for the code in the entire image or preview.

### picklistMode

```ts
get picklistMode(): number
```

### customMode

```ts
set customMode(mode: CDCustomMode): void
```

- `description`: This mode is called multiresolution mode and is used to decode codes which are overexposed or underexposed better

### customMode

```ts
get customMode(): CDCustomMode
```

### preprocessType

```ts
set preprocessType(type: CDPreprocessorType): void
```

- `description`: This method is used to set the preprocessor type and is used to decode blurry images better.

### preprocessType

```ts
get preprocessType(): CDPreprocessorType
```

### securityLevel

```ts
set securityLevel(value: CDSecurityLevel): void
```

- `description`: API to set the security level of the decoder. Defines the aggressiveness of the decoder to decode codes. Higher aggressiveness can mean lower accuracy and vice versa.

### securityLevel

```ts
get securityLevel(): CDSecurityLevel
```

### characterSetEncoding

```ts
set characterSetEncoding(value: CDCharacterEncoding): void
```

- `description`: API to set the character encoding type.

### characterSetEncoding

```ts
get characterSetEncoding(): CDCharacterEncoding
```

### decoding

```ts
set decoding(decode: boolean): void
```

- `description`: This API is used to start or stop the decoder.

### decoding

```ts
get decoding(): boolean
```

### codeWords

```ts
set codeWords(enable: boolean): void
```

- `description`: This API is used to enable or disable codewords for error correction to be included in the result

### codeWords

```ts
get codeWords(): boolean
```

### multiCodeOutputByPriority

```ts
set multiCodeOutputByPriority(enable: boolean): void
```

### multiCodeOutputByPriority

```ts
get multiCodeOutputByPriority(): boolean
```

### multiFrameDecoding

```ts
set multiFrameDecoding(enable: boolean): void
```

### multiFrameDecoding

```ts
get multiFrameDecoding(): boolean
```


## Properties

### CDRect

```ts
CDRect: CDRect
```
