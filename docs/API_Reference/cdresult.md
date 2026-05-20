---
title: CDResult
sidebar_position: 6

---

`CDResult` class provides details about barcode data, symbology, barcode coordinate with respect to camera preview, decode time, etc. It also has the status field which informs of either a successful barcode decode or error code for the each frame it received/processed using the following possible values: success, noDecode, noActiveLicense, decodingDisabled, noUniqueDecode, etc.

`CDResult` also contains barcode verification and codewords information when these particular features are enabled.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

## Properties:

---

### <u>barcodeData</u>

`barcodeData` defines the decoded barcode data converted to String using UTF8 encoding.

<CodeBlock language="js">
    barcodeData: string;
</CodeBlock>

---

### <u>symbology</u>

`symbology` defines the symbology type of decoded barcode in String format.

<CodeBlock language="js">
    symbology: string;
</CodeBlock>


---

### <u>status</u>

 `status` defines the status of the frame or image whether it’s decoded/failed or any other error.

<CodeBlock language="js">
    status: CDDecodeStatus;
</CodeBlock>


---

### <u>barcodeCoordinates</u>

`barcodeCoordinates` defines the barcode Coordinates of the decoded barcode.

<CodeBlock language="js">
    barcodeCoordinates: CDRect;
</CodeBlock>


---

### <u>codewords</u>

`codewords` defines the CDCodewords object that contains fields providing details of barcode error correction.

<CodeBlock language="js">
    codewords: CDCodewords;
</CodeBlock>


---

### <u>verification</u>

`verification` defines the CDVerification object that contains fields providing details of barcode verification. 

<CodeBlock language="js">
    verification: CDVerification;
</CodeBlock>


---

### <u>LicenseResult</u>

`LicenseResult` defines the CDLicenseResult object that contains license activation result. This field is only used when activating the license using QR Configuration Code. 

<CodeBlock language="js">
    licenseResult: license_status;
</CodeBlock>


---

### <u>decodeTime</u>

`decodeTime` defines the decode time for each barcode. When decoding more than 1 barcode, decode time for successive barcodes includes decode time for all previously decoded barcodes as well.

<CodeBlock language="js">
    decodeTime: number;
</CodeBlock>


---

### <u>totalDecodeTime</u>

`totalDecodeTime` represents total time spent decoding all barcodes. When decoding a barcode with exact match feature disabled, total decode time includes time spent looking for additional barcodes after the last decoded barcode. 

<CodeBlock language="js">
    totalDecodeTime: number;
</CodeBlock>

---

### <u>CDDecodeStatus</u>

`CDDecodeStatus` represents the constants indicating status of barcode decode attempt. 

<CodeBlock language="js">
// Not implemented
</CodeBlock>


##  Enums

 ### <u>CDDecodeStatus</u>
  *  SUCCESS,
  *  NO_DECODE,
  *  NO_ACTIVE_LICENSE,
  *  DECODING_DISABLED,
  *  NO_UNIQUE_DECODE,
  *  DECODED_QR_CONFIG_CODE,
  *  FAILED_QR_CONFIG_CODE,
  *  INTERNAL,
  *  NO_SYMBOLOGY_ENABLED,
  *  MULTI_CODE_NOT_SUPPORTED,
  *  LICENSE_EXPIRED,
  *  UN_LICENSED_PROPERTY,
  *  USB_KEY_NOT_FOUND,
  *  VERIFIER_NOT_SUPPORTED,
  *  LICENSE_COUNT_EXCEEDED,
  *  ROI_TOO_BIG_FOR_PRE_PROC_ZOOM_ROI,
  *  TIMED_OUT
