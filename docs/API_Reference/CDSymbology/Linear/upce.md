---
title: UPCE
---

`UPCE` Class supports all the public APIs for `UPCE` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';


## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable UPCE symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable UPCE.
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.enable(value: boolean);
get CdSymbology.UPCE.enable(): boolean;
```
</CodeBlock>

---

### <u>stripNumberSystemDigit</u>

`stripNumberSystemDigit` is used to enable or disable UPCE strip system number digit setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.stripNumberSystemDigit(value: boolean);
get CdSymbology.UPCE.stripNumberSystemDigit(): boolean;
```
</CodeBlock>

---

### <u>stripCheckDigit</u>

`stripCheckDigit` is used to enable or disable UPCE strip check digit setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.stripCheckDigit(value: boolean);
get CdSymbology.UPCE.stripCheckDigit(): boolean;
```
</CodeBlock>

---

### <u>supplement2Digit</u>

`supplement2Digit` is used to enable or disable UPCE supplement 2 digit setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.supplement2Digit(value: boolean);
get CdSymbology.UPCE.supplement2Digit(): boolean;
```
</CodeBlock>

---

### <u>supplement5Digit</u>

`supplement5Digit` is used to enable or disable UPCE supplement 5 digit setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.supplement5Digit(value: boolean);
get CdSymbology.UPCE.supplement5Digit(): boolean;
```
</CodeBlock>

---

### <u>supplementAddSpace</u>

`supplementAddSpace` is used to enable or disable adding the space character between the UPCE code and the 2 or 5 digit supplemental code for UPCA. Applicable only when the decoding of the corresponding supplemental code is enable.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.supplementAddSpace(value: boolean);
get CdSymbology.UPCE.supplementAddSpace(): boolean;
```
</CodeBlock>

---

### <u>supplementRequired</u>

`supplementRequired` is used to enable or disable requiring the supplemental code to be decoded for UPC-E. The barcode will not be decoded unless both the barcode and the supplemental codes are decoded at the same time. Applicable only when the decoding of the corresponding supplemental code is enabled.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.supplementRequired(value: boolean);
get CdSymbology.UPCE.supplementRequired(): boolean;
```
</CodeBlock>

---

### <u>expansion</u>

`expansion` is used to enable or disable UPCE expansion setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.expansion(value: boolean);
get CdSymbology.UPCE.expansion(): boolean;
```
</CodeBlock>

---

### <u>numberSystem1</u>

`numberSystem1` is used to enable or disable UPCE Number System1 setting. (Defaults to false for iOS and Xamarin).

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.numberSystem1(value: boolean);
get CdSymbology.UPCE.numberSystem1(): boolean;
```
</CodeBlock>

---

### <u>reducedAggressiveness</u>

`reducedAggressiveness` is used to enable or disable improved efficiency of decoding UPC family barcodes by reducing aggressiveness of decoding. Defaults to false.

<CodeBlock language="js">

```js

const CdSymbology = new CDSymbology()
set CdSymbology.UPCE.reducedAggressiveness(value: boolean);
get CdSymbology.UPCE.reducedAggressiveness(): boolean;

```
</CodeBlock>