const fs = require('fs'),
    request = require('request'),
    yml = require('js-yaml'),
    dest = __dirname.replace('src', 'index.json'),
    fa = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/src/icons.yml'

request.get(fa, (e, resp, body) => {
    const list = yml.safeLoad(body),
        json = JSON.stringify(list.icons)
    fs.writeFile(dest, json, e => console.log('end', e))
})
