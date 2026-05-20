---
title: Preprocess Type
sidebar_position: 5
---

Preprocess type provides a way to enable a pre-processing method to improve video buffer for decoding. This setting enhances the image before it is used for decoding. `PreProcDeblur1dMethod1` can help to decode
blurry images of 1D symbology types such as Code 128, Code 39, Interleaved 2 of 5, UPC-A, UPC-E, EAN-13, EAN-8, Codabar and Code 93. This mode was designed for decoding images from a
mobile phone when the camera digital zoom is enabled.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

<p>&nbsp;</p>

 ### <u> deblur_1d_method_1 Preprocess-type </u>

<CodeBlock language="js">
CDDecoder.preprocessType = CDPreprocessorType.deblur1dMethod1
</CodeBlock>


---

 ### <u> Disable Preprocess-type </u> 

<CodeBlock language="js">
CDDecoder.preprocessType = CDPreprocessorType.disable
</CodeBlock>



