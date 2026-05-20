---
title: CDDevice
sidebar_position: 5
---

`CDDevice` class supports all device related features like feedback using vibration or sound.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Setters and Getters:

### <u>vibration</u>


<Admonition type="note">
<p>Only works on supported devices</p>
</Admonition>
<CodeBlock language="js">

```js
// value: boolean - Boolean value to enable or disable vibration.
//Returns void
  set vibration(value: boolean);
  get vibration(): boolean;

```
</CodeBlock>

---

### <u>audio</u>

`audio` enables or disables the beep sound after a successful scan.

<Admonition type="note">
  <p>Only works on supported devices</p>
</Admonition>
<CodeBlock language="js">

```js
// value: boolean - Boolean value to enable or disable beep
// Returns void
set audio(value: boolean): void
get audio(): boolean;

```
</CodeBlock>

---