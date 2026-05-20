---
title: CDPerformanceFeatures
sidebar_position: 7

---

`CDPerformanceFeatures` class is intended to support setting different performance features such as Low Contrast, Data Parsing, Data Formatting, DPM.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Methods:

### <u>setDataParsing</u>

`setDataParsing` is used to select a Data Parsing option. By default, Data Parsing is disabled.

<CodeBlock language="js">

```js
// parsing: CDDataParsing - Value of enum CDDataParsing
//configString: string - configuration string.
// Returns Promise<void>
    setDataParsing(parsing: CDDataParsing, configString: string): Promise<void>;
```
</CodeBlock>

---

### <u>getDataParsing</u>

`getDataParsing` returns the Data Parsing type that is currently being used. 

<CodeBlock language="js">

```js
// Returns Promise<CDDataParsing> - Promise resolving with a value of CDDataParsing enum.
    getDataParsing(): Promise<CDDataParsing>;
```
</CodeBlock>

---

### <u>getConfigStringForDataParsing</u>

`getConfigStringForDataParsing` retrieves the configuration string used for CDDataParsing which was passed in the setDataParsing method.

<CodeBlock language="js">

```js
// Returns Promise<string> - the string that is set for data parsing.
    getConfigStringForDataParsing(): Promise<string>;
```
</CodeBlock>

---

### <u>setDataFormatting</u>

`setDataFormatting` provides a way to enable and set a data formatting string for CortexDecoder.

<CodeBlock language="js">

```js
//enable: boolean - Boolean value to enable or disable data formatting
//formatString: string - Format string for data formatting
// Returns Promise<void>
    setDataFormatting(enable: boolean, formatString: string): Promise<void>;
```
</CodeBlock>

---

### <u>getDataFormatting</u>

`getDataFormatting` returns a boolean value indicating whether data formatting is enabled or disabled.

<CodeBlock language="js">

```js
// Returns Promise<boolean>
    getDataFormatting(): Promise<boolean>;
```
</CodeBlock>

---

### <u>getConfigStringForDataFormatting</u>

`getConfigStringForDataFormatting` retrieves the configuration string that is currently or was last used for Data Formatting.

<CodeBlock language="js">

```js
// Returns Promise<string>
    getConfigStringForDataFormatting(): Promise<string>;
```
</CodeBlock>

---

## Setters and Getters

### <u>stringFromPerformanceType</u>

`stringFromPerformanceType` provides string representation of CDPerformanceType being passed.

<CodeBlock language="js">

```js
// Returns CDPerformanceType of type enum
  get stringFromPerformanceType(): CDPerformanceType;
```
</CodeBlock>

---

### <u>lowContrast</u>

`lowContrast` enables or disables low contrast images of common 1D barcodes: Code128, Code39, UPCA, UPCE, EAN8, EAN13, Codabar, Code93, Interleaved2Of5.
When enabled, lowContrast can also decode barcodes which are printed on dark background with barcode data being in light color(inverse images).

<CodeBlock language="js">

```js
// lowContrast: boolean - Boolean value to enable or disable lowContrast decoding.
//Returns void
  set lowContrast(lowContrast: boolean);
  get lowContrast(): boolean;

```
</CodeBlock>

---

### <u>DPMMode</u>

`DPMMode` enables the CDDPM type. Only 1 type can be enabled at a time, so when switching between different types CortexDecoder will disable the earlier one. Defaults to disable.

<CodeBlock language="js">

```js
// dpm: CDDPM - Value of type CDDEPM enum
// Returns void
  set DPMMode(dpm: CDDPM);
  get DPMMode(): CDDPM;

```
</CodeBlock>

---

### <u>verification</u>

`verification` is used to set the verification type to the CortexDecoder.

<CodeBlock language="js">

```js
// type: CDVerifier - Value of type CDVerifier enum
// Returns void
    set verification(type: CDVerifier);
    get verification(): CDVerifier;

```
</CodeBlock>

## Enums

 ### <u>CDPerformanceType</u>
   *  UNDEFINED = 0
   *  LOW_CONTRAST = 1
   *  MULTI_CODE = 2
   *  DPM = 3
   *  DL_PARSING = 4
   *  GS1_PARSING = 5
   *  UDI_PARSING = 6
   *  VERIFIER = 7


 ### <u>CDDataParsing</u>
   * DISABLE = 0
   * DL_PARSING = 1
   * STR_MATCH_REPLACE = 4
   * GS1_PARSNG = 5
   * UDI_PARSING = 6
   * ISO_PARSING = 7
   

 ### <u>CDDPM</u>
   *  DISABLE = 0
   *  DOTPEEN_DARK_ON_LIGHT = 1
   *  DOTPEEN_LIGHT_ON_DARK = 2
   *  LASER_CHEM_ETCH = 3
   *  DOTPEEN_AND_ETCH = 4


 ### <u>CDVerifier</u>
   *  DISABLE = 0
   *  ISO15415 = 1
   *  AIMDPM = 2