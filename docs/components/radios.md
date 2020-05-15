# Radios

### Code

```html
<x-laratify-radios
  name="option"
  :options="['option1', 'option2', 'option3']"
  :value="old('option', $data->option ?? '')"
>
</x-laratify-radios>
```

::: tip options with sequential array
:options="['option1', 'option2', 'option3']"
:::

::: tip options with associate array
:options="[1 => 'option1', 2 => 'option2']"
:::

### Playground

<radios-RadiosPlayground />
