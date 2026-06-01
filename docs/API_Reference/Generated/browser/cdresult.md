---
title: CDResult
---

> Generated from `dist/src/web/CDResult.d.ts` when `npm run docs` is executed at the SDK root.

Represent the outcome of a single decode attempt.

- `description`: Instances of this class are returned by decode operations and capture decoded data, timing, geometry, and optional verification details.

## Constructors

### constructor

```ts
constructor(): void
```


## Properties

### barcodeData

```ts
barcodeData: string
```

Decoded barcode payload returned by the native decoder.

### symbology

```ts
symbology: string
```

Symbology name reported for the decoded result.

### status

```ts
status: CDDecodeStatus
```

Decode status that indicates success, failure, or a specific runtime condition.

### barcodeCoordinates

```ts
barcodeCoordinates: CDRect
```

Corner coordinates for the decoded barcode in the source image.

### decodeTime

```ts
decodeTime: number
```

Time spent by the native decoder on the successful barcode result.

### totalDecodeTime

```ts
totalDecodeTime: number
```

End-to-end time spent producing this result, including surrounding processing.

### codewords

```ts
codewords: CDCodewords
```

Optional error-correction codeword data when codeword reporting is enabled.

### verification

```ts
verification: CDVerification
```

Optional verification grades when verification is enabled and supported.

### licenseResult

```ts
licenseResult: license_status
```

License status observed when the result object was created.

### image_buffer

```ts
image_buffer: ImageData
```

Image buffer associated with the decode operation when preserved by the SDK.
