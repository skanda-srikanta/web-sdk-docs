---
title: Interleaved2Of5
---

`Interleaved2Of5` Class supports all the public APIs for `Interleaved2Of5` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Interleaved2of5 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Interleaved2of5.
const CdSymbology = new CDSymbology()
set CdSymbology.Interleaved2of5.enable(value: boolean);
get CdSymbology.Interleaved2of5.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum` is used to set checksum setting for Interleaved2Of5 symbology. (Defaults to Interleaved2Of5Checksum.Disable for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Interleaved2of5.checksum(value: Interleaved2of5Checksum);
get CdSymbology.Interleaved2of5.checksum(): Interleaved2of5Checksum;
```
</CodeBlock>

---

### <u>minimumLength</u>

`minimumLength` is used to set Minimum Length for Interleaved2Of5 symbology. This API accepts only even integer values. If an odd value is passed, then 8 is set by default.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Interleaved2of5.minimumLength(value: number);
get CdSymbology.Interleaved2of5.minimumLength(): number;
```
</CodeBlock>
<Admonition type="note">
<p> Input can be any number less than 100.</p>
</Admonition>

---

### <u>rejectPartialDecode</u>

`rejectPartialDecode` is used to enable or disable Reject partial decode of Interleaved2Of5 in the decoder.( Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Interleaved2of5.rejectPartialDecode(value: boolean);
get CdSymbology.Interleaved2of5.rejectPartialDecode(): boolean;
```
</CodeBlock>

---

### <u>quietZone</u>

`quietZone` is used to enable or disable the short quiet zone for Interleaved2Of5 symbology. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Interleaved2of5.quietZone(value: boolean);
get CdSymbology.Interleaved2of5.quietZone(): boolean;
```
</CodeBlock>

---

## Enums

 ### <u>Interleaved2Of5Checksum</u>
*  DISABLE = 0,
*  ENABLE = 1,
*  ENABLED_STRIP_CHECK_CHARACTER = 2 - Enable checksum while stripping checksum character for Interleaved2Of5.