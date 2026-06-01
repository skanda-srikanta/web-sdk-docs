---
title: CDCamera
---

> Generated from `dist/src/web/CDCamera.d.ts` when `npm run docs` is executed at the SDK root.

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

Request camera permission, discover available cameras, and bind the preview elements used by the browser camera pipeline.

- `remarks`: Pass both a video element and canvas element when you want overlay drawing features such as highlighted barcodes.
- `throws`: Error when no usable video element or media device is available.

### setCamera

```ts
setCamera(device: MediaDeviceInfo): Promise<void>
```

Select the exact camera device that should be used for subsequent preview and decoding operations.

- `remarks`: If a stream is already active, the current camera is stopped before the new device selection is applied.
- `throws`: Error when init has not been called or the supplied device is not currently available.

### setCameraPosition

```ts
setCameraPosition(value: CDPosition, autoSwitch: boolean): Promise<void>
```

Select a camera by orientation instead of by explicit device id.

- `remarks`: Back-camera selection prefers the best matching rear camera and can fall back when a requested orientation is not available.
- `throws`: Error when the requested orientation cannot be resolved to a usable stream configuration.

### startCamera

```ts
startCamera(): Promise<void>
```

Open the configured media stream and attach the selected or default camera to the preview element.

- `remarks`: This method prepares the live MediaStream but does not begin the frame-processing decode loop by itself.
- `throws`: Error when the browser cannot start the requested stream.

### stopCamera

```ts
stopCamera(): Promise<void>
```

Stop the active stream, release browser camera resources, and reset preview-processing state.

### getCameraPosition

```ts
getCameraPosition(): { position: CDPosition; autoSwitch: Boolean; } | string
```

Report the active camera orientation together with the current auto-switch setting.

### getConnectedCameras

```ts
getConnectedCameras(): MediaDeviceInfo[]
```

Return the video-input devices discovered during initialization.

### getCamera

```ts
getCamera(): MediaDeviceInfo
```

Return the camera device currently selected in the stream constraints.

### setVideoCapturing

```ts
setVideoCapturing(videoCapture: boolean): Promise<void>
```

Enable or disable extraction of frames from the live preview for decoding.

### getVideoCapturing

```ts
getVideoCapturing(): boolean
```

Indicate whether the preview is currently allowed to generate frames for decoding.

### startPreview

```ts
startPreview(getResult: (arg0: CDResult[]) => any): Promise<void>
```

Start the live preview and continuously decode each processed frame.

- `remarks`: If the camera stream is not already active, this method starts it automatically before wiring the preview-processing pipeline.
- `throws`: Error when the preview element or media-stream setup is not available.

### stopPreview

```ts
stopPreview(): Promise<void>
```

Pause the live preview while leaving the underlying camera stream available for reuse.

### setResolution

```ts
setResolution(resolution: CDResolution): Promise<void>
```

Update the preferred preview resolution for future camera starts.

- `remarks`: If the camera is currently active, the stream is restarted so the new constraints can take effect.

### setHighlightBarcodes

```ts
setHighlightBarcodes(highlight: Boolean): Promise<void>
```

Enable or disable barcode overlay rendering for successful decode results.

### getHighlightBarcodes

```ts
getHighlightBarcodes(): Promise<Boolean>
```

Return whether successful decodes should be highlighted in the preview overlay.

### getResolution

```ts
getResolution(): Promise<CDResolution>
```

Return the effective preview resolution selection.

- `remarks`: When preview is active, the value is derived from the live video track dimensions. Otherwise the previously requested resolution is returned.

### setFocus

```ts
setFocus(value: CDFocus): void
```

Configure the camera focus mode used for preview and decoding.

- `remarks`: Manual focus requests use the device capability range discovered from the active track.
- `throws`: Error when preview is not active and capabilities are unavailable.

### getFocus

```ts
getFocus(): CDFocus
```

Return the currently selected focus mode.

### isFocusSupported

```ts
isFocusSupported(): boolean
```

Report whether the active camera exposes focus controls that this SDK can manage.

- `throws`: Error when preview has not been started on browsers that do not gracefully report unsupported focus capability queries.

### setFixedFocusRange

```ts
setFixedFocusRange(CDfocusObj: { near: number; far: number; }): void
```

Override the default near and far values used when switching between manual focus presets.

- `deprecated`: Use device-reported focus capabilities directly when possible.
- `throws`: Error when the supplied values are invalid for the active device.

### getFixedFocusRange

```ts
getFixedFocusRange(): { min: number; max: number; step: number; }
```

Return the stored near and far focus-range presets.

- `deprecated`: This API exposes legacy focus-preset state.

### setTorchMode

```ts
setTorchMode(isTorchNeeded: CDTorch): void
```

Enable or disable the camera torch when the active device exposes torch support.

- `throws`: Error when preview is not active and camera capabilities are unavailable.

### getTorchMode

```ts
getTorchMode(): CDTorch
```

Return the current torch state reported by the active camera track.

- `throws`: Error when preview is not active and camera capabilities are unavailable.

### isTorchSupported

```ts
isTorchSupported(): boolean
```

Report whether the active camera supports torch control.

- `throws`: Error when preview is not active and capability queries cannot be satisfied.

### isZoomSupported

```ts
isZoomSupported(): boolean
```

Report whether the active camera supports native zoom control.

- `throws`: Error when preview is not active and capability queries cannot be satisfied.

### getSupportedZoomRange

```ts
getSupportedZoomRange(): { min: number; max: number; step: number; }
```

Return the supported zoom range for the selected camera.

- `remarks`: When native zoom capability is unavailable, the SDK returns its software crop fallback range.

### setZoom

```ts
setZoom(value: number): void
```

Set the desired zoom level for preview decoding.

- `remarks`: Native zoom is applied through track constraints when supported; otherwise the SDK falls back to software crop scaling.
- `throws`: Error when the supplied value is not numeric.

### getZoom

```ts
getZoom(): number
```

Return the effective zoom value currently applied by the SDK.

### setCrop

```ts
setCrop(value: number): void
```

Set the software crop amount used when digital zoom fallback is required.

- `remarks`: Crop is clamped to the supported fallback range.
- `throws`: Error when the supplied value is not numeric.

### getCrop

```ts
getCrop(): number
```

Return the current software crop value.


## Properties

### listeners

```ts
listeners: {}
```
