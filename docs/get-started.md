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

Once you have installed snackstack, import the [SnackProvider](/docs/api-reference/components/SnackProvider.md) component and the [SnackManager](/docs/api-reference/types/SnackManager.md) class.

Instantiate a new instance of the [SnackManager](/docs/api-reference/types/SnackManager.md) class and optionally pass an options object of type [SnackManagerOptions](/docs/api-reference/types/SnackManagerOptions.md) to its constructor.

Now that the manager is setup, wrap the [SnackProvider](/docs/api-reference/components/SnackProvider.md) around the parts of your application that should be able to manage and display notifications. The newly created [SnackManager](/docs/api-reference/types/SnackManager.md) instance needs to be passed as the value for the `manager` property on the provider.

```diff
import React from "react";
import ReactDOM from "react-dom/client";
+ import { SnackProvider, SnackManager } from "@snackstack/core";

+ const snackManager = new SnackManager({ maxSnacks: 7 });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
+   <SnackProvider manager={snackManager}>
      <App />
+   </SnackProvider>
  </React.StrictMode>
);
```

And that's it! Continue reading to learn more about managing notifications.
