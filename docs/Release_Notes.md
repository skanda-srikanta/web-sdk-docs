---
sidebar_position: 4
---

---
title: Release Notes
---

# Web SDK Release Notes


<b>Version 1.17</b>

- Bug fixes in getCamera API of CDCamera class
- Bug fixes in race condition caused when stopCamera and startCamera API being called very quickly.
- Bug fixes in handling preview when the preview is toggled very quickly

<b>Version 1.16</b>

- CDCamera init method can now take canvas element as reference.
- Fixed the memory leak issue caused on iPhones.
- Added fix to handle switching cameras swiftly without breaking the app.
- Added setCrop API to handle zoom on iPhones as a workaround to focus issue for close focal distances.

<b>Version 1.15</b>

- Fixed a bug that caused camera preview to stop upon page navigation on Next.JS

<b>Version 1.14</b>

- Improved license security by updating to the latest OpenSSL version.
- Added data collection to both Node SDK and Web worker SDK.

<b>Version 1.13</b>

- Fixed data parsing issue in SDK
- Made changes to camera APIs for easily switching between different camera inputs.
- Bug fixes for ROI and highlight on scan features on iOS and Mac in camera sample app.

<b>Version 1.12</b>

- Added data collection to Web Worker SDK and Node SDK.
- Added CDLicenseResult object which is returned upon license activation.
- UI changes to Camera Scan sample app

<b>Version 1.11</b>

- Added data collection functionality which can be activated with DC enabled valid license string or with a QR scan.
- Added a class CDPerformanceFeatures by separating the performance enhancing APIs from CDDecoder class.

<b>Version 1.10</b>

- Added a new SDK with WASM file embedded within JavaScript.
- Modified Camera Scan sample app to read this SDK.

<b>Version 1.9</b>

- Bug fixes for Opera browser compatibility.
- getConnectedCameras won't add duplicate values when CDCamera class is initialized multiple times.
- startPreview() API checks for camera permission and if there is no permission, requests for permission.
- Beep on scan supported on iOS devices.
- On iOS devices, when notification bar is pulled down, the camera stops and "restartCamera" event is dispatched.
- UI improvements in sample apps. 

<b>Version 1.8</b>

- Decoder performance improved and security updated

<b>Version 1.7</b>

- Bug fixes in duplicate delay API.
- setBarcodesToDecode API returns the actual number set to the decoder.
- Bug fixes for scaling coordinates for different resolutions in sample app.
- Beep on scan is enabled by default.
- Added setDecode API in CDCamera class to start and stop decoding.
- getResolution API in CDCamera class returns the exact video dimension when called after the preview has started.
- setPreview API renamed to startPreview
- stopPreview API in CDCamera class just stops the video preview and not the actual camera. Calling startPreview again starts the preview without delay.
- setCamera takes 0 as argument to stop camera.
- setVideoCapturing false stops the frame generation.
- Bug fixes in setCamera and setCamera position APIs.
- When a phone with multiple back camera is used, the best back camera is selected.
- When notification bar is on iPhone pulled when camera preview is ON, the preview stops but the decoder continues to decode null frames. Fixed the issue. 

<b>Version 1.6</b>

- Made changes to CDRect class to simplify setting coordinates for ROI in the decoder.
- Made changes to Camera Scan sample app to display UI for Picklist mode and ROI.
- ROI scaling internally when the camera resolution changes. (User has to set ROI for the preview dimensions)
- With phones with multiple back cameras, when setCameraPosition API is used, SDK automatically switches to optimal camera when wide view camera opens by default.
- UI changes to disable beep and vibration when using on iOS devices.

<b>Version 1.5</b>

- Fixed Picklist mode bug
- Updated UI for Camera Scan sample App to support multiple settings.
- Added functionality for flash and vibrate (works only on Android devices).
- Fixed bugs related to setting default settings to decoder.
- Added new API called setCameraPosition to CDCamera class to set front or back camera by default without needing to call setCamera API
- Bug fixes to setCamera API to allow it to work in phones having other languages.

<b>Version 1.4</b>

- getConnectedCameras() returns an array of objects consisting of both device id and device label.
- setCamera() takes either camera id or camera label as argument.
- Performance improvement in fetching available video input devices.

<b>Version 1.3</b>

- GS1 data parsing bug fix.

<b>Version 1.2</b>

- Added support for Oppo, Lenovo and Redmi phones.
- Made adjustment for setBarcodesToDecode API(previously barcodesToDecode property).

<b>Version 1.0</b>

- Comma character was getting replaced with a blank in the result. Fixed the bug
- Resolution switch was giving "Invalid Constraint Error" on Safari browser. Fixed the bug
- The decoder doesn't decode with invalid license activations.
- Duplicate filtering is set to max of 100 unique results scanned. 
- iOS12 was giving "Canvas memory full" error. Made changes to trigger garbage collection in the canvas memory.
- Switching camera devices wasn't working on devices with iOS12. Fixed the bug.

	<u>Known Issues</u>
- More performance improvements possible. 

	<u>Future Improvements:</u>
- Implement faster decoding on higher resolution inputs 

