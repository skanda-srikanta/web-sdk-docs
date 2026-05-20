---
title: Barcode Quality Verification
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';


CortexDecoder supports barcode quality verification for Data Matrix and QR Code using either of ISO/IEC 15415 or ISO/IEC TR29158 (AIM-DPM) standards.
Since AIM DPM is a DPM standard and ISO standard can be either paper label or DPM set of images, enabling the DPM module is necessary for the Barcode Quality Verification.


---

### <u> iso15415 Verification</u>

<CodeBlock language="js">
CDPerformanceFeatures.Verification = CDVerifier.ISO15415
</CodeBlock>

---

### <u> aimdpm Verification </u>

<CodeBlock language="js">
CDPerformanceFeatures.Verification = CDVerifier.AIMDPM
</CodeBlock>


---

### <u> Disable Verification Mode </u>

<CodeBlock language="js">
CDPerformanceFeatures.Verification = CDVerifier.DISABLE
</CodeBlock>



