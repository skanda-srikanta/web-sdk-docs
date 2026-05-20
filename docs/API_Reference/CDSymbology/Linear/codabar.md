---
title: Codabar
---

`Codabar` Class supports all the public APIs for `Codabar` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Codabar symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Codabar.
const CdSymbology = new CDSymbology()
set CdSymbology.Codabar.enable(value: boolean);
get CdSymbology.Codabar.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum` is used to enable or disable checksum setting for Codabar symbology. (Defaults to CodabarChecksum.Disable. for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Codabar.checksum(value: CodabarChecksum);
get CdSymbology.Codabar.checksum(): CodabarChecksum;
```
</CodeBlock>

---

### <u>stripStartStopCharacters</u>

`stripStartStopCharacters` is used to enable or disable strip start stop character setting for Codabar symbology. (Defaults to false for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Codabar.stripStartStopCharacters(value: boolean);
get CdSymbology.Codabar.stripStartStopCharacters(): boolean;
```
</CodeBlock>

---

### <u>minimumLength</u>

`minimumLength` is used to set Minimum Length for Codabar symbology.( Defaults to 4 for iOS and Xamarin).

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Codabar.minimumLength(value: number);
get CdSymbology.Codabar.minimumLength(): number;
```
</CodeBlock>
<Admonition type="note">
<p> Input can be any number less than 100.</p>
</Admonition>

---

## Enums

 ### <u>CodabarChecksum</u>
*  DISABLE = 0,
*  ENABLE = 1,
*  ENABLED_STRIP_CHECK_CHARACTER = 2