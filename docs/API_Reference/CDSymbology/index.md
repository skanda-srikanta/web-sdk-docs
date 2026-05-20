---
title: CDSymbology
sidebar_position: 4
---

<!-- import DocCardList from '@theme/DocCardList'; -->

`CDSymbology` class is intended to support all symbologies. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';


## Setters and Getters:

### <u>reducedAggressiveness</u>

`reducedAggressiveness` is used to enable or disable improved efficiency of decoding UPC family barcodes by reducing aggressiveness of decoding. Defaults to false.

<CodeBlock language="js">

```js
//Use Boolean value to enable or disable reduced aggressiveness of decoding UPCA. 
set reducedAggressiveness(value: boolean);
new CDSymbology().UPCA.reducedAggressiveness = value: Boolean

get reducedAggressiveness(): boolean;
console.log(new CDSymbology().UPCA.reducedAggressiveness)
```
</CodeBlock>

---

### <u>sendAIMSymbID</u>

`sendAIMSymbID` method provides a way to enable or disable sending AIM ID for all symbologies. Defaults to false.

<CodeBlock language="js">

```js
set sendAIMSymbID(enable: boolean);
new CDSymbology().sendAIMSymbID = value: Boolean

get sendAIMSymbID(): boolean;
console.log(new CDSymbology().sendAIMSymbID)
```
</CodeBlock>

---