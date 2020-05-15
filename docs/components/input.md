# Input

### Code

```html
<x-laratify-input
  name="email"
  type="email"
  label="Email:"
  id="email_id"
  placeholder="Enter your email"
  :value="old('email', $data->email ?? '')"
>
</x-laratify-input>
```

::: tip disable & readonly
for disabling the input set `disabled` attributes, for readonly input set `readonly` attribute
:::

```html
<x-laratify-input disabled readonly></x-laratify-input>
```

### Playground

<input-InputPlayground />
