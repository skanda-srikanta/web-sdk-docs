---
title: Matrix2Of5
---

`Matrix2Of5` Class supports all the public APIs for `Matrix2Of5` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Matrix2of5 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Matrix2of5.
const CdSymbology = new CDSymbology()
set CdSymbology.Matrix2of5.enable(value: boolean);
get CdSymbology.Matrix2of5.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum` is used to set checksum setting for Matrix2Of5 symbology. (Defaults to Matrix2Of5Checksum.Disable for iOS and Xamarin) 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Matrix2of5.checksum(value: Matrix2of5Checksum);
get CdSymbology.Matrix2of5.checksum(): Matrix2of5Checksum;
```
</CodeBlock>

---

## Enums

 ### <u>Matrix2Of5Checksum</u>
*  DISABLE = 0,
*  ENABLE = 1,
*  ENABLED_STRIP_CHECK_CHARACTER = 2 - Enable checksum while stripping checksum character for Matrix2Of5.

