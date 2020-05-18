const fs = require('fs');
const glob = require('glob');

glob('dist/*.wasm', {}, (_, wasmFiles) => {
  const hashes = [];
  for (const file of wasmFiles) {
    const fileName = file.replace('dist/','');
    const hash = fileName.split('.')[0];
    hashes.push(hash);

    fs.renameSync(file, `dist/static/${fileName}`);

    fs.readFile('dist/index.html', 'utf8', function (err,data) {
      if (err) return console.log(err);

      const result = data.replace(fileName, `static/${fileName}`);
    
      fs.writeFile('dist/index.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  }

  glob('dist/static/js/*.js', (_, jsFiles) => {
    for(const jsFile of jsFiles) {
      fs.readFile(jsFile, 'utf8', function (err,js) {
        if (err) return console.log(err);

        let result = js;
        for(const hash of hashes) {
          result = result.replace(hash, `static/${hash}`);
        }

        if(result !== js) {
          fs.writeFile(jsFile, result, 'utf8', function (err) {
            if (err) return console.log(err);
          }); 
        }
      });
    }
  });
});
