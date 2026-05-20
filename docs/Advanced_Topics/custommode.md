---
title: Custom Mode
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

# Custom Mode

Custom Mode improves the decoding robustness of certain types of images. Use `shortRange` to enhance decoding speed and robustness when a barcode appears very large when placed near the imaging lens, or small when placed far from the imaging lens. Default setting is `disable`.

:::note
When `shortRange` is enabled, we recommend using 720p resolution.
:::

---


### <u> ShortRange Custom Mode </u>

<CodeBlock language="js">
CDDecoder.customMode = CDCustomMode.shortRange
</CodeBlock>

---

### <u> Disable Custom Mode </u>

<CodeBlock language="js">
CDDecoder.customMode = CDCustomMode.disable
</CodeBlock>
