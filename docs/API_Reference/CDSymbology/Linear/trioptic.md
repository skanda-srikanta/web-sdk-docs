---
title: Trioptic
---

`Trioptic` Class supports all the public APIs for `Trioptic` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Trioptic symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Trioptic.
const CdSymbology = new CDSymbology()
set CdSymbology.Trioptic.enable(value: boolean);
get CdSymbology.Trioptic.enable(): boolean;
```
</CodeBlock>

---

### <u>sendStartStopCharacters</u>

`sendStartStopCharacters` is used to enable or disable send start stop character setting for Trioptic symbology.( Defaults to false for iOS and Xamarin) 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Trioptic.sendStartStopCharacters(value: boolean);
get CdSymbology.Trioptic.sendStartStopCharacters(): boolean;
```
</CodeBlock>

---
