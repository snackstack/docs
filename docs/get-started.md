---
sidebar_position: 1
title: Get started
slug: /
---

## Installation

To install the latest stable version with [npm](https://www.npmjs.com/get-npm), run the following command:

```
npm install @snackstack/core
```

Or if you're using [yarn](https://classic.yarnpkg.com/docs/install/):

```
yarn add @snackstack/core
```

## Setup

Once you have installed the package, import the [SnackProvider](/docs/api-reference/components/SnackProvider.md) and [SnackStack](/docs/api-reference/components/SnackStack.md) component, as well as the [SnackManager](/docs/api-reference/SnackManager.md) class.

Instantiate a new instance of the [SnackManager](/docs/api-reference/SnackManager.md) class and optionally pass an options object of type `SnackManagerOptions` to its constructor.

Now that the manager is setup, wrap the [SnackProvider](/docs/api-reference/components/SnackProvider.md) around the parts of your application that should be able to manage and display notifications. The newly created [SnackManager](/docs/api-reference/SnackManager.md) instance needs to be passed as value to the `manager` property on the provider.

Place the [SnackStack](/docs/api-reference/components/SnackStack.md) component somewhere below the [SnackProvider](/docs/api-reference/components/SnackProvider.md) and specify a component used to render your notifications.

```diff
import React from 'react';
import ReactDOM from 'react-dom/client';
+ import { SnackProvider, SnackStack, SnackManager, SnackProps } from '@snackstack/core';

+ const snackManager = new SnackManager({ maxSnacks: 7 });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
+   <SnackProvider manager={snackManager}>
      <App />

+     <SnackStack Component={MyNotification} />
+   </SnackProvider>
  </React.StrictMode>
);

+ const MyNotification = React.forwardRef<unknown, SnackProps>(({ message, offset }, ref) => {
+   return <div ref={ref} style={{ top: offset }}>{message}</div>;
+ });
```

:::warning
If you are using a custom component, make sure you are [forwarding a ref](https://reactjs.org/docs/forwarding-refs.html) to a native element inside of it.
:::

And that's it! Continue reading to learn more about managing notifications.
