var events=require("events")
var eventemitter=new events.EventEmitter()
eventemitter.on("sabareesan event",()=>{
    console.log("sabareesan event called")

})
console.log("program end")
eventemitter.emit("sabareesan event")
eventemitter.emit("sabareesan event")