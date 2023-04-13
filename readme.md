# react-third-hand

`CLI helper for setting up your React application environment`

🛠️Supported technologies:

- ESLint
- StyleLint v15+
- Prettier
- Husky + Lint-Staged
- VSCode settings

📦For the apps based on:

- Create-React-App
- Next
- Vite

## Install and start

### with NPX:

```
$ npx react-third-hand@latest
```

### with NPM:

```
$ npm i -g react-third-hand
```

Start command in your React App

```
$ react-third-hand
```

## Options

0. App type: **Create React App** / **Next** / **Vite**
1. Package Manager: **yarn** / **npm**
2. Language: **TypeScript** / **JavaScript**
3. Helpers: **ESLint**, **Stylelint**, **Prettier**, **Husky + lint-staged**, **VSCode**
4. Styling: **CSS** / **SCSS** / **Styled Components**

## About ESLint support

### Imports order

[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) is used to group imports. More information for setting up groups can be found [here](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md).

## About Stylelint support

### Styles order

Styles order by [stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order)

| Before                                                                                                           | After                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![before](https://user-images.githubusercontent.com/10108377/173256557-88f5098b-dad7-4339-a571-6850ed82828f.png) | ![after](https://user-images.githubusercontent.com/10108377/173256556-e29e892a-2d21-437c-8093-a345d5de920e.png) |

### Recommended extension

Recommended extension for VSCode to auto fix possible errors.

[Stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus) extension ID: _hex-ci.stylelint-plus_
