---
id: notification-management
title: Notification Management
---

:::note
In the following examples we're using the [useSnacks](/api-reference/useSnacks.md) hook, but the same methods are also available using the [withSnacks](/api-reference/withSnacks.md) HOC.
:::

## Enqueueing notifications

New notifications can be enqueued using the `enqueueSnack` function:

```jsx
import { useSnacks } from "snackstack";

function App() {
  const { enqueueSnack } = useSnacks();

  const handleEnqueue = () => {
    enqueueSnack("Hello World!");
  };

  return <button onClick={handleEnqueue}>Enqueue new Snack</button>;
}
```

## Closing a notification

An enqueued notification can be closed using the `closeSnack` function:

```jsx
import { useSnacks } from "snackstack";

const snackId = "example-id";

function App() {
  const { enqueueSnack, closeSnack } = useSnacks();

  const handleEnqueue = () => {
    enqueueSnack({ id: snackId, message: "Hello World!" });
  };

  const handleClose = () => {
    closeSnack(snackId);
  };

  return (
    <>
      <button onClick={handleEnqueue}>Enqueue Snack</button>
      <button onClick={handleClose}>Close Snack</button>
    </>
  );
}
```

## Updating notifications

An enqueued notification can be updated using the `updateSnack` function:

```jsx
import { useSnacks } from "snackstack";

const snackId = "example-id";

function App() {
  const { enqueueSnack, updateSnack } = useSnacks();

  const handleEnqueue = () => {
    enqueueSnack({ id: snackId, message: "Hello World!" });
  };

  const handleUpdate = () => {
    updateSnack(snackId, { message: "Important!" });
  };

  return (
    <>
      <button onClick={handleEnqueue}>Enqueue Snack</button>
      <button onClick={handleUpdate}>Make snack important</button>
    </>
  );
}
```
