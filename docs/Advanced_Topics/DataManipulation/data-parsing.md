---
title: Data Parsing
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';


Validates and parses the decoded data to ensure it complies with industry standards and application requirements.

- DL-ID Parser Validation
- Match String Validation
- GS1 Standard Validation
- FDA UDI Standard Validation (HIBCC-UDI, GS1-UDI, ICCBBA-UDI)
- ISO Standard Validation (ISO/IEC 15434 and 15418)
- DoD UID Standard Validation


For DL-ID Parser, the Windows based CortexTools application, downloadable from [codecorp.com](https://www.codecorp.com/), can guide the user to configure the proper fields for output. To create configuration files for other standards, please contact Code technical support.


---


### <u> How to use Data Parsing </u>

<CodeBlock language="js">

```js
//dlParsing
CDPerformanceFeatures.setDataParsing(CDDataParsing.DL_PARSING,"00000308130328130331091845584578130648320668320678320681010");
//strMatchReplace
CDPerformanceFeatures.setDataParsing(CDDataParsing.STR_MATCH_REPLACE,"00+_aI+_aI!,,|12^0OK:^B019\\x01@");
//gs1Parsing
CDPerformanceFeatures.setDataParsing(CDDataParsing.GS1_PARSNG,"00+_aI+_aI|;^3^C#/0D016\\x01@");
//isoParsing
CDPerformanceFeatures.setDataParsing(CDDataParsing.ISO_PARSING,"00+_aI+_aI00C\\x01@");
//udiParsing
CDPerformanceFeatures.setDataParsing(CDDataParsing.UDI_PARSING,"00+_aI+_aI00C\\x01@");
//get current DataParsing
CDPerformanceFeatures.shared.getDataParsing();
```
CDPerformanceFeatures.setDataParsing(CDDataParsing, "config_string")
</CodeBlock>

---

### <u> How to Disable Data Parsing </u>


<CodeBlock language="js">
CDPerformanceFeatures.setDataParsing(CDDataParsing.DISABLE, "")
</CodeBlock>
