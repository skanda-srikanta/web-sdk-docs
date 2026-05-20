---
title: Code93
---

`Code93` Class supports all the public APIs for `Code93` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';


## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable Code93 symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable Code93.
const CdSymbology = new CDSymbology()
set CdSymbology.Code93.enable(value: boolean);
get CdSymbology.Code93.enable(): boolean;
```
</CodeBlock>

---

### <u>minimumLength</u>

`minimumLength` is used to set Code93 minimum length. (Defaults to 1 for iOS and Xamarin)

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.Code93.minimumLength(value: number);
get CdSymbology.Code93.minimumLength(): number;
```
</CodeBlock>
<Admonition type="note">
<p> Input can be any number less than 100.</p>
</Admonition>

---


