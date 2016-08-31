# eslint-plugin-nowrap-in-template-string

Because wrap in template string will bring unexpected new line symbol and space,
this plugin provide a rule which disallow wrap in template string.

### Usage
```bash
npm i eslint-plugin-nowrap-in-template-string -D
```

in `.eslintrc`:
```json
"plugins": [
  "nowrap-in-template-string"
],
"rules": {
  "nowrap-in-template-string/nowrap-in-template-string": 2
}
```
