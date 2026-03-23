var fs=require("fs")
var readStream=fs.createReadStream("temp.txt")
readStream.setEncoding("utf-8")
var ans=""
readStream.on("data",(chunk)=>{
    ans=ans+chunk

})

readStream.on("end",()=>{
    console.log("output:",ans)


})
readStream.on("error",(err)=>{
    console.log("error reason:",err.toString())
})
console.log("program ended")