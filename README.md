# eslint-plugin-clean-css-modules

Helps in writing code with css-modules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
npm i eslint --save-dev
```

Next, install `eslint-plugin-clean-css-modules`:

```
npm install eslint-plugin-clean-css-modules --save-dev
```

## Usage

Add `clean-css-modules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["clean-css-modules"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "clean-css-modules/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
