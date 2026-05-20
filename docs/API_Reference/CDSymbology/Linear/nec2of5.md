---
title: NEC2Of5
---

`NEC2Of5` Class supports all the public APIs for `NEC2Of5` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable NEC2of5 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable NEC2of5.
const CdSymbology = new CDSymbology()
set CdSymbology.NEC2of5.enable(value: boolean);
get CdSymbology.NEC2of5.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum`  is used to set checksum setting for NEC2Of5 symbology. (Defaults to NEC2Of5Checksum.disable for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.NEC2of5.checksum(value: NEC2of5Checksum);
get CdSymbology.NEC2of5.checksum(): NEC2of5Checksum;
```
</CodeBlock>

---

## Enums

 ### <u>NEC2Of5Checksum</u>
*  DISABLE = 0,
*  ENABLE = 1,
*  ENABLED_STRIP_CHECK_CHARACTER = 2