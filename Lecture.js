const fs = require("fs")

fs.readFile("./welcome.txt",'utf8',(err,data)=>{
    if(err){
        console.log('Erreur')
    }else{
        console.log(data)
    }
})