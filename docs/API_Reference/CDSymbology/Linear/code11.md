---
title: Code11
---

`Code11` Class supports all the public APIs for `Code11` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Code11 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Code11.
const CdSymbology = new CDSymbology()
set CdSymbology.Code11.enable(value: boolean);
get CdSymbology.Code11.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum` is used to enable or disable checksum setting for Code11 symbology.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code11.checksum(value: Code11Checksum);
get CdSymbology.Code11.checksum(): Code11Checksum;
```
</CodeBlock>

---

### <u>stripChecksum</u>

`stripChecksum` is used to enable or disable strip checksum setting for Codabar symbology.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code11.stripChecksum(value: boolean);
get CdSymbology.Code11.stripChecksum(): boolean;
```
</CodeBlock>

---

## Enums

 ### <u>Code11Checksum</u>
*  DISABLE = 0
*  DIGIT1 = 1
*  DIGIT2 = 2