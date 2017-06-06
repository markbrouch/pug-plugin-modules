const path = require('path');
const resolve = require('resolve');

module.exports = function(options) {
  return {
    resolve(filename, source, pugOptions) {
      return resolve.sync(filename, Object.assign({
        basedir: path.dirname(source),
        extensions: ['.pug', '.jade'],
        packageFilter: pkg =>
          Object.assign({}, pkg, {
            main: pkg.pug || pkg.main
          })
      }, options));
    }
  };
};
