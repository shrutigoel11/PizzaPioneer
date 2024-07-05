const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const pizzaSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          : v,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      enum: ["Small", "Medium", "Large"],
      default: "Medium",
    },
    crust: {
      type: String,
      enum: ["Thin", "Regular", "Thick", "Stuffed"],
      default: "Regular",
    },
    toppings: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      enum: ["Vegetarian", "Non-Vegetarian", "Vegan"],
      default: "Vegetarian",
    },
    availability: {
      type: Boolean,
      default: true,
    },
  });
  
   const Listing=mongoose.model("Pizza", pizzaSchema);  // collection:pizzas
   module.exports=Listing
  
  