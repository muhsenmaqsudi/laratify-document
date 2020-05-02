# Radios

### Code

```html
<x-componel-radios
  name="option"
  :options="['option1', 'option2', 'option3']"
  :value="old('option', $data->option ?? '')"
>
</x-componel-radios>
```

::: tip options with sequential array
:options="['option1', 'option2', 'option3']"
:::

::: tip options with associate array
:options="[1 => 'option1', 2 => 'option2']"
:::

### Playground

<radios-RadiosPlayground />
