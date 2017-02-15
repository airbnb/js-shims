# airbnb-js-shims

JS language shims used by Airbnb.

Just require/import `airbnb-js-shims`, and the environment will be shimmed.

```js
import 'airbnb-js-shims';
```

## Included shims

 - [es5-shim](https://www.npmjs.com/package/es5-shim)
 - [es5-sham](https://www.npmjs.com/package/es5-shim)
 - [es6-shim](https://www.npmjs.com/package/es6-shim)
 - [Array.prototype.includes](https://www.npmjs.com/package/array-includes) (ES7/ES2016)
 - [Object.entries](https://www.npmjs.com/package/object.entries) (stage 3, planned for ES8/ES2017)
 - [Object.values](https://www.npmjs.com/package/object.values) (stage 3, planned for ES8/ES2017)
 - [String.prototype.padStart](https://www.npmjs.com/package/string.prototype.padstart) (stage 3, planned for ES8/ES2017)
 - [String.prototype.padEnd](https://www.npmjs.com/package/string.prototype.padend) (stage 3, planned for ES8/ES2017)

## Targeting versions

If you do not need to support older browsers, you can pick a subset of ES versions to target. For example, if you don't support pre-ES5 browsers, you can start your shims with ES2015 by requiring/importing the specific target file. This will shim the environment for that version and upward.

```js
import 'airbnb-js-shims/target/es2015';
```

### Included targets

- `airbnb-js-shims/target/es5` (default)
- `airbnb-js-shims/target/es2015`
- `airbnb-js-shims/target/es2016`
- `airbnb-js-shims/target/es2017`
