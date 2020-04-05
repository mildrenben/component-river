const path = require('path');
const fs = require('fs');

exports.onPostBuild = function () {
  fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, '../docs'));
};