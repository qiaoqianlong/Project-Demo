//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()

//4.监听客户端的GET和POST请求，并向客户端响应具体的内容
app.get('/user', (req,res)=>{
    //调用express提供的res.send()方法，向客户端响应一个 JSON对象
    res.send({ name: 'zs', age: 20, gender: '男'})
})

app.post('/user', (req,res)=>{
    //调用express提供的res.send()方法，向客户端响应一个 文本字符串
    res.send('请求成功')
})

//3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})