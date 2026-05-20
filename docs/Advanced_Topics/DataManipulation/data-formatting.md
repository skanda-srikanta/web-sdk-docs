---
title: Data Formatting
sidebar_position: 2
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';



Allows to manipulate the decoded data by:

<b> Adding to, deleting from or reorganizing the decode data.</b>

 - Any part of decoded data(in any order) can be an output string.
 - User defined text(ASCII value 0-255) can be inserted at any location of the output string ,such as prefix and suffix.
 - Decode information item such as barcode name, decode time, data length, symbol quality. 

<b>Changing the decoded data with user defined format. </b>

 - Hex format
 - Uppercase format
 - Lowercase format

---

### <u> How to use Data Formatting </u>


<CodeBlock language="js">

```js
//Config string to add Prefix '<P>' and Suffix '<S>'
let format_string = "000000000000'<P>'!,,'<S>'"
//Enable Data Formatting for above config string
CDPerformanceFeatures.setDataFormatting(true, "format_string")
```
</CodeBlock>

--- 

### <u> How to Disable Data Formatting </u>

<CodeBlock language="js">
CDPerformanceFeatures.setDataFormatting(false, "")
</CodeBlock>
