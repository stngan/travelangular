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

client = new MongoClient("mongodb://localhost:27017")
client.connect()
database = client.db("travelangular_dev")
informationCollection = database.collection("GeneralInformation")
faqCollecttion = database.collection("FAQsection")
topCollection = database.collection("TopPlaces")

//Connect Mongo DB of MH
database1 = client.db("travelangular_dev");
post = database1.collection("ReviewData");
user =database1.collection("User");
activity = database1.collection("Activity");
react = database1.collection("Favorites") 
// ----------------------------------------------//
//Conect Mongodb of HH
usersCollection = database1.collection("users")
//------------------------------------
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

//get general info by ID
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
// API of MH

//1. get post limit 6
app.get("/posts", cors(), async (req,res)=>{
  const result = await post.find({}).limit(8).sort({Post_DateCreated:'desc'}).toArray();
  res.send(result)
})
// get cmt 
app.get("/posts-cmt", cors(), async (req,res)=>{
  const result = await activity.find({}).toArray();
  res.send(result)
})
// get post size n
app.get("/posts-getN/:n", cors(), async (req,res)=>{
  const result = await post.find({}).limit(parseInt(req.params.n)).sort({Post_DateCreated:'desc'}).toArray();
  res.send(result)
})
// app.post("/cmt",cors(),async(req,res)=>{
//     await activity.insertOne(req.body)
//     res.send(req.body)
// })
//  create Comment
app.post("/posts",cors(),async(req,res)=>{
  await activity.insertOne(req.body)
  res.send(req.body)
})
// SAVE react
app.post("/posts-react",cors(),async(req,res)=>{
  await react.insertOne(req.body)
  res.send(req.body)
})
// Delete Post
app.delete("/posts/:id",cors(), async(req,res)=>{
  var o_id = new ObjectId(req.params["id"]);
  const result = await post.find({_id:o_id}).toArray();
  await post.deleteOne(
      {_id:o_id}
  )
  res.send(result[0])
})
// delete comment
app.delete("/posts-cmt/:id",cors(), async(req,res)=>{
  var o_id = new ObjectId(req.params["id"]);
  const result = await activity.find({_id:o_id}).toArray();
  await activity.deleteOne(
      {_id:o_id}
  )
  res.send(result[0])
})
// get post by region
app.get("/posts-region/:region",cors(), async(req,res)=>{
  const o_region = new RegExp(req.params.region,"i")
  const result = await post.find({Post_Region:{$regex: o_region}}).sort({"Post_Interact.Post_Like":-1}).limit(4).toArray();
  res.send(result)
})
app.get("/posts-reacted/:User",cors(), async(req,res)=>{
  const o_id = new RegExp(req.params.user,"i")
  const result = await react.find({User_Id:{$regex: o_id}}).toArray();
  res.send(result)
})
app.get("/posts-search/:string",cors(), async(req,res)=>{
  const o_string = new RegExp(req.params.string,"i")
  const result = await post.find({$or:{Post_Region: {$regex: o_string}, Post_Category:{$regex: o_string}} }).toArray();
  res.send(result)
})
app.get("/posts-region/:region/:category",cors(), async(req,res)=>{
  const o_region = req.params.region
  const o_category = req.params.category
  const result = await post.find({$and:[{Post_Category:o_category}, {Post_Region:o_region}]}).toArray();
  res.send(result)
})
app.get("/posts-price/:region/:category/:min/:max",cors(), async(req,res)=>{
  const o_region = req.params.region
  const o_category = req.params.category
  const min = parseInt(req.params.min) 
  const max = parseInt(req.params.max) 
  const result = await post.find({$and:[{Post_Category:o_category}, {Post_Region:o_region}, {Post_Pice: {$gte:min }}, {Post_Pice: {$lte:max }}]}).sort({Post_Pice:1}).toArray();
  res.send(result)
})
app.get("/posts/:id",cors(), async(req,res)=>{
  var o_id = new ObjectId(req.params["id"]);
  const result = await post.find({_id:o_id}).toArray();
  res.send(result[0])
})
app.get("/posts-cmt/:id",cors(), async(req,res)=>{
  const o_id = new RegExp(req.params.id,"i")
  const result = await activity.find({Post_Id:{$regex: o_id}}).toArray();
  res.send(result)
})
app.get("/posts-react/:id/:user",cors(), async(req,res)=>{
  const o_id = req.params.id
  const o_user = req.params.user
  const result = await react.find({$and:[{Post_Id:o_id}, {User_Id:o_user}]}).toArray();
  res.send(result[0])
})
app.put("/posts", cors(), async (req, res) => {
  await post.updateOne(
    { _id: new ObjectId(req.body._id) }, //condition for update
    {
      $set: {
          Post_Address: req.body.Post_Address,
          Post_Content : req.body.Post_Content,
          Post_Pice: req.body.Post_Pice,
          Post_TimeActive: req.body.Post_TimeActive,
          Post_Title: req.body.Post_Title,
          Post_Interact:req.body.Post_Interact
      },
    }
  );
  //send post after updating
  var o_id = new ObjectId(req.body._id);
  const result = await post.find({ _id: o_id }).toArray();
  res.send(result[0]);
});
app.put("/posts-cmt", cors(), async (req, res) => {
  await activity.updateOne(
    { _id: new ObjectId(req.body._id) }, //condition for update
    {
      $set: {
          
          Act_cmt:req.body.Act_cmt,
          Act_Created:req.body.Act_Created
      },
    }
  );
  //send cmt after updating
  var o_id = new ObjectId(req.body._id);
  const result = await activity.find({ _id: o_id }).toArray();
  res.send(result[0]);
});
// ---------------------all API of MH ---------------------
//------------Xử lí Login/signup----------of HH>

// Signup
app.post("/users/signup", cors(), async(req, res)=>{
  var crypto = require('crypto'); 
  salt = crypto.randomBytes(16).toString('hex');
  users =req.body
  hash = crypto.pbkdf2Sync(users.password, salt, 1000, 64, `sha512`).toString(`hex`);
  users.password = hash
  users.salt = salt
  await usersCollection.insertOne(users)
  res.send(req.body)
})

// LogIn
app.post("/users/login",cors(), async(req, res)=>{
  const userEmail=req.body.userEmail
  const password=req.body.password
  const crypto = require('crypto');
  const users = await usersCollection.findOne({userEmail: userEmail})
  if(users==null)
      res.send(false)
  else
  { 
      hash = crypto.pbkdf2Sync (password, users.salt, 1000, 64, `sha512`).toString(`hex`); 
      if(users.password==hash) 
          res.send(true)           
      else
      res.send(false)
  }
}
)
// get user by email
app.get("/user-getEmail/:mail",cors(), async(req,res)=>{
  const o_mail = new RegExp(req.params.mail,"i")
  const result = await usersCollection.find({userEmail:{$regex: o_mail}}).toArray();
  res.send(result[0])
})

//api kiểm tra email không tồn tại
app.get("/users/check-unexist/:email", cors(), async (req, res) => {
  const email = req.params.email;
  const result = await usersCollection.findOne({ userEmail: email });

  if (result) {
    res.send({ exists: true });
  } else {
    res.send({ exists: false });
  }
});

//api kiểm tra email tồn tại
app.get("/users/check-exist/:email", cors(), async (req, res) => {
const email = req.params.email;
const result = await usersCollection.findOne({ userEmail: email });

if (result) {
  res.send(false);
} else {
  res.send(true);
}
});



//------------Xử lí Login/signup---------->