---
id: getting-started
title: Getting Started
---

Wrap all components, which should be able to manage notifications, in a [SnackProvider](/api-reference/SnackProvider.md):

```jsx
import { SnackProvider } from "snackstack";

ReactDOM.render(
  <SnackProvider>
    <App />
  </SnackProvider>,
  document.getElementById("root")
);
```

:::important
If you're using Material-UI's [ThemeProvider](https://material-ui.com/styles/api/#themeprovider.md) make sure that you place the [SnackProvider](/api-reference/SnackProvider.md) inside of it.
:::

In a component beneath the [SnackProvider](/api-reference/SnackProvider.md) you can then either use the [useSnacks](/api-reference/useSnacks.md) hook or the [withSnacks](/api-reference/withSnacks.md) HOC (Higher-Order Component) to manage the notifications.
