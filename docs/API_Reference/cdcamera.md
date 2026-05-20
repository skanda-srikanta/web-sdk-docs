---
title: CDCamera
sidebar_position: 3
---


 `CDCamera` class supports all camera related features like focus, resolution, camera position, torch, video capturing.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Methods:

### <u>init</u>

`init` method initializes CDCamera class. It takes an optional parameter as input which can be a reference of a HTML video element or a HTML canvas element. If no parameter is specified, SDK looks for a video element in the DOM.

<CodeBlock language="js">

```js
init(ref?: HTMLVideoElement | HTMLCanvasElement): Promise<void>
```
</CodeBlock>
      

---

### <u>setCamera</u>

`setCamera` takes the argument of either the label or ID of the camera device.

<CodeBlock>

```js
// // Parameters
// device: String
// Device label or id returned by getConnectedCameras() API

// Returns Promise<void>
setCamera(device: String): Promise <void>
```
</CodeBlock>

---

### <u>getCamera</u>

`getCamera` returns the selected video input device.

<CodeBlock language="js">
{' // Returns MediaDeviceInfo \n'
+'getCamera(): MediaDeviceInfo '}
</CodeBlock>

---

### <u>setCameraPosition</u>

`setCameraPosition` provides a way to change which device camera to use. Defaults to 'CDPosition.back'

<CodeBlock language="js">

```js
//CDPosition
Select the orientation using CDPosition enum
setCameraPosition(value: CDPosition): Promise<void>
```
</CodeBlock>

---

### <u>getCameraPosition</u>

`getCameraPosition` returns the current camera position set in the library.

<CodeBlock language="js">
{'// returns string | CDPosition \n'
+'getCameraPosition(): string | CDPosition '}
</CodeBlock>

---

### <u>startCamera </u>

`startCamera` starts the camera that was set using setCamera API. 

<CodeBlock language="js">

```js
startCamera(): Promise<void>
```
</CodeBlock>
      

---

### <u>stopCamera </u>

`stopCamera` stops the camera and releases the resource.

<CodeBlock language="js">

``` js
stopCamera(): Promise<void>
```
</CodeBlock>

---

### <u>getConnectedCameras</u>

`getConnectedCameras` retrieves all connected physical camera id's as a String array to be passed into setCamera() method.

<CodeBlock language="js">
{'//Returns MediaDeviceInfo[] \n'
+'getConnectedCameras(): MediaDeviceInfo[] '}
</CodeBlock>
      
---

### <u>setVideoCapturing</u>

`setVideoCapturing` starts and stops video capturing.

<CodeBlock>

```js
// Parameters
// videoCapture: boolean
// Start or Stop the frame creation from the video stream

// Returns Promise<void>
setVideoCapturing(videoCapture: boolean): Promise <void>
```
</CodeBlock>

---

### <u>getVideoCapturing</u>

`getVideoCapturing` returns current status of video capturing.

<CodeBlock language="js">
<Admonition type="note">
<p>
No decoding happens if videoCapturing is set to false.
</p>
</Admonition>
{'// Returns boolean \n'
+'getVideoCapturing(): boolean'}
</CodeBlock>
      
---

### <u>startPreview</u>

`startPreview` starts the camera preview. This method opens the camera device if it is not already open. It is required before calling any other camera related APIs.

<Admonition type="note">
      <p>Takes the callback function as parameter and starts the video preview with selected video input device and returns the result for each frame decoded. Can be called after startCamera API or can be called directly.
      </p>
      </Admonition>
<CodeBlock language="js">

```js

// Parameters
// getResult: ((arg0: CDResult) => any)
// A callback function that will be populated with CDResult objects

// (arg0: CDResult): any
// Parameters
// arg0: CDResult
// Returns any
// Returns Promise<void> 
startPreview(getResult: ((arg0: CDResult) => any)): Promise<void>
```
</CodeBlock>

---

### <u>stopPreview</u>

`stopPreview` stops the active camera preview.

<CodeBlock language="js">

```js
stopPreview(): Promise<void>
```
</CodeBlock>

---

### <u>setHighlightBarcodes</u>

`setHighlightBarcodes` enables highlights for decoded barcodes. It draws a red or green boundary box on all barcodes that are decoded in each frame. SDK will clear barcode highlight as soon as it receives the next frame.


<CodeBlock language="js">

```js

setHighlightBarcodes(highlight: Boolean): Promise<void>
```
</CodeBlock>

---

### <u>getHighlightBarcodes</u>

`getHighlightBarcodes` Returns the current highlight barcode setting


<CodeBlock language="js">

```js

getHighlightBarcodes(): Promise<Boolean>;
```
</CodeBlock>

---


### <u>setResolution</u>

`setResolution` sets the desired resolution.

<CodeBlock language="js">

```js
// CDResolution Input from CDResolution enum
// Returns Promise<void>
setResolution(resolution: CDResolution): Promise<void>
```
</CodeBlock>

---

### <u>getResolution</u>

`getResolution` retrieves the currently used resolution set in the library.

<CodeBlock language="js">

```js
// Returns Promise<CDResolution>
getResolution(): Promise<CDResolution>
```
</CodeBlock>

---

### <u>isFocusSupported</u>

`isFocusSupported` checks if device supports all CDFocus types supported by CortexDecoder. It returns a Boolean value.

<CodeBlock language="js">

```js
// Returns boolean
isFocusSupported(): boolean
```
</CodeBlock>

---

### <u>setFocus</u>

`setFocus` allows to change which camera focus to use. Defaults to auto focus.

<CodeBlock language="js">

```js
// CDFocus Input value from CDFocus
// Returns void
setFocus(value: CDFocus): void
```
</CodeBlock>

---

### <u>getFocus</u>

`getFocus` returns current camera focus set in the library.

<CodeBlock language="js">

```js
getFocus(): CDFocus
```
</CodeBlock>

---

### <u>setFixedFocusRange</u>

`setFixedFocusRange` allows to change fixed focus range.

<Admonition type="note">
<p>Change the default focus parameters for CDFocus. Call getFixedFocusRange() API to get CDFocus. Change the near and far values and set the object as parameter to this API.
</p>
</Admonition>
<CodeBlock language="js">

```js
// parameters
//CDfocusObj: {
//    far: number;
//    near: number;
// }
// Returns void
setFixedFocusRange(CDfocusObj: {
far: number;
near: number;
}): void
```
</CodeBlock>

---

### <u>getFixedFocusRange</u>

`getFixedFocusRange` returns current fixed focus value set in library.

<Admonition type="note">
<p>This API is called to get the CDfocusObj
</p>
</Admonition>
<CodeBlock>

```js
// Returns {
//     max: number;
//     min: number;
//     step: number;
// }
// max: number
// min: number
// step: number
getFixedFocusRange(): {
max: number;
min: number;
step: number;
}
```      
</CodeBlock>


---

### <u>getSupportedZoomRange</u>

`getSupportedZoomRange` retrieves zoom range supported by device in Range object providing minimumRange and maximumRange.
<CodeBlock>

```js
//Returns false | {
//     max: number;
//     min: number;
//     step: number;
// }
getSupportedZoomRange(): false | {
      max: number;
      min: number;
      step: number;
}
```
</CodeBlock>

---

### <u>setZoom</u>

`setZoom` provides a way to change which camera zoom to use. Defaults to 1, which means no zoom.

<Admonition type="note">
<p>
Set the desired zoom. Call getSupportedZoomRange() API to get the max and min values
</p>
</Admonition>

<CodeBlock language="js">

 ```js
// value: number
// Desired zoom value
// Returns void
setZoom(value: number): void
```
</CodeBlock>

---

### <u>getZoom</u>

`getZoom` returns current zoom value set in the library.

<CodeBlock language="js">
{'// Returns number \n'
+'getZoom(): number '}
</CodeBlock>

---

### setCrop
`setCrop` sets the desired crop. Value between 0 and 10 can be passed

<CodeBlock language="js">

```js
// // Parameters
// value: number
// An number value between 0 and 10

// Returns void
setCrop(value: number): void
```
</CodeBlock>

---

### getCrop
`getCrop` gets the current crop value.

<CodeBlock language="js">
{'// Returns number \n'
+'getCrop(): number '}
</CodeBlock>

---   

### <u>isTorchSupported</u>

`isTorchSupported` checks if the device supports illumination. It return a Boolean value.

<CodeBlock language="js">
{'Returns boolean \n'
+'isTorchSupported(): boolean '}
</CodeBlock>

---

### <u>setTorch</u>

`setTorch` changes which camera torch to use.

<CodeBlock language="js">

```js 
//Parameters isTorchNeeded: CDTorch
// Returns void
setTorchMode(isTorchNeeded: CDTorch): void
```
</CodeBlock>

---

### <u>getTorch</u>

`getTorch` retrieves the current torch value set in the library.

<CodeBlock language="js">
getTorchMode(): CDTorch
</CodeBlock>

---

## Enums

 ### <u>CDPosition</u>
*  BACK = 0 
*  FRONT = 1

### <u>CDResolution</u>
*  RES640x360 = 0
*  RES1280x720 = 1 
*  RES1920x1080 = 2
*  RES3840x2160 = 3


### <u>CDFocus</u>
*  AUTO = 0 
*  NEAR = 1
*  FAR = 2


### <u>CDTorch</u>
*  OFF = 0
*  ON = 1







