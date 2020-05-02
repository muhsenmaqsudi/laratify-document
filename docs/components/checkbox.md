# Checkbox

### Code

```html
<x-componel-checkbox
  name="terms"
  label="accept terms & conditions"
  checkbox-label="accept"
  id="terms_id"
  :value="old('terms', $data->terms ?? '')"
>
</x-componel-checkbox>
```

::: tip disabling
for disabling the checkbox set disabled attributes.
:::

::: tip checkbox column
checkbox attributes should have boolean migration columns.
:::

### Playground

<checkbox-CheckboxPlayground />
