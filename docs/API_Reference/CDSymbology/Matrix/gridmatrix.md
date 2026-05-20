---
title: GridMatrix
---

`GridMatrix` Class supports all the public APIs for `GridMatrix` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable GridMatrix symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable GridMatrix.
const CdSymbology = new CDSymbology()
set CdSymbology.GridMatrix.enable(value: boolean);
get CdSymbology.GridMatrix.enable(): boolean;
```
</CodeBlock>

---

### <u>mirror</u>

`mirror` is used to enable or disable mirror decoding of GridMatrix.(Defaults to true for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.GridMatrix.mirror(value: boolean);
get CdSymbology.GridMatrix.mirror(): boolean;
```
</CodeBlock>

---

### <u>polarity</u>

`polarity` is used to change the Polarity setting of GridMatrix. (Defaults to GridMatrixPolarity.either for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.GridMatrix.polarity(value: GridMatrixPolarity);
get CdSymbology.GridMatrix.polarity(): GridMatrixPolarity;
```
</CodeBlock>

## Enums

 ### <u>GridMatrixPolarity </u>
*  either 
*  darkOnLight
*  lightOnDark