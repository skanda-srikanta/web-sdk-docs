---
title: IATA2Of5
---

`IATA2Of5` Class supports all the public APIs for `IATA2Of5` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable IATA2of5 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable IATA2of5.
const CdSymbology = new CDSymbology()
set CdSymbology.IATA2of5.enable(value: boolean);
get CdSymbology.IATA2of5.enable(): boolean;
```
</CodeBlock>

---

### <u>checksum</u>

`checksum` is used to set checksum setting for IATA2Of5 symbology. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.IATA2of5.checksum(value: IATA2Of5Checksum);
get CdSymbology.IATA2of5.checksum(): IATA2Of5Checksum;
```
</CodeBlock>

---

### <u>minimumLength</u>

`minimumLength` is used to set Minimum Length for IATA2Of5 symbology.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.IATA2of5.minimumLength(value: number);
get CdSymbology.IATA2of5.minimumLength(): number;
```
</CodeBlock>
<Admonition type="note">
<p> Input can be any number less than 100.</p>
</Admonition>

---

## Enums

 ### <u>IATA2Of5Checksum</u>
*  DISABLE = 0,
*  ENABLE = 1,
*  ENABLED_STRIP_CHECK_CHARACTER = 2
