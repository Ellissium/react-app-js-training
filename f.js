const fs = require('fs')
const path = require('path')
console.log('start');
fs.mkdir(path.resolve(__dirname,'dir2'), (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Папка создана');
})
console.log('end');