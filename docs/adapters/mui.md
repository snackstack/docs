---
sidebar_position: 1
title: Material UI
---

:::info
This adapter requires `@mui/material` v5.
:::

<!-- todo: interactive examples -->

## Installation

To install `@mui/material`, follow their [installation guide](https://mui.com/material-ui/getting-started/installation/).

To install the latest stable version with [npm](https://www.npmjs.com/get-npm), run the following command:

```
npm install @snackstack/core @snackstack/mui
```

Or if you're using [yarn](https://classic.yarnpkg.com/docs/install/):

```
yarn add @snackstack/core @snackstack/mui
```

## Setup

Make sure you have setup the [SnackProvider](/docs/api-reference/components/SnackProvider.md) component as shown in the [Get started](/docs/get-started.md) section.

Now you just need to render the `MuiSnackbars` component below the [SnackProvider](/docs/api-reference/components/SnackProvider.md) component.

```diff
import React from "react";
import ReactDOM from "react-dom/client";
import { SnackProvider, SnackManager } from "@snackstack/core";
+ import { MuiSnackbars } from "@snackstack/mui";

const snackManager = new SnackManager({ maxSnacks: 7 });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SnackProvider manager={snackManager}>
      <App />

+     <MuiSnackbars />
    </SnackProvider>
  </React.StrictMode>
);
```
