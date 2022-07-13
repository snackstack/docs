---
sidebar_position: 1
title: Material UI
---

:::info
This adapter requires `@mui/material` v5.
:::

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

Make sure you have setup the [SnackProvider](/docs/api-reference/components/SnackProvider.md) component as shown in the [Get started](/docs/get-started.md#setup) section of the documentation.

Then you just need to import the `MuiSnack` component and pass it as the value for the `Component` property on the [SnackStack](/docs/api-reference/components/SnackStack.md) component.

```diff
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackProvider, SnackStack, SnackManager } from '@snackstack/core';
+ import { MuiSnack } from '@snackstack/mui';

const snackManager = new SnackManager({ maxSnacks: 7 });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <SnackProvider manager={snackManager}>
      <App />

+     <SnackStack Component={MuiSnack} />
    </SnackProvider>
  </React.StrictMode>
```
