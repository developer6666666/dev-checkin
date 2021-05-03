const fs = require('fs')

const findTodo = (path, keyword = 'todo'.toUpperCase()) => {
    const isDir = fs.lstatSync(path).isDirectory()
    if (isDir) {
        return fs.readdirSync(path).reduce((pre, cur) => [...pre, ...findTodo(`${path}/${cur}`, keyword)], [])
    } else {
        return fs.readFileSync(path).toString().includes(keyword) ? [path] : []
    }
}

module.exports = {
    findTodo
}