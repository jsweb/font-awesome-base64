const fs = require('fs'),
    https = require('https'),
    yml = require('node-yaml'),
    src = __dirname.replace('src', 'index.yml'),
    dest = src.replace('yml', 'json'),
    fa = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/src/icons.yml'

https.get(fa, resp => {
    resp.once('end', () => {
        yml.read(src, (e, list) => {
            const json = JSON.stringify(list.icons)
            fs.writeFile(dest, json, e => console.log('end', e))
        })
    })
    resp.pipe(fs.createWriteStream(src))
})
