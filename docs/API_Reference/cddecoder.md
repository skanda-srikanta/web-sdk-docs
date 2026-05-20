---
title: CDDecoder
sidebar_position: 1
---

`CDDecoder` class supports all decoder related features along with other features related to barcode decoding.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Methods:

### <u>init</u>

`init` This method initializes the decoder library and sets the deault settings

<CodeBlock language="js">


```js
    /**
     *  @param url - URL to find the WASM file (Optional)
     */
    init(url?: string): Promise<number>;
```
</CodeBlock>

---

### <u>decoderVersion</u>

`decoderVersion` returns the current decoder version used in the SDK.

<CodeBlock language="js">


```js
    // This returns a promise which resolves with the decoder version as a string
    // Returns Promise<string>
    async decoderVersion(): Promise<string>
```
</CodeBlock>

---

### <u>libraryVersion</u>

`libraryVersion` returns the version number for the Cortex Decoder framework.

<CodeBlock language="js">

```js
    // This returns a promise which resolves with the library version as a string
    // Returns Promise<string>
    async libraryVersion(): Promise<string>
```

</CodeBlock>

---

### <u>setBarcodesToDecode</u>

`setBarcodesToDecode` tells the decoder how many barcodes to try and decode from an image.

:::info
By default, the number of barcodes to decode is 1 and the maximum is 20.
If Multicode is licensed, it will increase the maximum number of barcodes to 256.

The second parameter of type Boolean defines whether this method must decode the exact preset number of barcodes(True value will scan exact amount of barcodes and False value will scan any amount of barcodes from 1 till the preset number of barcodes)
:::


<CodeBlock language="js">

```js
// value: number - This parameter is set to max barcodes the decoder can decode in the image if the second parameter is false. Otherwise, this value denotes the exact number of barcodes the decoder must decode in the image.
// exactMatch: boolean 

// Returns Promise<number>
setBarcodesToDecode(value: number, exactMatch: boolean): Promise<number>
```
</CodeBlock>

---

### <u>setRegionOfInterest</u>

`setRegionOfInterest` provides a way to set Region of Interest which will be used to decode barcodes.
:::info
Region of Interest (ROI) is a rectangle specified by the position of the top-left corner point and the width and height. By default, the Region of Interest is the entire valid image area.

Setting the Region of Interest to a smaller region would speed up barcode decoding. Once set CortexDecoder will only decode barcodes that are within the Region of Interest being set.

Application can control if CortexDecoder should decode barcodes that are only partially within the Region of Interest via `ensureCorners`

:::


<CodeBlock language="js">

```js
// ROI: CDRect - This parameter needs to be an object of class CDRect which defines the 4 corners of the region of interest
// ensureCorners: boolean - This is a boolean value which specifies if the code can be decoded if its partially inside the region.
// Returns Promise<void>
setRegionOfInterest(ROI: CDRect, ensureCorners: boolean): Promise<void>
```
</CodeBlock>

---

### <u>getRegionOfInterest</u>

`getRegionOfInterest` returns the current region of interest.


<CodeBlock language="js">

```js
// Returns Promise<CDRect> -  Promise resolving to a CDRect object.
getRegionOfInterest(): Promise<CDRect>
```
</CodeBlock>

---

### <u>setDuplicateDelay</u>

`setDuplicateDelay` set the delay time in millisecond for duplicated barcodes from the CortexDecoder.

:::info
By default, duplicateDelay is ZERO.

Same barcode data with different symbology will still be decoded.
:::

<CodeBlock language="js">

```js
// filter_time: number - interval in milliseconds.
//Returns void
setDuplicateDelay(filter_time: number): void
```
</CodeBlock>

---

### <u>getDuplicateDelay</u>

`getDuplicateDelay` gets the current duplicate delay time set in CortexDecoder.


<CodeBlock language="js">

```js
// Returns number which is the interval set in milliseconds.
getDuplicateDelay(): number
```
</CodeBlock>

---

### <u>decode</u>

`decode` scans the image and decodes the barcodes present in the image.

<Admonition type="note">
<p>
This method takes the image URL as the input and returns an object of CDResult class with filled inputs. Accepts an image source, which can be an HTMLImageElement, SVGImageElement, HTMLVideoElement, HTMLCanvasElement, Blob, ImageData, ImageBitmap, or OffscreenCanvas object.
</p>
</Admonition>
<CodeBlock language="js">

    decode(image: DecodeMethodInput, previewWidth?: number, previewHeight?: number): Promise<CDResult[]>;


```js
    // image: DecodeMethodInput
    // image to be decoded

    // Optional previewWidth: number
    // Width resolution of preview

    // Optional previewHeight: number
    // Height resolution of preview

    //Returns: Array of objects of CDResult class
    //Promise<undefined | CDResult[]>

    decode(image: DecodeMethodInput, previewWidth?: number, previewHeight?: number): Promise<undefined | CDResult[]>
```
</CodeBlock>

---

## Setters and Getters

### <u>timeLimit</u>

`timeLimit` sets a timeout in milliseconds for one frame. If this timeout is reached it will start on the next frame if available.
:::info
Timeout value should be between 0 to 500.
:::

<CodeBlock language="js">

```js
// value: number - Maximum time in milliseconds the decoder needs to spend on decoding a code
// Returns void
set timeLimit(value: number): void
get timeLimit(): number;

```
</CodeBlock>

---


### <u>picklistMode</u>

`picklistMode` sets the Picklist mode for barcode decoding.  
:::info
Int value should be between 0 and 10.

When setting 0 means CortexDecoder tries to detect and decode a barcode only at center of image.

When setting 10 it CortexDecoder will use whole image to find and decode the barcode.
:::


<CodeBlock language="js">

```js
// number - Input can be a value between 0 to 10
// Returns void
set PicklistMode(value: number): void
get picklistMode(): number;

```
</CodeBlock>

---

### <u>customMode</u>

`customMode` provides a way to enable the custom mode. Custom mode provides a way to improve decoding for 2D barcodes at short range from device. It is also called Multiresolution mode.
:::info
Disabled by default.
:::

<CodeBlock language="js">

```js
// mode: CDCustomMode - THe input can be any value in the enum CDCustomMode.
// Returns void
set CustomMode(mode: CDCustomMode): void
get customMode(): CDCustomMode;

```
</CodeBlock>

---

### <u>preprocessType</u>

`preprocessType` provides a way to enable preprocess type.
:::info
Disabled by default.
:::

<CodeBlock language="js">

```js
// type: CDPreprocessorType - The value is of type CDPreprocessorType enum
// Returns void
set preprocessType(type: CDPreprocessorType): void
get preprocessType(): CDPreprocessorType;

```
</CodeBlock>

---

### <u>securityLevel</u>

`securityLevel` set the security level.
:::info
SecurityLevel determines how aggressive and effective CortexDecoder can be while decoding 1D barcodes. It would impact the performance of CortexDecoder based on the value used.
:::

<CodeBlock language="js">

```js
// value: CDSecurityLevel
// Value is of type CDSecurityLevel enum

// Returns void
set securityLevel(value: CDSecurityLevel): void
get securityLevel(): CDSecurityLevel;

```
</CodeBlock>

---

### <u>characterSetEncoding</u>

`characterSetEncoding` set the security level.
:::info
This API allows the user to set the encoding of the barcode data returned. The possible inputs are defined in CDCharacterEncoding enum
:::

<CodeBlock language="js">

```js
// value: CDCharacterEncoding
// Value is of type CDCharacterEncoding enum

set characterSetEncoding(value: CDCharacterEncoding);
get characterSetEncoding(): CDCharacterEncoding;

```
</CodeBlock>

---

### <u>decoding</u>

`decoding` provides a way to start and stop decoding the frames independent of the incoming frames
:::info
When enabled CortexDecoder will start decoding barcode from video frames that are being captured. When disabled CortexDecoder skips decoding frames.
:::

<CodeBlock language="js">

```js
// decode: boolean - A boolean value to turn on or off the decoder.

// Returns void
set decoding(decode: boolean): void
get decoding(): boolean;

```
</CodeBlock>

---

### <u>codeWords</u>

`codeWords` enables codewords output for Data Matrix and QR Code symbologies.
:::info
Codewords provides a way to understand where a damage to 2D barcode occurs.

Default setting is false.
:::

<CodeBlock language="js">

```js
// enable: boolean - Boolean value to enable or disable codewords

// Returns void
set codeWords(enable: boolean);
get codeWords(): boolean;

```
</CodeBlock>

---

### <u>multiCodeOutputByPriority</u>

`multiCodeOutputByPriority` enable decoding multiple barcodes with barcode data returned in pre-defined format.

:::info
Priority order is defined by Configuration String passed in API `setDataParsing(parsing:configString)` with `strMatchReplace` Data Parsing option.

Default setting is disable.
:::

<CodeBlock language="js">

```js
// enable: boolean
// Returns void
set multiCodeOutputByPriority(enable: boolean): void
get multiCodeOutputByPriority(): boolean;

```
</CodeBlock>

---


## Enums

### <u>CDSecurityLevel</u> 
*  LEVEL0 = 0,
*  LEVEL1 = 1,
*  LEVEL2 = 2,
*  LEVEL3 = 3,
*  LEVEL11 = 11,
*  LEVEL12 = 12,
*  LEVEL21 = 21


### <u>CDCustomMode</u> 
*  DISABLE 
*  SHORT_RANGE
 

### <u>CDPreprocessorType</u>
*  DISABLE 
*  DEBLUR_1D_METHOD1

### <u>CDCharacterEncoding</u>
* UNDEF = 0
* ASCII = 1
* ISO88591 = 2
* UTF8 = 3
* UTF16 = 4
* UTF16BE = 5
* UTF16LE = 6
* SHIFTJIS = 7