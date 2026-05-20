---
title: DataMatrix
---

`DataMatrix` Class supports all the public APIs for `DataMatrix` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable DataMatrix symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable DataMatrix.
const CdSymbology = new CDSymbology()
set CdSymbology.DataMatrix.enable(value: boolean);
get CdSymbology.DataMatrix.enable(): boolean;
```
</CodeBlock>

---

### <u>rectangular</u>

`rectangular` is used to enable or disable Rectangular DataMatrix. Defaults to true for iOS and Xamarin.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.DataMatrix.rectangular(value: boolean);
get CdSymbology.DataMatrix.rectangular(): boolean;
```
</CodeBlock>

---

### <u>extendedRect</u>

`extendedRect` is used to enable/disable extended rectangular decoding of DataMatrix.(Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.DataMatrix.extendedRect(value: boolean);
get CdSymbology.DataMatrix.extendedRect(): boolean;
```
</CodeBlock>

---

### <u>mirror</u>

`mirror` is used to enable or disable mirror decoding of DataMatrix.(Defaults to true for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.DataMatrix.mirror(value: boolean);
get CdSymbology.DataMatrix.mirror(): boolean;
```
</CodeBlock>

---

### <u>polarity</u>

`polarity` is used to change the Polarity setting of DataMatrix.(Defaults to DataMatrixPolarity.Either for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.DataMatrix.polarity(value: DataMatrixPolarity);
get CdSymbology.DataMatrix.polarity(): DataMatrixPolarity;
```
</CodeBlock>

---

## Enums

 ### <u>DatamatrixPolarity</u>
*  EITHER = 0,
*  DARK_ON_LIGHT = 1,
*  LIGHT_ON_DARK = -1



