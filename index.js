const path = require('path');
const resolve = require('resolve');

module.exports = function(options) {
  return {
    resolve(filename, source, pugOptions) {
      const file = path.parse(filename);

      // Strip out extension that is automatically added by Pug
      file.ext = '';
      file.base = file.name;

      let resolvePath;
      if (!file.dir && file.dir[0] !== path.sep && file.dir[0] !== '.') {
        resolvePath = file.name;
      } else {
        resolvePath = path.format(file);
      }

      return resolve.sync(resolvePath, Object.assign({
        basedir: path.dirname(source),
        extensions: ['.pug', '.jade'],
        packageFilter(pkg) {
          return Object.assign({}, pkg, {
            main: pkg.pug || pkg.main
          });
        }
      }, options));
    }
  };
};
