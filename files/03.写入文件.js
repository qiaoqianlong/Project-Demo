const fs = require('fs')


fs.writeFile('./2.txt','1234',function(err){
    console.log(err)
})