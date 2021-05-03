const fs = require('fs')

const findKeyword = (path = 'src', keyword = 'todo'.toUpperCase()) => {
    try {
        const isDir = fs.lstatSync(path).isDirectory()
        if (isDir) {
            return fs.readdirSync(path).reduce((pre, cur) => [...pre, ...findKeyword(`${path}/${cur}`, keyword)], [])
        } else {
            return fs.readFileSync(path).toString().includes(keyword) ? [path] : []
        }
    } catch (err) {
        throw err
    }
}

module.exports = {
    findKeyword
}