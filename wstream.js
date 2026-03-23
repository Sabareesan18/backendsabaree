var fs=require("fs")
var writestream=fs.createWriteStream("output.txt")
var mydata="this is sabareesan j iam from karur"
writestream.write(mydata,'utf-8')
writestream.end();

writestream.on("finish",()=>{
    console.log("successfully written")
})

writestream.on("error",(err)=>{
    console.log("Error Reason:",err.toString())

})
console.log("program ended")