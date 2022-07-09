---
sidebar_position: 2
title: Displaying notifications
---

`@snackstack/core` itself does not come with a way for displaying notifications.

It only deals with managing the notifications - the display is up to the user or a pre-built adapter.

## Using an adapter

In order to make using snackstack as easy as possible, we have built some adapters for popular component libraries.

[Checkout our pre-built adapters for popular component libraries](/docs/adapters/mui)

## Using a custom component

If the adapters do not support your use-case, you can always build your own notification component.

You can create a new component and use the [useActiveSnacks](/docs/api-reference/hooks/useActiveSnacks.md) hook to get access to all notifications that should be rendered.

Once you have all of the active notifications, you can render your custom notification component for each of them.

```tsx
import { useActiveSnacks } from "@snackstack/core";

function MyNotificationContainer() {
  const activeSnacks = useActiveSnacks();

  return (
    <ul>
      {activeSnacks.map((snack) => (
        <li key={snack.id}>{snack.message}</li>
      ))}
    </ul>
  );
}
```

:::warning
The above code would not be correct, since `snack.message` can also be a function that takes the current [Snack](/docs/api-reference/types/Snack.md) as an argument.

In order to make it work, we need to _resolve_ the actual message by invoking the method.

```tsx
<ul>
  {activeSnacks.map((snack) => {
    let message = snack.message;

    if (typeof message === "function") {
      message = message(snack);
    }

    return <li key={snack.id}>{message}</li>;
  })}
</ul>
```

The same is true for `snack.action`.
:::

### Fixed component height

For scenarios beside using `li`, you are most likely going to need to calculate some sort of offset to display notifications on top of each other.

If you know the height of your component and this height does not change, you could simply use the index to compute an offset.

```tsx
const spacing = 5;
const componentHeight = 80;

<ul>
  {activeSnacks.map((snack, index) => {
    const heightOffset = index * (componentHeight + spacing);

    return (
      <li key={snack.id} style={{ bottom: heightOffset }}>
        ...
      </li>
    );
  })}
</ul>;
```

### Dynamic component height

If you do not know the definite height of your component or your component might change in height, you can wrap your component in a [SnackItem](/docs/api-reference/components/SnackItem.md) component.

```diff
import { useActiveSnacks } from "@snackstack/core";
+ import { SnackItem } from "@snackstack/core";

function MyNotificationContainer() {
  const activeSnacks = useActiveSnacks();
  const spacing = 5;

  return (
    <>
      {activeSnacks.map((snack, index) => {
        const heightOffset = index * (snack.height + spacing);

        return (
+         <SnackItem key={snack.id} snackId={snack.id}>
            <div key={snack.id} style={{ bottom: heightOffset }}>
              ...
            </div>
+         </SnackItem>
        );
      })}
    </>
  );
}
```

This component will attach a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to your custom component and calculate its size using a [ResizeObserver](https://developer.mozilla.org/docs/Web/API/ResizeObserver). This size is then stored in the `snack.height` property, so you can use it for offset calculations.

:::warning
There are some constraints on the type of children the [SnackItem](/docs/api-reference/components/SnackItem.md) component can accept.

[Learn more about these constraints](/docs/api-reference/components/SnackItem.md#constraints-on-children)
:::
