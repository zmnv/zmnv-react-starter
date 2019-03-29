// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer({
	    browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7']
    })],
};
