---
title: CDCamera
---

> Generated from `dist/src/web/CDCamera.d.ts` when `npm run docs` is executed at the SDK root.

- `class`
- `description`: This class consists of APIs to access the device camera and change the settings of these camera inputs.

## Constructors

### constructor

```ts
constructor(): void
```


## Methods

### init

```ts
init(videoRef?: HTMLVideoElement, canvasRef?: HTMLCanvasElement): Promise<void>
```

- `description`: Initializes the CDCamera class

### setCamera

```ts
setCamera(device: MediaDeviceInfo): Promise<void>
```

Check if the given parameter is a device ID or device label and choose the device from the array of all devices.

- `description`: Set the selected video input device with default constraints.

### setCameraPosition

```ts
setCameraPosition(value: CDPosition, autoSwitch: boolean): Promise<void>
```

- `description`: Set the camera orientation using CDPosition enum

### startCamera

```ts
startCamera(): Promise<void>
```

- `description`: Get access to the camera resource and start the camera.

### stopCamera

```ts
stopCamera(): Promise<void>
```

- `description`: Stop the camera and release the resource

### getCameraPosition

```ts
getCameraPosition(): { position: CDPosition; autoSwitch: Boolean; } | string
```

- `description`: Get the selected camera orientation and the autoSwitch status

### getConnectedCameras

```ts
getConnectedCameras(): MediaDeviceInfo[]
```

- `description`: Get list of all the video input devices connected

### getCamera

```ts
getCamera(): MediaDeviceInfo
```

- `description`: Returns the selected video input device

### setVideoCapturing

```ts
setVideoCapturing(videoCapture: boolean): Promise<void>
```

- `description`: Setting to enable or disable creation of frames.

### getVideoCapturing

```ts
getVideoCapturing(): boolean
```

- `description`: Get the status of video capture. No decoding happens if videoCapturing is set to false

### startPreview

```ts
startPreview(getResult: (arg0: CDResult[]) => any): Promise<void>
```

- `description`: Takes the callback function as parameter and starts the video preview with selected video input device and returns result for each frame decoded. Can be called after startCamera API or can be called
directly

### stopPreview

```ts
stopPreview(): Promise<void>
```

- `description`: Stops the current preview when called but camera is still live

### setResolution

```ts
setResolution(resolution: CDResolution): Promise<void>
```

- `description`: API to set the desired resolution. If resolution not available, the closest resolution is set

### setHighlightBarcodes

```ts
setHighlightBarcodes(highlight: Boolean): Promise<void>
```

- `description`: Enable barcode highlight on successful decode

### getHighlightBarcodes

```ts
getHighlightBarcodes(): Promise<Boolean>
```

- `description`: Get the barcode highlight setting

### getResolution

```ts
getResolution(): Promise<CDResolution>
```

- `description`: Returns the selected resolution. It can be a CDResolution enum value if the preview is ON. Otherwise it returns previously selected resolution.

### setFocus

```ts
setFocus(value: CDFocus): void
```

- `description`: Sets the desired focus value as defined in CDFocus

### getFocus

```ts
getFocus(): CDFocus
```

- `description`: Returns the selected focus as CDFocus enum

### isFocusSupported

```ts
isFocusSupported(): boolean
```

- `description`: Returns false if manual focus is not supported. Else returns true

### setFixedFocusRange

```ts
setFixedFocusRange(CDfocusObj: { near: number; far: number; }): void
```

- `description`: Change the default focus parameters for CDFocus. Call getFixedFocusRange() API to get CDFocus. Change the near and far values and set the object as parameter to this API.
- `deprecated`

### getFixedFocusRange

```ts
getFixedFocusRange(): { min: number; max: number; step: number; }
```

- `description`: This API is called to get the CDfocusObj
- `deprecated`

### setTorchMode

```ts
setTorchMode(isTorchNeeded: CDTorch): void
```

- `description`: API to set flash

### getTorchMode

```ts
getTorchMode(): CDTorch
```

- `description`: Returns the current torch setting

### isTorchSupported

```ts
isTorchSupported(): boolean
```

- `description`: Check if torch settings are supported

### isZoomSupported

```ts
isZoomSupported(): boolean
```

- `description`: Check if Zoom settings are supported

### getSupportedZoomRange

```ts
getSupportedZoomRange(): { min: number; max: number; step: number; }
```

- `description`: Returns the minimum and maximum range for zoom setting.

### setZoom

```ts
setZoom(value: number): void
```

- `description`: Set the desired zoom. Call getSupportedZoomRange() API to get the max and min values

### getZoom

```ts
getZoom(): number
```

- `description`: Get the current zoom value

### setCrop

```ts
setCrop(value: number): void
```

- `description`: Set the desired crop. Value between 0 and 10 can be passed

### getCrop

```ts
getCrop(): number
```

- `description`: Get the current crop value


## Properties

### listeners

```ts
listeners: {}
```
