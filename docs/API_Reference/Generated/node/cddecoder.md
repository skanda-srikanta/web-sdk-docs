---
title: CDDecoder
---

> Generated from `dist/node/CDDecoder.d.ts` when `npm run docs` is executed at the SDK root.

- `class`
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

- `description`: This method initializes the native decoder library and sets the handle

### decoderVersion

```ts
decoderVersion(): Promise<string>
```

- `description`: This method returns the current decoder version used in the SDK

### libraryVersion

```ts
libraryVersion(): Promise<string>
```

- `description`: This method returns the version number for the Cortex Decoder package

### setBarcodesToDecode

```ts
setBarcodesToDecode(value: number, exactMatch: boolean): Promise<number>
```

- `description`: If value &gt; 0 and exactMatch is false : The decoder can decode a maximum of number of codes specified in the value in the image. It can decode lesser too. But if exact match is true, decoder must decode the specified value number of codes in the image.

### setRegionOfInterest

```ts
setRegionOfInterest(ROI: CDRect, ensureCorners: boolean): Promise<void>
```

- `description`: This API is used to specify the exact location of the code in the image or frame. The decoder looks for the code only in this region.

### getRegionOfInterest

```ts
getRegionOfInterest(): Promise<CDRect>
```

- `description`: Get the specified region of interest

### setDuplicateDelay

```ts
setDuplicateDelay(filter_time: number): void
```

- `description`: This API is set to prevent decoding the same barcode more than once

### getDuplicateDelay

```ts
getDuplicateDelay(): number
```

### decode

```ts
decode(image: DecodeMethodInput): Promise<CDResult[]>
```

- `description`: This method takes the image URL as the input and returns an object of CDResult class with filled inputs. Accepts an image source, which can be an HTMLImageElement, SVGImageElement, HTMLVideoElement, HTMLCanvasElement, Blob, ImageData, ImageBitmap, or OffscreenCanvas object.


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
