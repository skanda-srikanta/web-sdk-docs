---
title: Data Manipulation
---

import DocCardList from '@theme/DocCardList';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

For barcode scanning applications, sometimes it is necessary to customize or validate the decoded data before the data is transmitted to the host to satisfy the application requirements. This process is called data manipulation for decoded barcode data and can be categorized as follows: Data Formatting and Data Parsing(Data Validation).


Both Data Formatting and Data Parsing can change or format the decoding output based on Formatting and Validation options. Each Format Output option requires a corresponding format output configuration string. The Data Parsing features are mutually exclusive operations. If Data Formatting and one of Data Parsing features are enabled then the Data Parsing feature is performed first with decoded data and then the Data Formatting feature is performed on the output data from Data Parsing feature.



<DocCardList />