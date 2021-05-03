const { findTodo } = require('./src/service/findTodo')

const todoList = findTodo('src')
console.log('List all TODOs:', todoList)