const express = require("express")
const app = express()
const port = 3002

const morgan=require("morgan")
app.use(morgan("combined"))

const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const cors=require("cors")
app.use(cors())

app.listen(port,() => {console.log(`My server listening on port ${port}`)})

app.get("/", (req,res)=>{
    res.send("this web is processed for MongoDB")
})

// //connect to my mongoDB database
const {MongoClient, ObjectId} = require('mongodb')
client = new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
database = client.db("TravelApp")
informationCollection = database.collection("GeneralInformation")
faqCollecttion = database.collection("FAQ")
topCollection = database.collection("TopPlaces")

// // //test get postman
app.get("/generalinformation", cors(), async(req,res)=>{
  const result = await informationCollection.find({}).toArray()
  res.send(result)
})

// // //test get postman
app.get("/topplaces", cors(), async(req,res)=>{
  const result = await topCollection.find({}).toArray()
  res.send(result)
})

app.get("/faq", cors(), async(req,res) => {
  const result = await faqCollecttion.find({}).toArray()
  res.send(result)
})

// //get general info by ID
app.get("/generalinformation/:id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params.id);
    const result = await informationCollection.find({_id:o_id}).toArray();
    res.send(result[0]) 
    }
    ) 

// Get FAQ list by destination
app.get("/faq/:id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params.id);
    const result = await faqCollecttion.find({_id:o_id}).toArray();
    res.send(result[0]) 
    }
    ) 

// Get top places list by destination
app.get("/topplaces/:id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params.id);
    const result = await topCollection.find({_id:o_id}).toArray();
    res.send(result[0]) 
    }
    ) 