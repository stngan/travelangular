const express = require("express");
const app = express();
const port = 3000;
const path = require("path"); // dùng path

// cấu hình static file
app.use(express.static(path.join(__dirname, "static")));

//HTTP logger
const morgan = require("morgan");
app.use(morgan("combined"));

// const bodyParser=require("body-parser")
// app.use(bodyParser,json())
// app.use(bodyParser.urlencoded({extended: true}))

//template engine
const handlebars = require("express-handlebars");

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// router điều hướng đến các page
app.get("/", (req, res) => {
  res.render("home"); // trỏ tới home.handlebars
});
app.get("/news", (req, res) => {
  res.render("news"); // trỏ tới home.handlebars
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const cors = require("cors");
app.use(cors());



let destinations = [
  {
    destiID: "destinationHCM",
    destiName: "TP HCM",
  },
  {
    destiID: "destinationDALAT",
    destiName: "Đà Lạt",
  },
  {
    destiID: "destinationDANANG",
    destiName: "Đà Nẵng",
  },
  {
    destiID: "destinationHANOI",
    destiName: "Hà Nội",
  },
  {
    destiID: "destinationNHATRANG",
    destiName: "Nha Trang",
  },
];

app.get("/destinations", cors(), (req, res) => {
  res.send(destinations);
});

// //test get postman
// app.get("/generalinformation", cors(), async(req,res)=>{
//   const result = await informationCollection.find({}).toArray()
//   res.send(result)
// })

// //get general info by ID
// app.get("/generalinformation/:id", cors(), async (res,req) => {
//   var o_id = new ObjectId(req.params["id"])
//   const result = await informationCollection.find({_id:o_id}).toArray()
//   res.send(result[0])
// })

// app.get("/books", cors(), (req, res) => {
//   res.send(database)
// })

// app.get("/books/:id", cors(), (req, res) => {
//   id = req.params["id"];
//   let p = database.find(x => x.BookId == id)
//   res.send(p)
// })

// app.get("/books/:minPrice/:maxPrice", cors(), (req, res) => {
//   console.log(req.params.minPrice, req.params.maxPrice)
//   let p = database.filter(
//     x => x.Price >= req.params.minPrice
//       &&
//       x.Price <= req.params.maxPrice)
//   res.send(p)
// })

// const bodyParser = require("body-parser")
// app.use(bodyParser.json())

// app.post("/books", cors(), (req,res) => {
//   database.push(req.body);
//   res.send(database)
// })
