---
title: EAN8
---

`EAN8` Class supports all the public APIs for `EAN8` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable EAN8 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable EAN8.
const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.enable(value: boolean);
get CdSymbology.EAN8.enable(): boolean;
```
</CodeBlock>

---

### <u>stripCheckDigit</u>

`stripCheckDigit` is used to enable or disable EAN8 strip check digit setting. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.stripCheckDigit(value: boolean);
get CdSymbology.EAN8.stripCheckDigit(): boolean;
```
</CodeBlock>

---

### <u>converttoEAN13</u>

`converttoEAN13` is used to enable or disable EAN8 convert to EAN13 setting.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.converttoEAN13(value: boolean);
get CdSymbology.EAN8.converttoEAN13(): boolean;
```
</CodeBlock>

---

### <u>supplement2Digit</u>

`supplement2Digit` is used to enable or disable EAN8 supplement 2-digit setting.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.supplement2Digit(value: boolean);
get CdSymbology.EAN8.supplement2Digit(): boolean;
```
</CodeBlock>

---

### <u>setSupplement5Digit</u>

`setSupplement5Digit` is used to enable or disable EAN8 supplement 5-digit setting.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.supplement5Digit(value: boolean);
get CdSymbology.EAN8.supplement5Digit(): boolean;
```
</CodeBlock>

---

### <u>supplementAddSpace</u>

`supplementAddSpace` is used to enable or disable EAN8 supplement add space setting 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.supplementAddSpace(value: boolean);
get CdSymbology.EAN8.supplementAddSpace(): boolean;
```
</CodeBlock>

---

### <u>supplementRequired</u>

`supplementRequired` is used to enable or disable EAN8 supplement required setting. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.supplementRequired(value: boolean);
get CdSymbology.EAN8.supplementRequired(): boolean;
```
</CodeBlock>


### <u>reducedAggressiveness</u>

`reducedAggressiveness` is used to enable or disable improved efficiency of decoding UPC family barcodes by reducing aggressiveness of decoding. Defaults to false.

<CodeBlock language="js">

```js

const CdSymbology = new CDSymbology()
set CdSymbology.EAN8.reducedAggressiveness(value: boolean);
get CdSymbology.EAN8.reducedAggressiveness(): boolean;

```
</CodeBlock>


---
