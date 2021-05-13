# eslint-plugin-consistent-imports

## WIP! Don't try to use it!

[![Tests](https://github.com/DZakh-packages/eslint-plugin-consistent-imports/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/DZakh-packages/eslint-plugin-consistent-imports/actions/workflows/test.yml)

Helps in writing code with css-modules

## Installation :)

You'll first need to install [ESLint](http://eslint.org):

```
npm i eslint --save-dev
```

Next, install `eslint-plugin-consistent-imports`:

```
npm install eslint-plugin-consistent-imports --save-dev
```

## Usage

Add `consistent-imports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["consistent-imports"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "consistent-imports/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
