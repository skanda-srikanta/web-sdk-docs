---
title: GS1Databar
---

`GS1Databar` Class supports all the public APIs for `GS1Databar` Symbology.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>enable</u>

`enable` is used to enable or disable GS1Databar symbology.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable GS1Databar.
const CdSymbology = new CDSymbology()
set CdSymbology.GS1Databar.enable(value: boolean);
get CdSymbology.GS1Databar.enable(): boolean;
```
</CodeBlock>

---

### <u>omniTruncated</u>

`omniTruncated` is used to enable or disable OmniTruncated. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.GS1Databar.omniTruncated(value: boolean);
get CdSymbology.GS1Databar.omniTruncated(): boolean;
```
</CodeBlock>

---

### <u>limited</u>

`limited` is used to enable or disable Limited. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.GS1Databar.limited(value: boolean);
get CdSymbology.GS1Databar.limited(): boolean;
```
</CodeBlock>

---

### <u>stacked</u>

`stacked` is used to enable or disable Stacked. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.GS1Databar.stacked(value: boolean);
get CdSymbology.GS1Databar.stacked(): boolean;
```
</CodeBlock>

---

### <u>expanded</u>

`expanded` is used to enable or disable Expanded for GS1Databar. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.GS1Databar.expanded(value: boolean);
get CdSymbology.GS1Databar.expanded(): boolean;
```
</CodeBlock>

---

### <u>expandedStacked</u>

`expandedStacked` is used to enable or disable ExpandedStacked. 

<CodeBlock language="js">

```js
const CdSymbology = new CDSymbology()
set CdSymbology.GS1Databar.expandedStacked(value: boolean);
get CdSymbology.GS1Databar.expandedStacked(): boolean;
```
</CodeBlock>

---
