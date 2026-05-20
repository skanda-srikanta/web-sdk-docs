---
title: Code128
---

`Code128` Class supports all the public APIs for `Code128` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Code128 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Code128.
const CdSymbology = new CDSymbology()
set CdSymbology.Code128.enable(value: boolean);
get CdSymbology.Code128.enable(): boolean;
```
</CodeBlock>

---

### <u>minimumLength</u>

`minimumLength` is used to set Code128 minimum length. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code128.minimumLength(value: number);
get CdSymbology.Code128.minimumLength(): number;
```
</CodeBlock>
<Admonition type="note">
<p> Input can be any number less than 100.</p>
</Admonition>

---
