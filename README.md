# *Package Under Development*
# React Column Select
[![NPM](https://img.shields.io/npm/v/react-column-select)](https://www.npmjs.com/package/react-column-select)
[![CI](https://github.com/chr-ge/react-column-select/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/chr-ge/react-column-select/actions/workflows/ci.yml)
[![SIZE](https://badgen.net/bundlephobia/min/react-column-select)](https://bundlephobia.com/result?p=react-column-select)
[![Depfu](https://badges.depfu.com/badges/c540bb2dbd4e634a557231ecd335474e/overview.svg)](https://depfu.com/repos/github/chr-ge/react-column-select?project_id=24188)
![GitHub](https://img.shields.io/github/license/chr-ge/react-column-select)

## 🚀 Features
- Easily customize colors 
- Responsive Design
- Styled with emotion
- Built with Typescript

## ⚡ Installation

```sh
yarn add react-column-select
# or
npm install react-column-select
```

## ⚙️ Props

| name               | type             | isRequired    | default           | description                                                           |
| ---                | ---              | ---           | ---               | ---                           |
| `options`            | array           | ✔             | N/A               | available select options      |
| `leftHeader`            | string           | ✖             | 'Options'               | the left column header      |
| `rightHeader`            | string           | ✖             | 'Selected'               | the right column header      |
| `theme`            | object           | ✖             | {}               | the color theme      |
| `disableDoubleClick`            | boolean           | ✖             | false               | disable double click to add/remove an option       |
| `disableKeyboard`           | boolean | ✖             | false               | disable navigation the select options with keyboard   |

## 🎨 Theme Customization
Below is the default theme, change the values that you want to customize:
```jsx
{
    headerBgColor: '#d6b1ff',
    secondary: '#cfa4ff',
    textColor: '#000000',
    columnBgColor: '#CBD5E0',
    buttonBgColor: '#CBD5E0',
}
```

## License
Distributed under the MIT license. See `LICENSE` for more information.
