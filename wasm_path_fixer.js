/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob');

glob('dist/*.wasm', {}, (_, wasmFiles) => {
  const hashes = [];
  for (const file of wasmFiles) {
    const fileName = file.replace('dist/', '');
    const hash = fileName.split('.')[0];
    hashes.push(hash);

    fs.renameSync(file, `dist/static/${fileName}`);

    fs.readFile('dist/index.html', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const result = data.replace(fileName, `static/${fileName}`);

      fs.writeFile('dist/index.html', result, 'utf8', (err) => {
        if (err) console.log(err);
      });
    });
  }

  glob('dist/static/js/*.js', (_, jsFiles) => {
    for (const jsFile of jsFiles) {
      fs.readFile(jsFile, 'utf8', (readErr, js) => {
        if (readErr) {
          console.log(readErr);
          return;
        }

        let result = js;
        for (const hash of hashes) {
          result = result.replace(hash, `static/${hash}`);
        }

        if (result !== js) {
          fs.writeFile(jsFile, result, 'utf8', (writeErr) => {
            if (writeErr) {
              throw new Error(writeErr);
            }
          });
        }
      });
    }
  });
});
