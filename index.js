const path = require('path');
const resolve = require('resolve');

module.exports = function(options) {
  return {
    resolve(filename, source, pugOptions) {
      const file = path.parse(filename);
      const resolvePath = file.dir ? `${file.dir}/${file.name}` : file.name;

      return resolve.sync(resolvePath, Object.assign({
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
