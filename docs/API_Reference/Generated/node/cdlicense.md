---
title: CDLicense
---

> Generated from `dist/node/CDLicense.d.ts` when `npm run docs` is executed at the SDK root.

- `description`: This class contains APIs for activation of the license for the decoder

## Constructors

### constructor

```ts
constructor(): void
```


## Methods

### activateLicense

```ts
activateLicense(license_string: string, qrlic?: boolean): Promise<LicenseResult | undefined>
```

- `description`: This API is used to set the EDK license key to the decoder to activate the license

### getLicensedSymbologies

```ts
getLicensedSymbologies(): Promise<string[]>
```

- `description`: Returns a list of licensed symbologies

### getLicensedExtendedSymbologies

```ts
getLicensedExtendedSymbologies(): Promise<string[]>
```

- `description`: Returns a list of licensed extended symbologies

### getLicensedPerformanceFeatures

```ts
getLicensedPerformanceFeatures(): Promise<CDPerformanceType[]>
```

- `description`: Returns a list of licensed performance features

### checkLicense

```ts
checkLicense(): license_status
```

This method is used to check if the license is activated. Handle is 1 only when the license is successfully activated
