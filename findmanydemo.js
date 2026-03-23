const{MongoClient}=require("mongodb")
const client=new MongoClient( "mongodb://127.0.0.1:27017/")
try{
    client.connect()
    console.log("connection success")
    dset=client.db("sabaree").collection("sdata").find({}).toArray()
    dset.then((res)=>{
        console.log(res)
    })
}
catch{
    console.log("error")
}