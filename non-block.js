var fs=require("fs")
var data=fs.readFile("temp.txt",(err,data)=>{
    if(err) throw"file not found"
    console.log(data.toString())
    
})
console.log("program end")