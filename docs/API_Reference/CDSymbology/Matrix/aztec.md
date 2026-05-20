---
title: Aztec
---

`Aztec` Class supports all the public APIs for `Aztec` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Aztec symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Aztec.
const CdSymbology = new CDSymbology()
set CdSymbology.Aztec.enable(value: boolean);
get CdSymbology.Aztec.enable(): boolean;
```
</CodeBlock>

---

### <u>mirror</u>

`mirror` is used to enable or disable mirror decoding of Aztec.(Defaults to true for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Aztec.mirror(value: boolean);
get CdSymbology.Aztec.mirror(): boolean;
```
</CodeBlock>

---

### <u>polarity</u>

`polarity` is used to change the Polarity setting of Aztec. (Defaults to AztecPolarity.either for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Aztec.polarity(value: AztecPolarity);
get CdSymbology.Aztec.polarity(): AztecPolarity;
```
</CodeBlock>

---

## Enums

 ### <u>AztecPolarity</u>
*  EITHER = 0,
*  DARK_ON_LIGHT = 1,
*  LIGHT_ON_DARK = -1
