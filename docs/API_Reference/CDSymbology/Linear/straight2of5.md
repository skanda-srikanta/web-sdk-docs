---
title: Straight2Of5
---

`Straight2Of5` Class supports all the public APIs for `Straight2Of5` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Straight2of5 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Straight2of5.
const CdSymbology = new CDSymbology()
set CdSymbology.Straight2of5.enable(value: boolean);
get CdSymbology.Straight2of5.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum`  is used to enable or disable checksum setting for Straight2Of5 symbology. (Defaults to Straight2Of5Checksum.Disable for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Straight2of5.checksum(value: Straight2of5Checksum);
get CdSymbology.Straight2of5.checksum(): Straight2of5Checksum;
```
</CodeBlock>

---

## Enums

 ### <u>Straight2of5Checksum</u>
*  DISABLE = 0,
*  ENABLE = 1,
*  ENABLED_STRIP_CHECK_CHARACTER = 2
