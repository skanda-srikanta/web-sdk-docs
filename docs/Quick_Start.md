---
sidebar_position: 1
title: Quick Start Guide
description: ''
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

# Web SDK 2.0 SDK Quick Start Guide

## Requirements

### Browser Support
 ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
>66 ✔ | 68 ❕✔ | 44 ✔ | >53 ✔ | 11+ ❕✔ |



### Device Support
 ![Android](./assets/icons8-android-48.png) | ![iOS](./assets/icons8-iphone-48.png) | ![Macbook](./assets/icons8-macbook-50.png) | ![PC](./assets/icons8-windows-10-50.png)
--- | --- | --- | --- |
>66 ✔ | 68 ✔ |66 ✔ | 68 ✔ |

---

✔ - Supported | ❕✔ - Limited Support |	❌ - No Support
--- | --- | --- |

### Build Tool

### Supported Languages and frameworks

| Supported Languages | Supported framework |
| ------------------- | :------------------: |
|Javascript, Typescript|All Frontend JavaScript frameworks and libraries|

## Installation Instructions
#### Install NodeJS and NPM
[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Verify Installation of NodeJS and NPM
Open a command prompt (or PowerShell), and enter the following:

* ```node –v```
The system should display the Node.js version installed on your system.

* ```npm –v```
The system should display the NPM version installed on your system.

#### SDK folder structure
* The SDK release folder will have three directories namely <b>NPM_Package</b>,  <b>Sample Apps</b>, <b>docs</b>.
* The "NPM_Package" folder contains the package that should be installed locally in the project.
* The "Sample Apps" folder contains example apps to demonstrate the camera scanning and image scanning feature of the SDK.
* The "docs" folder has _____________________


#### Integrate the SDK in camera scan sample app
* Copy the <b>Cortex_Scan_SampleWebApp_Basic</b> app from the "Sample Apps" folder to local file system.
* Copy the <b>codecorp-web_sdk-2.x.x.tgz</b> file from "NPM_Package" folder to the root of "Cortex_Scan_SampleWebApp_Basic" app.
* Type <b>npm install --save codecorp-web_sdk-2.0.0.tgz</b>

#### Activate the license
* Open the "Cortex_Scan_SampleWebApp_Basic" app in a source code editor of your choice.
* Navigate to "src" folder and open the file "index.js".
* Go to the line where function <b>"activateLicense"</b> is called and replace the text with the license key provided by our Sales team.
* Type <b>"npm run dev"</b> to start the server. The license activation message must be printed in console log.

#### Use Camera to Scan
* Our SDK provides APIs to change multiple settings of the device camera and decode the frames generated from the camera.
* SDK requires the application to provide either -
	* HTML canvas element
		```<canvas id="videoCanvas" width="640" height="360"></canvas>```
	* HTML video element
		```<video id="video" width="640" height="360" playsinline></video>```
* CDCamera class provides ```init(ref?: HTMLVideoElement | HTMLCanvasElement): Promise<void>;``` API which takes an optional parameter for video input. If no parameter is provided, SDK looks for video element in the DOM and if none, throws an error.
	<CodeBlock language="js">
		CDCamera.init(document.getElementById("videoCanvas"))
	</CodeBlock>
* The ```getConnectedCameras(): MediaDeviceInfo[];``` API of CDCamera class returns a list of all the connected video input devices.
* Pass either the ID or the label of the device to ```setCamera(device: String): Promise<void>;``` API.
* If you prefer to select the camera based on orientation (front / back) then call ```    setCameraPosition(value: CDPosition): Promise<void>;``` API.
	<CodeBlock language="js">
        CDCamera.setCameraPosition(CDPosition.BACK)
	</CodeBlock>
* Call ```startCamera(): Promise<void>;``` API to start the camera stream.
* Finally call ```startPreview(getResult: (arg0: [CDResult]) => any): Promise<void>;``` which takes a callback function as argument to return the decode results.

		```js
		CDCamera.startPreview((result)=>{
			console.log(result)
		})
		```

#### Integrate the SDK in image scan sample app
* Copy the <b>Image_Scan_SampleWebApp_Basic</b> app from the "Sample Apps" folder to local file system.
* Copy the <b>codecorp-web_sdk-2.x.x.tgz</b> file from "NPM_Package" folder to the root of "Cortex_Scan_SampleWebApp_Basic" app.
* Type <b>npm install --save codecorp-web_sdk-2.0.0.tgz</b>
* Open the app in source code editor, navigate to src folder and open "index.js" file and replace the string in activate license method with license string provided by our Sales team.
* Type <b>"npm run dev"</b> to start the server. The license activation message must be printed in console log.

#### Scan Images
* In HTML file, using input tag, upload an image
		<input type="file" id="imageImport" accept="image/*,.pdf" />
* In JS, handle the image upload

<CodeBlock language="js">

```js
// HTML
document.getElementById("imageImport").addEventListener('change', getImage, false);

//JS
async function getImage(evt) {
	image = evt.target.files[0];
	result = await CDDecoder.decode(image).catch(e => alert(e));
	console.log(result)
}
```
</CodeBlock>
	

## Quick Tips

#### Enable or Disable a symbology 

<CodeBlock language="js">

```js
const cdSymbology = new CDSymbology();
cdSymbology.QR.enable = true
console.log(cdSymbology.QR.enable) //Prints true
```
</CodeBlock>

#### Set Region of Interest (ROI) 

<CodeBlock language="js">

```js
const ROIRect = new CDRect();

ROIRect.TopLeft.X = parseInt(left);
ROIRect.TopLeft.Y = parseInt(top);
ROIRect.TopRight.X = parseInt(left) + parseInt(width)
ROIRect.TopRight.Y = parseInt(top)
ROIRect.BottomRight.X = parseInt(left) + parseInt(width)
ROIRect.BottomRight.Y = parseInt(top) + parseInt(height)
ROIRect.BottomLeft.X = parseInt(left)
ROIRect.BottomLeft.Y = parseInt(top) + parseInt(height)

CDDecoder.setRegionOfInterest(ROIRect, true);
```
</CodeBlock>

#### Set Barcodes to Decode

<CodeBlock language="js">

```js
    await CDDecoder.setBarcodesToDecode(1, true);
```
</CodeBlock>

#### Set TimeLimit 
<CodeBlock language="js">

```js
 	CDDecoder.timeLimit = value
```
</CodeBlock>

#### Enable beep and vibrate for a successful scan
<CodeBlock language="js">

```js
    CDDevice.audio = true
	CDDevice.vibration = false
	console.log(CDDevice.audio)   //Prints true
```
</CodeBlock>






<!-- <details>
<summary> Getting Started

## SDK Folder Structure

</summary>
- <b>NPM Package</b> - is a packaged form of the the SDK that can be easily imported into Front End apps using `npm install` . It contains a (.tgz) file that can be copied to the project directory and installed as a node module.

---

</details>

<details>
<summary> Update

## How to integrate the SDKs ?
</summary>



- Copy the NPM package inside your project
- Import the locally saved NPM package inside your project

```sh
npm install --save "./location of NPM package/cortexdecoder_web-x.xx.x.tgz"
```

- Verify the dependency in package.json

```json
 "cortexdecoder_web": "file:location of NPM package/cortexdecoder_web-x.xx.x.tgz",
```

- Initialize the library and activate the license

<Tabs>
<TabItem value="cjs" label="CJS Import" default>
<CodeBlock language="js">

```js
const CortexDecoder = require('codecorp-web_sdk/lib/index.js');
```

</CodeBlock>
</TabItem>

<TabItem value="esm" label="ESM Import">
<CodeBlock language="js">

```js
import * as CortexDecoder from 'codecorp-web_sdk';
```
</CodeBlock>
</TabItem>

<TabItem value="umd" label="UMD Import">
<CodeBlock language="js">

```js
<script src="/scripts/CortexDecoder.js"></script>
```
</CodeBlock>
</TabItem>
</Tabs>

---

</details>

<details>
<summary> License Activation

## How to activate the license?

</summary>

```js
await CDLicense.activateLicense(license_string)→ {Object} 
```
</details>

<details>
<summary> Scanning

## How to use camera scan?

</summary>



Web SDK offers CDCamera class which provides APIs to choose cameras and adjust various camera setting. It allows to decode directly from the camera preview.

Below snippets shows how to initialize camera preview and get decoded results.



### Initialize camera

<Tabs>
<TabItem value="video" label="Video Input" default>
<CodeBlock language="html">

```html
<!--In your HTML--
<video
  id="video"
  width="640"
  height="360"
  playsinline
</video
```

</CodeBlock>
</TabItem>

<TabItem value="canvas" label="Canvas Input">
<CodeBlock language="html">

```html
<!--In your HTML--
<canvas id="video" width="640" height="480"></canvas>
```

</CodeBlock>
</TabItem>
</Tabs>


```js
// In your JavaScript
await CortexDecoder.CDCamera.init()

if (isMobile) {
  await CortexDecoder.CDCamera.setCameraPosition(
   CDPosition.BACK
  )
} else {
  await CortexDecoder.CDCamera.setCameraPosition(
    CDPosition.FRONT
  )
}
```

### Start preview and get results

```js
//In JavaScript
await CortexDecoder.CDCamera.startCamera()

await CortexDecoder.CDCamera.startPreview(
  (results => console.log(results))
)
```


### Pause Camera Preview or Stop Camera 

- Pause Camera Preview
```js
await CortexDecoder.CDCamera.stopPreview()
```

- Stop Camera 
```js
await CortexDecoder.CDCamera.stopCamera()
```

---

</details>

<details>
<summary> Configuring

## How to enable or disable a symbology in Web SDK
</summary>
- Web SDK supports 51 different symbologies.
- Some symbologies are enabled by default.
- The below code snippet shows how a user can enable or disable a symbology.

```js
let Cdsymbology = new CortexDecoder.CDSymbology()
Cdsymbology.Code11.enable = true;
Cdsymbology.Code11.checksum = CortexDecoder.Code11Checksum.ENABLE_2Digit;
Cdsymbology.QR.polarity = CortexDecoder.QRCodePolarity.DARK_ON_LIGHT
```


`CDLicense.getLicensedSymbologies` returns a list of all the licensed symbologies.

```js
async getLicensedSymbologies():Promise<string[]>{}
```

`CDLicense.getLicensedExtendedSymbologies` returns a list of all the extended symbologies.

```js
async getLicensedExtendedSymbologies():Promise<string[]>{}
```

:::note
For more information about the supported symbologies for various licenses, check [here](https://codecorp.com/products/cortexdecoder).
:::

---

</details>

<details>
<summary> Configuring

## How to set Region of Interest in Web SDK

</summary>

- Region of interest is the limited region in the entire preview where the decoding occurs.
- Below snippet shows how the user can set a region of interest.

```js
let CustomROI = new CortexDecoder.CDRect()

CustomROI.BottomRight.X = value
CustomROI.BottomRight.Y = value
CustomROI.TopLeft.X = value
CustomROI.TopLeft.Y = value
CustomROI.TopRight.X = value
CustomROI.TopRight.Y = value
CustomROI.BottomLeft.X = value
CustomROI.BottomLeft.Y = value

await CortexDecoder.CDDecoder.setRegionOfInterest(CustomROI, true)

```

</details>

<details>
<summary> Upgrade

## Migrate from Web SDK v.1 to v.2

</summary>


</details> -->