---
title: MSIPlessey
---

`MSIPlessey` Class supports all the public APIs for `MSIPlessey` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable MSIPlessey symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable MSIPlessey.
const CdSymbology = new CDSymbology()
set CdSymbology.MSIPlessey.enable(value: boolean);
get CdSymbology.MSIPlessey.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum`  is used to enable or disable checksum setting for MSIPlessey symbology. (Defaults to MSIPlesseyChecksum.Disable for iOS and Xamarin).

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.MSIPlessey.checksum(value: MSIPlesseyChecksum);
get CdSymbology.MSIPlessey.checksum(): MSIPlesseyChecksum;
```
</CodeBlock>

---

### <u>stripChecksum</u>

`stripChecksum` is used to enable or disable MSIPlessey strip checksum setting. ( Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.MSIPlessey.stripChecksum(value: boolean);
get CdSymbology.MSIPlessey.stripChecksum(): boolean;
```
</CodeBlock>

---

### <u>minimumLength</u>

`minimumLength` is used to set the minimum data length for MSIPlessey.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.MSIPlessey.minimumLength(value: number);
get CdSymbology.MSIPlessey.minimumLength(): number;
```
</CodeBlock>
<Admonition type="note">
<p> Input can be any number less than 100.</p>
</Admonition>


---

## Enums

 ### <u>MSIPlesseyChecksum</u>

*  DISABLE = 0,
*  MOD10 = 1,
*  MOD10_10 = 2,
*  MOD11_10 = 3
