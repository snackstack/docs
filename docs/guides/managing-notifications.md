---
sidebar_position: 1
title: Managing notifications
---

Everything regarding notifications is managed through the [SnackManager](/docs/api-reference/SnackManager.md).

You can access this manager in your React components using the [useSnackManager](/docs/api-reference/hooks/useSnackManager.md) hook. Outside of React components you can use the [SnackManager](/docs/api-reference/SnackManager.md) instance you passed to the [SnackProvider](/docs/api-reference/components/SnackProvider.md) directly.

## Enqueuing notifications

You can enqueue new notifications using the `enqueue` method of the [SnackManager](/docs/api-reference/SnackManager.md). The method accepts either a simple message string as argument or an object of type `NewSnack` that allows you to specify more options.

```tsx
import { useSnackManager } from "@snackstack/core";

function App() {
  const manager = useSnackManager();

  manager.enqueue("Simple notification");

  manager.enqueue({
    id: 1,
    message: <div>Some complex message</div>,
    variant: "error",
    persist: true,
    meta: {
      custom: "value",
    },
    action: (snack) => (
      <button onClick={() => alert(snack.meta["custom"])}>Click me</button>
    ),
  });

  // Omitted code for brevity
}
```

Checkout the [API reference of SnackManager](/docs/api-reference/SnackManager.md) to learn more about the possible options.

## Closing notifications

You can close notifications using the `close` method of the [SnackManager](/docs/api-reference/SnackManager.md).

:::info
All this does is set the `status` property on the `Snack` to `closing`. The effect of this is up to the implementation of the display mechanism. Most commonly it would initiate a closing transition.
:::

```tsx
import { useSnackManager } from "@snackstack/core";

function App() {
  const manager = useSnackManager();

  const snackId = 1;

  manager.close(snackId);

  // Omitted code for brevity
}
```

## Removing notifications

You can remove notifications using the `remove` method of the [SnackManager](/docs/api-reference/SnackManager.md).

Normally you would do this after the closing transition, initiated by [closing the notification](#closing-notifications), has finished.

```tsx
import { useSnackManager } from "@snackstack/core";

function App() {
  const manager = useSnackManager();

  const snackId = 1;

  manager.remove(snackId);

  // Omitted code for brevity
}
```

## Updating notifications

You can update notifications using the `update` method of the [SnackManager](/docs/api-reference/SnackManager.md).

```tsx
import { useSnackManager } from "@snackstack/core";

function App() {
  const manager = useSnackManager();

  const snackId = 1;

  manager.update(snackId, { persist: true });

  // Omitted code for brevity
}
```

:::warning
If your message should be reactive, you wouldn't use `update`, rather you would render a React component as the message:

```tsx
manager.enqueue({
  message: <ProgressComponent />,
});
```

:::
