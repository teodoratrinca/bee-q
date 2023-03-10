# bq-breadcrumb-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                       | Type      | Default     |
| ---------- | ---------- | ----------------------------------------------------------------- | --------- | ----------- |
| `dropdown` | `dropdown` | Contains an arrow If prop is set to true, it displays the options | `boolean` | `undefined` |
| `link`     | `link`     | Contains a URL If prop is set, an anchor tag will be rendered     | `string`  | `undefined` |


## Events

| Event     | Description                                              | Type                                       |
| --------- | -------------------------------------------------------- | ------------------------------------------ |
| `bqFocus` | Handler to be called when the breadcrumb item gets focus | `CustomEvent<HTMLBqBreadcrumbItemElement>` |


## Methods

### `vFocus() => Promise<void>`

Sets focus on the native `<li>` HTML element used under the hood.
Use this method instead of the global `element.focus()`.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part         | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| `"base"`     | The component's internal wrapper of the breadcrumb component. |
| `"dropdown"` | The `<span>` element that holds the dropdown.                 |
| `"link"`     | The native HTML `<input type="radio">` used under the hood.   |
| `"prefix"`   | The `<span>` element that holds the prefix.                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
