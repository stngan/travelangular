const express = require('express');
const app = express();
const port = 4000;

const morgan=require("morgan")
app.use(morgan("combined"))

const bodyParser=require("body-parser")
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({extended: true,limit:'10mb'}));

app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb'}));
app.use(express.json())


const cors=require("cors");
app.use(cors())

app.listen(port,()=>{
    console.log(`My Server listening on port ${port}`)
})



const { MongoClient, ObjectId } = require( 'mongodb');
client = new MongoClient("mongodb://localhost:27017");
client.connect();

database = client.db("FashionData");
database1 = client.db("travelangular_dev");

fashionCollection = database.collection("Fashion");
post = database1.collection("ReviewData");
user =database1.collection("User");
activity = database1.collection("Activity");
react = database1.collection("Favorites") 

app.get("/",(req,res)=>{
    res.send("This web server is processed from MongoDB")
})
// this is API to get Fashion reverse day
// app.get("/fashions", cors(), async (req,res)=>{
//     const result = await fashionCollection.find({}).sort({Created_day:'desc'}).toArray();
//     res.send(result)
// })
app.get("/posts", cors(), async (req,res)=>{
    const result = await post.find({}).limit(6).sort({Post_DateCreated:'desc'}).toArray();
    res.send(result)
})
app.get("/posts-cmt", cors(), async (req,res)=>{
    const result = await activity.find({}).toArray();
    res.send(result)
})

app.get("/posts-getN/:n", cors(), async (req,res)=>{
    const result = await post.find({}).limit(parseInt(req.params.n)).sort({Post_DateCreated:'desc'}).toArray();
    res.send(result)
})
// app.post("/cmt",cors(),async(req,res)=>{
//     await activity.insertOne(req.body)
//     res.send(req.body)
// })
app.post("/posts",cors(),async(req,res)=>{
    await activity.insertOne(req.body)
    res.send(req.body)
})
app.post("/posts-react",cors(),async(req,res)=>{
    await react.insertOne(req.body)
    res.send(req.body)
})
app.delete("/posts/:id",cors(), async(req,res)=>{
    var o_id = new ObjectId(req.params["id"]);
    const result = await post.find({_id:o_id}).toArray();
    await post.deleteOne(
        {_id:o_id}
    )
    res.send(result[0])
})
app.delete("/posts-cmt/:id",cors(), async(req,res)=>{
    var o_id = new ObjectId(req.params["id"]);
    const result = await activity.find({_id:o_id}).toArray();
    await activity.deleteOne(
        {_id:o_id}
    )
    res.send(result[0])
})
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



