---
title: Code39
---

`Code39` Class supports all the public APIs for `Code39` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';



## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Code39 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Code39.
const CdSymbology = new CDSymbology()
set CdSymbology.Code39.enable(value: boolean);
get CdSymbology.Code39.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum` is used to enable or disable checksum setting for Code39 symbology.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code39.checksum(value: Code39Checksum);
get CdSymbology.Code39.checksum(): Code39Checksum;
```
</CodeBlock>

---

### <u>ASCIIModeEnable</u>

`ASCIIModeEnable` is used to set ASCIIModeEnable property of Code39 symbology.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code39.ASCIIModeEnable(value: boolean);
get CdSymbology.Code39.ASCIIModeEnable(): boolean;
```
</CodeBlock>

---

### <u>stripStartStopCharacters</u>

`stripStartStopCharacters` is used to enable or disable Code39 send start stop characters setting.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code39.stripStartStopCharacters(value: boolean);
get CdSymbology.Code39.stripStartStopCharacters(): boolean;
```
</CodeBlock>

---

### <u>minimumLength</u>

`minimumLength` is used to set the minChars for Code39 symbology.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code39.minimumLength(value: number);
get CdSymbology.Code39.minimumLength(): number;
```

</CodeBlock>


<Admonition type="note">
<p> Input can be any number less than 100.</p>
</Admonition>
 

---

## Enums

 ### <u>Code39Checksum</u>
*  DISABLE = 0,
*  ENABLE = 1,
*  ENABLED_STRIP_CHECK_CHARACTER = 2 - Enable checksum while stripping checksum character for Code39.
