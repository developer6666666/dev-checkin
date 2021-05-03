const { findTodo } = require('./findTodo')
const fs = require('fs')

beforeAll(() => {
    console.log('Before all create test directory with some directories and files')
    fs.mkdirSync('src/test', { recursive: true })
    fs.mkdirSync('src/test/dir1', { recursive: true })
    fs.mkdirSync('src/test/dir2', { recursive: true })
    fs.mkdirSync('src/test/dir1/dir1.1', { recursive: true })
    fs.mkdirSync('src/test/dir1/dir1.1/dir1.1.1', { recursive: true })
    fs.writeFileSync('src/test/dir1/file1.js', 'todo'.toUpperCase())
    fs.writeFileSync('src/test/dir2/file2.js', 'todo'.toUpperCase())
    fs.writeFileSync('src/test/dir1/dir1.1/file1.1.js', 'todo'.toUpperCase())
    fs.writeFileSync('src/test/dir1/dir1.1/file1.2.js', 'todo'.toUpperCase())
    fs.writeFileSync('src/test/dir1/dir1.1/dir1.1.1/file1.1.1.js', 'todo'.toUpperCase())

})

test('findTodo works as expect', () => {
    const result = findTodo('src')
    expect(result.includes('src/test/dir1/file1.js')).toBe(true)
    expect(result.includes('src/test/dir2/file2.js')).toBe(true)
    expect(result.includes('src/test/dir1/dir1.1/file1.1.js')).toBe(true)
    expect(result.includes('src/test/dir1/dir1.1/file1.2.js')).toBe(true)
    expect(result.includes('src/test/dir1/dir1.1/dir1.1.1/file1.1.1.js')).toBe(true)
})


afterAll(() => {
    console.log('After all remove test directory')
    fs.rmdirSync('src/test', { recursive: true })
})