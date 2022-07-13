---
sidebar_position: 3
title: SnackItem
---

## Constraints on children

Since the `SnackItem` component needs to attach a `ref` to its children, a couple of constraints apply.

### Only a single child is allowed

Since a `ref` can only be attached to a single DOM node, multiple children are not allowed.

❌ Having multiple children is incorrect:

```tsx
<SnackItem>
  <div>My</div>
  <div>Message</div>
</SnackItem>
```

✅ Having a single child is correct:

```tsx
<SnackItem>
  <div>My Message</div>
</SnackItem>
```

### No fragments at the root

Since a fragment is just a container element without any connection to the DOM, the `SnackItem` component can not attach a `ref` to it.

❌ Using a fragment at the root is incorrect:

```tsx
<SnackItem>
  <>My Message</>
</SnackItem>
```

✅ Using a native element at the root is correct:

```tsx
<SnackItem>
  <div>My Message</div>
</SnackItem>
```

### Forwarding Refs to custom components

If you are rendering a custom component below a `SnackItem` you need to make sure the custom component is [forwarding its ref](https://reactjs.org/docs/forwarding-refs.html) to a native DOM node.

❌ A custom component as child that doesn't forward its ref is incorrect:

```tsx
<SnackItem>
  <CustomComponent />
</SnackItem>

function CustomComponent() {
  return <div>My Message</div>;
}
```

✅ A custom component as child that forwards its ref is correct:

```tsx
<SnackItem>
  <CustomComponent />
</SnackItem>

const CustomComponent = React.forwardRef<unknown, MyProps>((props, ref) => {
  return <div ref={ref}>My Message</div>;
});
```
