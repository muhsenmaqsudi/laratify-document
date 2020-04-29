# Input

```html
<x-componel-input
  name="email"
  type="email"
  label="Email:"
  id="email_id"
  placeholder="Enter your email"
  :value="old('email', $data->email ?? '')"
>
</x-componel-input>
```

::: tip disable & readonly
for disabling the input set `disabled` attributes, for readonly input set `readonly` attribute
:::

```html
<x-componel-input disabled readonly></x-componel-input>
```
