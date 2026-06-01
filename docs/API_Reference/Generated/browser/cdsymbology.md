---
title: CDSymbology
---

> Generated from `dist/src/web/CDSymbology.d.ts` when `npm run docs` is executed at the SDK root.

Access shared symbology output options and per-symbology configuration objects.

- `description`: This singleton exposes the top-level browser symbology configuration surface used to enable or tune individual barcode families.

## Constructors

### constructor

```ts
constructor(): void
```


## Accessors

### sendAIMSymbID

```ts
set sendAIMSymbID(enable: boolean): void
```

Enable or disable inclusion of AIM symbology identifiers in decode results.

### sendAIMSymbID

```ts
get sendAIMSymbID(): boolean
```

Return whether AIM symbology identifiers are enabled in decode results.

### QR

```ts
get QR(): QR
```

Return the QR symbology configuration object.

### DataMatrix

```ts
get DataMatrix(): DataMatrix
```

Return the Data Matrix symbology configuration object.

### Aztec

```ts
get Aztec(): Aztec
```

Return the Aztec symbology configuration object.

### MaxiCode

```ts
get MaxiCode(): MaxiCode
```

Return the MaxiCode symbology configuration object.

### DotCode

```ts
get DotCode(): DotCode
```

Return the DotCode symbology configuration object.

### GridMatrix

```ts
get GridMatrix(): GridMatrix
```

Return the Grid Matrix symbology configuration object.

### HanXinCode

```ts
get HanXinCode(): HanXinCode
```

Return the Han Xin Code symbology configuration object.

### HongKong2of5

```ts
get HongKong2of5(): HongKong2of5
```

Return the Hong Kong 2 of 5 symbology configuration object.

### IATA2of5

```ts
get IATA2of5(): IATA2of5
```

Return the IATA 2 of 5 symbology configuration object.

### Interleaved2of5

```ts
get Interleaved2of5(): Interleaved2of5
```

Return the Interleaved 2 of 5 symbology configuration object.

### Matrix2of5

```ts
get Matrix2of5(): Matrix2of5
```

Return the Matrix 2 of 5 symbology configuration object.

### Straight2of5

```ts
get Straight2of5(): Straight2of5
```

Return the Straight 2 of 5 symbology configuration object.

### NEC2of5

```ts
get NEC2of5(): NEC2of5
```

Return the NEC 2 of 5 symbology configuration object.

### Codabar

```ts
get Codabar(): Codabar
```

Return the Codabar symbology configuration object.

### Code11

```ts
get Code11(): Code11
```

Return the Code 11 symbology configuration object.

### Code32

```ts
get Code32(): Code32
```

Return the Code 32 symbology configuration object.

### Code39

```ts
get Code39(): Code39
```

Return the Code 39 symbology configuration object.

### Code49

```ts
get Code49(): Code49
```

Return the Code 49 symbology configuration object.

### Code93

```ts
get Code93(): Code93
```

Return the Code 93 symbology configuration object.

### Code128

```ts
get Code128(): Code128
```

Return the Code 128 symbology configuration object.

### CompositeCode

```ts
get CompositeCode(): CompositeCode
```

Return the composite-code symbology configuration object.

### CodablockF

```ts
get CodablockF(): CodablockF
```

Return the Codablock F symbology configuration object.

### EAN13

```ts
get EAN13(): EAN13
```

Return the EAN-13 symbology configuration object.

### UPCA

```ts
get UPCA(): UPCA
```

Return the UPC-A symbology configuration object.

### EAN8

```ts
get EAN8(): EAN8
```

Return the EAN-8 symbology configuration object.

### UPCE

```ts
get UPCE(): UPCE
```

Return the UPC-E symbology configuration object.

### Trioptic

```ts
get Trioptic(): Trioptic
```

Return the Trioptic symbology configuration object.

### Telepen

```ts
get Telepen(): Telepen
```

Return the Telepen symbology configuration object.

### Plessey

```ts
get Plessey(): Plessey
```

Return the Plessey symbology configuration object.

### PDF417

```ts
get PDF417(): PDF417
```

Return the PDF417 symbology configuration object.

### MSIPlessey

```ts
get MSIPlessey(): MSIPlessey
```

Return the MSI Plessey symbology configuration object.

### GS1Databar

```ts
get GS1Databar(): GS1Databar
```

Return the GS1 DataBar symbology configuration object.

### AustraliaPost

```ts
get AustraliaPost(): AustraliaPost
```

Return the Australia Post symbology configuration object.

### CanadaPost

```ts
get CanadaPost(): CanadaPost
```

Return the Canada Post symbology configuration object.

### DutchPost

```ts
get DutchPost(): DutchPost
```

Return the Dutch Post symbology configuration object.

### JapanPost

```ts
get JapanPost(): JapanPost
```

Return the Japan Post symbology configuration object.

### KoreaPost

```ts
get KoreaPost(): KoreaPost
```

Return the Korea Post symbology configuration object.

### RoyalMail

```ts
get RoyalMail(): RoyalMail
```

Return the Royal Mail symbology configuration object.

### UPU

```ts
get UPU(): UPU
```

Return the UPU symbology configuration object.

### USPSIntelligent

```ts
get USPSIntelligent(): USPSIntelligent
```

Return the USPS Intelligent Mail symbology configuration object.

### USPSPlanet

```ts
get USPSPlanet(): USPSPlanet
```

Return the USPS Planet symbology configuration object.

### USPSPostnet

```ts
get USPSPostnet(): USPSPostnet
```

Return the USPS POSTNET symbology configuration object.
