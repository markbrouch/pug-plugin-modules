# pug-plugin-modules
Pug plugin for resolving templates in node_modules

## Installation
```
npm install pug-plugin-modules
```
Import plugin:
```
const modulesPlugin = require('pug-plugin-modules');
```
then, in your Pug options object:
```
{
  plugins: [
    modulesPlugin(/*options*/)
  ]
}
```

## Usage
The same options as [resolve](https://github.com/substack/node-resolve) are available. PugPluginModules provides the following defaults:
  * `baseDir` = directory of source file
  * `extensions` = `['.pug', '.jade']`
  * `packageFilter` = will first search for `"pug"` and then `"main"` in `package.json`

## License
MIT (http://www.opensource.org/licenses/mit-license.php)
