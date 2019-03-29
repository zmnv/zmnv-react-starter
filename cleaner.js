// const juice = require('juice');
const fs = require('fs');

const html = fs.readFileSync('./build/index.html', { encoding: 'utf8' });
// const juiced = juice(html);

// const noStyle = juiced.replace(/<style.*?<\/style>/gms, '');
// const noClasses = noStyle.replace(/class=".*?"/gm, '');
const noScripts = html.replace(/<script.*?<\/script>/gms, '')

fs.writeFile('./build/index.html', noScripts, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Очистка файла index.html от лишнего... Успешно.");
});
