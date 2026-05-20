---
title: CDDevice
---

> Generated from `dist/src/web/CDDevice.d.ts` when `npm run docs` is executed at the SDK root.

- `class`
- `description`: This class is used to enable or disable beep and vibration of the device on decode

## Constructors

### constructor

```ts
constructor(): void
```


## Accessors

### audio

```ts
set audio(value: boolean): void
```

This API only works in browser JavaScript and not on NodeJS. Plays a beep for every successful decode when enabled

### audio

```ts
get audio(): boolean
```

### audioContext

```ts
get audioContext(): AudioContext
```

### vibration

```ts
set vibration(value: boolean): void
```

- `description`: This API only works in browser JavaScript and not on NodeJS. Vibrates for every successful decode when enabled

### vibration

```ts
get vibration(): boolean
```
