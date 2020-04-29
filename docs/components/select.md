# Select

```html
<x-componel-select
  name="option"
  label="Option Label:"
  first-option="Select your option"
  :options="[1 => 'option1', 2 => 'option2']"
  :value="old('option', $data->option ?? '')"
>
</x-componel-select>
```

::: tip options array types
if the options are an associative array, the keys are used as the labels and the values as the values. For sequential arrays, the values are used for both the labels and values.
:::

::: tip options with sequential array
:options="['option1', 'option2', 'option3']"
:::

::: tip options with associate array
::options="[1 => 'option1', 2 => 'option2']"
:::
