const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");

// EJS configuration
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

// Database connection
main().then(() => console.log("Connected")).catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/PizzaPioneer');
}

// Home route
app.get("/", (req, res) => {
    res.render("listings/home.ejs");
});

// Terms and Conditions route
app.get('/terms', (req, res) => {
    res.render('listings/terms'); // Render the 'terms.ejs' file from the 'listings' directory
  });
  app.get('/about', (req, res) => {
    res.render('listings/about', { title: 'About Us' });
  });

// INDEX ROUTE
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

// SHOW ROUTE
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// ORDER ROUTE
app.get('/listings/:id/order', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/order.ejs", { listing });
});

// CONFIRM ORDER ROUTE (PUT)
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/confirm.ejs", { listing });
});

app.listen("8080", () => {
    console.log("Listening on port 8080");
});