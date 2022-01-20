const fs = require('fs')
const path = __dirname
const currentFileName = __filename.split('\\').slice(-1).join('')
const currentFileExtention = __filename.split('\\').slice(-1).join('').split('.')[1]

let modifyFileExtention = null
let fileNameList = []
let dirNameList = []
let startNumber = 0

fs.readdir(path, { withFileTypes: true }, (err, data) => {
  if (err) throw err
  data.forEach(e => {
    if (!e.isDirectory() && e.name !== currentFileName) {
      modifyFileExtention = '.' + e.name.split('\\').slice(-1).join('').split('.')[1]
      fileNameList.push(e.name)
    } else if (e.isDirectory() && e.name !== currentFileName) {
      dirNameList.push(e.name)
    }
  })
  let newFileNameList = fileNameList.map(e => {
    //修改命名规则
    startNumber++
    return startNumber + '.' + e.split('.')[1]
  })
  newFileNameList.forEach((e, i) => {
    let oldPath = path + '\\' + fileNameList[i]
    let newPath = path + '\\' + e
    fs.rename(oldPath, newPath, (err) => {
      if (err) throw err
      console.log('成功')
    })
  })
})
