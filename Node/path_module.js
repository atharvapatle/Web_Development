// The path module is a built-in module in Node.js that provides a way to work with file paths and directories. It provides several methods to manipulate file paths in a platform-independent way, making it easier to write code that can be used across different operating systems.

//FOR FURTHER EXPLAINATION, ASK CHATGPT

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)