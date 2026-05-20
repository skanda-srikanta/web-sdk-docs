---
title: CompositeCode 
---

`CompositeCode` Class supports all the public APIs for `CompositeCode` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable CompositeCode symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable CompositeCode.
const CdSymbology = new CDSymbology()
set CdSymbology.CompositeCode.enable(value: boolean);
get CdSymbology.CompositeCode.enable(): boolean;
```
</CodeBlock>

---

### <u>compositeCodeA</u>

`compositeCodeA` is used to enable/disable decoding of 2D component CC-A of GS1 Composite. Defaults to false for iOS and Xamarin.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.CompositeCode.compositeCodeA(value: boolean);
get CdSymbology.CompositeCode.compositeCodeA(): boolean;
```
</CodeBlock>

---

### <u>compositeCodeB</u>

`compositeCodeB` is used to enable/disable decoding of 2D component CC-B of GS1 Composite. Defaults to false for iOS and Xamarin.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.CompositeCode.compositeCodeB(value: boolean);
get CdSymbology.CompositeCode.compositeCodeB(): boolean;
```
</CodeBlock>

---

### <u>compositeCodeC</u>

`compositeCodeC` is used to enable/disable decoding of 2D component CC-C of GS1 Composite. Defaults to false for iOS and Xamarin.

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.CompositeCode.compositeCodeC(value: boolean);
get CdSymbology.CompositeCode.compositeCodeC(): boolean;
```
</CodeBlock>

---

