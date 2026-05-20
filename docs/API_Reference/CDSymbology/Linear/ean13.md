---
title: EAN13
---

`EAN13` Class supports all the public APIs for `EAN13` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable EAN13 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable EAN13.
const CdSymbology = new CDSymbology()
set CdSymbology.EAN13.enable(value: boolean);
get CdSymbology.EAN13.enable(): boolean;
```
</CodeBlock>

---

### <u>stripCheckDigit</u>

`stripCheckDigit` is used to enable or disable EAN13 strip check digit setting. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN13.stripCheckDigit(value: boolean);
get CdSymbology.EAN13.stripCheckDigit(): boolean;
```
</CodeBlock>

---

### <u>supplement2Digit</u>

`supplement2Digit` is used to enable or disable EAN13 supplement 2-digit setting. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN13.supplement2Digit(value: boolean);
get CdSymbology.EAN13.supplement2Digit(): boolean;
```
</CodeBlock>

---

### <u>setSupplement5Digit</u>

`setSupplement5Digit` is used to enable or disable EAN13 supplement 5-digit setting. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN13.supplement5Digit(value: boolean);
get CdSymbology.EAN13.supplement5Digit(): boolean;
```
</CodeBlock>

---

### <u>setSupplementAddSpace</u>

`setSupplementAddSpace` is used to enable or disable EAN13 supplement add space setting. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN13.supplementAddSpace(value: boolean);
get CdSymbology.EAN13.supplementAddSpace(): boolean;
```
</CodeBlock>

---

### <u>setSupplementRequired</u>

`setSupplementRequired` is used to enable or disable EAN13 supplement required setting. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.EAN13.supplementRequired(value: boolean);
get CdSymbology.EAN13.supplementRequired(): boolean;
```
</CodeBlock>

---

### <u>reducedAggressiveness</u>

`reducedAggressiveness` is used to enable or disable improved efficiency of decoding UPC family barcodes by reducing aggressiveness of decoding. Defaults to false.

<CodeBlock language="js">

```js

const CdSymbology = new CDSymbology()
set CdSymbology.EAN13.reducedAggressiveness(value: boolean);
get CdSymbology.EAN13.reducedAggressiveness(): boolean;

```
</CodeBlock>