---
title: QRCode
---

`QRCode` Class supports all the public APIs for `QRCode` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable QR symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable QR.
const CdSymbology = new CDSymbology()
set CdSymbology.QR.enable(value: boolean);
get CdSymbology.QR.enable(): boolean;
```
</CodeBlock>

---

### <u>model1</u>

`model1` is used to enable/disable model1 decoding of QRCode.(Defaults to true for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.QR.model1(value: boolean);
get CdSymbology.QR.model1(): boolean;
```
</CodeBlock>

---

### <u>mirror</u>

`mirror` is used to enable/disable mirror decoding of QRCode.(Defaults to true for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.QR.mirror(value: boolean);
get CdSymbology.QR.mirror(): boolean;
```
</CodeBlock>

---

### <u>polarity</u>

`polarity` is used to change the Polarity setting of QRCode.(Defaults to QRCodePolarity.either for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.QR.polarity(value: QRPolarity);
get CdSymbology.QR.polarity(): QRPolarity;
```
</CodeBlock>

---

### <u>micro</u>

`micro` is used to enable/disable the MicroQR decoding of QRCode.(Defaults to true for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.QR.micro(value: boolean);
get CdSymbology.QR.micro(): boolean;
```
</CodeBlock>

---

## Enums

 ### <u>QRCodePolarity</u>
*  EITHER = 0,
*  DARK_ON_LIGHT = 1,
*  LIGHT_ON_DARK = -1