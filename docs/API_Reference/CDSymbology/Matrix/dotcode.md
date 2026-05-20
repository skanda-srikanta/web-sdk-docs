---
title: DotCode
---

`DotCode` Class supports all the public APIs for `DotCode` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable DotCode symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable DotCode.
const CdSymbology = new CDSymbology()
set CdSymbology.DotCode.enable(value: boolean);
get CdSymbology.DotCode.enable(): boolean;
```
</CodeBlock>

---

### <u>mirror</u>

`mirror` is used to enable or disable mirror decoding of DotCode.(Defaults to true for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.DotCode.mirror(value: boolean);
get CdSymbology.DotCode.mirror(): boolean;
```
</CodeBlock>

---

### <u>polarity</u>

`polarity` is used to change the Polarity setting of DotCode.(Defaults to DotcodePolarity.either for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.DotCode.polarity(value: DotCodePolarity);
get CdSymbology.DotCode.polarity(): DotCodePolarity;
```
</CodeBlock>

---

## Enums

 ### <u>DotCodePolarity</u>
*  EITHER = 0,
*  DARK_ON_LIGHT = 1,
*  LIGHT_ON_DARK = -1