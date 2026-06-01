---
title: CDDevice
---

> Generated from `dist/src/web/CDDevice.d.ts` when `npm run docs` is executed at the SDK root.

Control browser-side feedback that can be triggered after successful decodes.

- `description`: This singleton manages optional audio and vibration feedback for supported browser environments.

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

Enable or disable audible feedback for successful decodes in supported browsers.

- `remarks`: Browsers may require a prior user interaction before the shared AudioContext can resume playback.

### audio

```ts
get audio(): boolean
```

Return whether audible feedback is currently enabled.

### audioContext

```ts
get audioContext(): AudioContext
```

Return the shared browser AudioContext used for decode feedback.

### vibration

```ts
set vibration(value: boolean): void
```

Enable or disable vibration feedback for successful decodes on supported mobile browsers.

- `remarks`: Desktop browsers and iOS devices may not expose vibration support.

### vibration

```ts
get vibration(): boolean
```

Return whether vibration feedback is currently enabled.
