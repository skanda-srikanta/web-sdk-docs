---
title: DPM
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

# DPM

DPM (Direct Part Marking) is a process of etching or printing barcodes directly onto metal or plastic surfaces usually in an industrial setting. DPM barcodes are mainly represented by the most common
2D barcodes, such as QR Code and Data Matrix, so it will be necessary to enable these symbologies in the SDK. Aside from barcodes etched onto metal or plastic surfaces, our DPM algorithm can decode barcodes printed
on paper label as well.

The decoder has modes that can be enabled to enhance the performance of decoding a particular DPM mode. These modes can only be enabled one at a time. Additionally, these DPM settings are limited to the following image size requirements: Width x Height <= 1280x1024 = 1,310,720 pixels and Width <= 1280 pixels. If your image is larger, then you will need to crop it first before passing it to the decoder with one of the DPM modes enabled. 

---  


### <u> Dark on Light </u>
   ![Alt text](tutorial_images/DPM(DotPeenDarkOnLight).jpg)

`dotpeenDarkOnLight` mode is the most robust method for reading Dark on Light dot peen images. 

<CodeBlock language="js">
CDPerformanceFeatures.DPMMode = CortexDecoder.CDDPM.DOTPEEN_DARK_ON_LIGHT;
</CodeBlock>

---

### <u> Light on Dark </u>

![Alt text](tutorial_images/DPM(DotPeenLightOnDark).jpg)

`dotpeenLightOnDark` mode is the most robust method for reading Light on Dark dot peen images.

<CodeBlock language="js">
CDPerformanceFeatures.DPMMode = CortexDecoder.CDDPM.DOTPEEN_LIGHT_ON_DARK;
</CodeBlock>

---

### <u> LaserChemEtch </u>

  ![Alt text](tutorial_images/DPM(Laser_Chem_Etch).png)

`laserChemEtch` mode is the most robust method for reading laser/chem etch marks.

<CodeBlock language="js">
CDPerformanceFeatures.DPMMode = CDDPM.DOTPEEN_LASER_CHEM_ETCH;
</CodeBlock>

---

### <u> DotpeenAndEtch </u>


`dotpeenAndEtch` enables reading for any DPM. The decoding robustness is similar to one of the
three methods Dark on Light, Light on Dark and Laser Chem Etch, but it can be slower as the same setting can decode dot
peen without specifying polarity and laser/chem etch DPM.

<CodeBlock language="js">
CDPerformanceFeatures.DPMMode = CDDPM.DOTPEEN_DOTPEEN_AND_ETCH;
</CodeBlock>

---

### <u> Disable DPM </u>

<CodeBlock language="js">
CDPerformanceFeatures.DPMMode = CDDPM.DOTPEEN_DISABLE;
</CodeBlock>

---

