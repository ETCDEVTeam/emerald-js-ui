var _ = require('lodash');
var foo = require('require-dir');
var babel = require('babel-core');
var fs = require('fs');

var bar = foo('./lib', {recurse: true});

const baseDir = './src';
const recursionDepth = 0;
const handleDir = (dir, currBaseDir, depth) => {
  const currIndexFile = `${currBaseDir}/shmindex.js`;

  const all = _.map(dir, (val, key) => {
    if (depth === 0 || key[0].toUpperCase() === key[0]) {
      handleDir(val, `${currBaseDir}/${key}`, depth + 1);
    }

    return `export { ${key} } from './${key}'`;
  });

  console.log(`writing ${currIndexFile}`);
  fs.writeFileSync(currIndexFile, all.join('\n'));
  console.log(`wrote ${currIndexFile}`);
};

handleDir(bar, baseDir, recursionDepth);
