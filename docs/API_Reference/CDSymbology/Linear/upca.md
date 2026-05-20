---
title: UPCA
---

`UPCA` Class supports all the public APIs for `UPCA` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable UPCA symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable UPCA.
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.enable(value: boolean);
get CdSymbology.UPCA.enable(): boolean;
```
</CodeBlock>

---

### <u>convertToEAN13</u>

`convertToEAN13` is used to enable or disable UPCA convert to EAN13 setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.convertToEAN13(value: boolean);
get CdSymbology.UPCA.convertToEAN13(): boolean;
```
</CodeBlock>

---

### <u>stripNumberSystemDigit</u>

`stripNumberSystemDigit` is used to enable or disable UPCA strip system number digit setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.stripNumberSystemDigit(value: boolean);
get CdSymbology.UPCA.stripNumberSystemDigit(): boolean;
```
</CodeBlock>

---

### <u>stripCheckDigit</u>

`stripCheckDigit` is used to enable or disable UPCA strip check digit setting. (Defaults to false for iOS and Xamarin).

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.stripCheckDigit(value: boolean);
get CdSymbology.UPCA.stripCheckDigit(): boolean;
```
</CodeBlock>

---

### <u>supplement2Digit</u>

`supplement2Digit` is used to enable or disable UPCA supplement 2 digit setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.supplement2Digit(value: boolean);
get CdSymbology.UPCA.supplement2Digit(): boolean;
```
</CodeBlock>

---

### <u>supplement5Digit</u>

`supplement5Digit` is used to enable or disable UPCA supplement 5 digit setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.supplement5Digit(value: boolean);
get CdSymbology.UPCA.supplement5Digit(): boolean;
```
</CodeBlock>

---

### <u>supplementAddSpace</u>

`supplementAddSpace` is used to enable or disable UPCA supplement add space setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.supplementAddSpace(value: boolean);
get CdSymbology.UPCA.supplementAddSpace(): boolean;
```
</CodeBlock>

---

### <u>supplementRequired</u>

`supplementRequired` is used to enable or disable UPCA supplement required setting. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.supplementRequired(value: boolean);
get CdSymbology.UPCA.supplementRequired(): boolean;
```
</CodeBlock>

---

### <u>reducedAggressiveness</u>

`reducedAggressiveness` is used to enable or disable improved efficiency of decoding UPC family barcodes by reducing aggressiveness of decoding. Defaults to false.

<CodeBlock language="js">

```js

const CdSymbology = new CDSymbology()
set CdSymbology.UPCA.reducedAggressiveness(value: boolean);
get CdSymbology.UPCA.reducedAggressiveness(): boolean;

```
</CodeBlock>
