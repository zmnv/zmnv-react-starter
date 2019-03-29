const fs = require('fs');
const crypto = require("crypto");
const html = fs.readFileSync('./build/index.html', { encoding: 'utf8' });

const classNames = [
    'prikol',
    'keck',
    'lal'
];

const range = {
    kb: 1000,
    mb: 1000 * 1024,
    gb: 1000 * 1024 * 1024
};

const sizeInMb = (bytes) => {
    if (bytes < 0) bytes = bytes * -1;

    if (bytes < range.kb) return `${bytes} байт`;
    if (bytes >= range.kb && bytes < range.mb) return `${(bytes / 1024).toFixed(2)} Кб`;
    if (bytes >= range.mb && bytes < range.gb) return `${(bytes / 1024 / 1024).toFixed(2)} Мб`;
    if (bytes >= range.gb) return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} Гб`;

    return `${bytes}`;
}

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

function rewrireClassNamesToRandom(classNamesArray = []) {
    let buff = html;

    classNamesArray.forEach(className => {
        const newClassName = `${makeid(5)}-${crypto.randomBytes(8).toString('hex')}`;
        buff = buff.replace(new RegExp(className, 'g'), newClassName);
    })

    return buff;
}

fs.writeFile('./build/index.html', rewrireClassNamesToRandom(classNames), function(err) {
    if(err) {
        return console.log(err);
    }

    const exitFile = fs.statSync('./build/index.html');

    console.log('Случайные названия классов... Успешно.')
    console.log(`Размер файла: ${sizeInMb(exitFile.size)}\n`);
});


