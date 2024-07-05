// Requiring modules
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const ejsMate=require("ejs-mate");

app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"));

main().then(()=>console.log("Connected")).catch((err)=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/PizzaPioneer');;
}
// app.get("/testListing",async(req,res)=>{
//     let sampleListing=new Listing({
//     name: "Margherita",
//     description: "Classic Margherita with fresh tomatoes, mozzarella cheese, and basil",
//     price: 9.99,
//     size: "Medium",
//     crust: "Thin",
//     toppings: ["Tomatoes", "Mozzarella", "Basil"],
//     category: "Vegetarian",
//     })
//     await sampleListing.save();
//     console.log("Saved");
//     res.send("Successful testing");
// })

//INDEX ROUTE
app.get("/listings", async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index",{allListings});
    // console.log("Home");
})

//SHOW 
//Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  });

  //Order
  app.get('/listings/:id/order', async (req, res) => {
      const { id } = req.params;
      const listing = await Listing.findById(id);
      res.render("listings/order.ejs",{listing});
    //   console.log("Ordered");
    })
//put
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/confirm.ejs",{listing});
    // console.log("Confirmed");
  });

app.get("/",(req,res)=>{
    res.render("listings/home.ejs");
})
app.listen("8080",()=>{
    console.log("Listening on port 8080");
})