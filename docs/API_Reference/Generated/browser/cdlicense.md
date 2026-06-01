---
title: CDLicense
---

> Generated from `dist/src/web/CDLicense.d.ts` when `npm run docs` is executed at the SDK root.

Manage license activation and inspect the browser decoder's licensed capabilities.

- `description`: This singleton activates the decoder license, applies the licensed symbology and feature set, and exposes the resulting license state.

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

Activate the browser decoder with an EDK license key.

- `remarks`: Successful activation also updates the licensed symbology set, licensed performance features, and any data-collection policy carried by the license.

### getLicensedSymbologies

```ts
getLicensedSymbologies(): Promise<string[]>
```

Return the standard symbologies enabled by the active license.

### getLicensedExtendedSymbologies

```ts
getLicensedExtendedSymbologies(): Promise<string[]>
```

Return the extended symbologies enabled by the active license.

### getLicensedPerformanceFeatures

```ts
getLicensedPerformanceFeatures(): Promise<CDPerformanceType[]>
```

Return the performance features enabled by the active license.

### checkLicense

```ts
checkLicense(): license_status
```

Return the current decoder license status.
