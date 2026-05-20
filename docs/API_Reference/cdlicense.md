---
title: CDLicense
sidebar_position: 2
---

`CDLicense` class is intended to support all license related features.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Methods:

### <u>activateLicense</u>

`activateLicense` activates CortexDecoder license.

<Admonition type="note">
<p>
`activateLicense` set the EDK license key to the decoder to activate the license
</p>
</Admonition>
<CodeBlock language="js">

```js
//license_string: string - Unique EDK license string
// qrlic: boolean (optional)
// Returns Promise<undefined | LicenseResult> - CDLicenseResult
    activateLicense(license_string: string, qrlic?: boolean): Promise<LicenseResult | undefined>;
```
</CodeBlock>

---


### <u>getLicensedSymbologies</u>

`getLicensedSymbologies` returns all the licensed symbologies.

<CodeBlock language="js">

```js
// Returns Promise<string[]> -  an array of string of all licensed symbologies
    getLicensedSymbologies(): Promise<string[]>;
```
</CodeBlock>


---

### <u>getLicensedExtendedSymbologies</u>

`getLicensedExtendedSymbologies` returns all the licensed extended symbologies.

<CodeBlock language="js">

```js
// Returns Promise<string[]> -  an array of string of all licensed extended symbologies
    getLicensedExtendedSymbologies(): Promise<string[]>;
```
</CodeBlock>


---

### <u>getLicensedPerformanceFeatures</u>

`getLicensedPerformanceFeatures` returns all the licensed performance features.

<CodeBlock language="js">

```js
// Returns Promise<CDPerformanceType[]> - an array of CDPerformanceType.
    getLicensedPerformanceFeatures(): Promise<CDPerformanceType[]>;
```
</CodeBlock>

---

### <u>checkLicense</u>

`checkLicense` is used to check if the license is activated. Handle is 1 only when the license is successfully activated.

<CodeBlock language="js">

```js
// Returns license_status
checkLicense(): license_status
```
</CodeBlock>

## Enums
### <u>license_status</u> 
*   ACTIVATED = "ACTIVATED",
*   VALID = "VALID",
*   EXPIRED = "EXPIRED",
*   INVALID = "INVALID",
*   NOT_FOUND = "NOT_FOUND",
*   MISMATCH = "MISMATCH",
*   COUNT_EXCEEDED = "COUNT_EXCEEDED",
*   NO_NETWORK = "NO_NETWORK",
*   SERVER = "SERVER"



