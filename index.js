const path = require('path');
const resolve = require('resolve');

module.exports = function({
  extensions,
  paths,
  moduleDirectory,
  packageFilter
}) {
  return {
    resolve(filename, source, options) {
      return resolve.sync(filename, {
        basedir: path.dirname(source),
        extensions: extensions || ['.pug', '.jade'],
        paths,
        moduleDirectory,
        packageFilter: packageFilter || pkg =>
          Object.assign({}, pkg, {
            main: pkg.pug || pkg.main
          })
      });
    }
  }
}
