---
title: Decoding multiple barcodes
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';


Decoding multiple barcodes sets the number of barcodes to be decoded in each frame along with a Boolean value to decide if CortexDecoder should exactly decode this specified number in each frame. By default, the library allows a maximum of 20 barcodes per frame. The limit increases to 256 if multi-code feature is licensed.

Setting the `decodeExactly` parameter to 'false' signals that CortexDecoder can decode less than the number of barcodes specified in each frame. When setting this parameter to 'true', CortexDecoder will only return data if the number of decoded barcodes matches the value set in `numberOfBarcodes`.

---

### <u> Set decoder to decode exactly 10 barcodes </u>

<CodeBlock language="js">
CDDecoder.setBarcodesToDecode(10, true)
</CodeBlock>

--- 

### <u> Set decoder to decode up to 10 barcodes </u>

<CodeBlock language="js">
CDDecoder.setBarcodesToDecode(10, false)
</CodeBlock>

---
