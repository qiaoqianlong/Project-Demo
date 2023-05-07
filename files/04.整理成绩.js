const fs = require('fs')

fs.readFile('./成绩.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }

    // console.log('读取文件成功！' + dataStr)

    //将成绩按空格分割
    const arrOld = dataStr.split(' ')
    //循环数组替换=
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })
    //新数组合并
    console.log(arrNew)
    const newStr = arrNew.join('\r\n')
    console.log(newStr)

    //写入新文件中
    fs.writeFile('./成绩-ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件失败！' + err.message)
        }

        console.log('成绩写入成功！')
    })

})