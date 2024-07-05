const pizzaData = [
    {
      name: "Margherita",
      description: "Classic Margherita with fresh tomatoes, mozzarella cheese, and basil",
      image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTN8fHxlbnwwfHx8fHw%3D",
      price: 9.99,
      size: "Medium",
      crust: "Thin",
      toppings: ["Tomatoes", "Mozzarella", "Basil"],
      category: "Vegetarian",
      availability: true
    },
    {
      name: "Pepperoni",
      description: "Classic Pepperoni pizza with spicy pepperoni slices and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDh8fHxlbnwwfHx8fHw%3D",
      price: 11.99,
      size: "Large",
      crust: "Regular",
      toppings: ["Pepperoni", "Mozzarella"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "Vegetarian Supreme",
      description: "Loaded with assorted vegetables like bell peppers, onions, olives, and mushrooms",
      image: "https://images.unsplash.com/photo-1618213957768-7789409b9dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D",
      price: 12.99,
      size: "Medium",
      crust: "Regular",
      toppings: ["Bell Peppers", "Onions", "Olives", "Mushrooms"],
      category: "Vegetarian",
      availability: true
    },
    {
      name: "BBQ Chicken",
      description: "Tender chicken pieces marinated in BBQ sauce, topped with mozzarella cheese",
      image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fHw%3D",
      price: 13.99,
      size: "Large",
      crust: "Thick",
      toppings: ["BBQ Chicken", "Mozzarella"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "Supreme",
      description: "A combination of pepperoni, sausage, bell peppers, onions, and black olives",
      image: "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8fHw%3D",
      price: 14.99,
      size: "Large",
      crust: "Regular",
      toppings: ["Pepperoni", "Sausage", "Bell Peppers", "Onions", "Black Olives"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "Hawaiian",
      description: "Sweet pineapple chunks, ham, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D",
      price: 11.99,
      size: "Medium",
      crust: "Thin",
      toppings: ["Pineapple", "Ham", "Mozzarella"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "Four Cheese",
      description: "Mozzarella, cheddar, parmesan, and provolone cheeses",
      image: "https://images.unsplash.com/photo-1627461985459-51600559fffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fHw%3D",
      price: 12.99,
      size: "Medium",
      crust: "Regular",
      toppings: ["Mozzarella", "Cheddar", "Parmesan", "Provolone"],
      category: "Vegetarian",
      availability: true
    },
    {
      name: "Meat Lovers",
      description: "A hearty pizza with pepperoni, sausage, bacon, and ham",
      image: "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fHw%3D",
      price: 13.99,
      size: "Large",
      crust: "Thick",
      toppings: ["Pepperoni", "Sausage", "Bacon", "Ham"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "Mushroom and Olive",
      description: "Fresh mushrooms, black olives, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      price: 11.99,
      size: "Medium",
      crust: "Thin",
      toppings: ["Mushrooms", "Black Olives", "Mozzarella"],
      category: "Vegetarian",
      availability: true
    },
    {
      name: "Buffalo Chicken",
      description: "Spicy buffalo chicken, blue cheese dressing, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1609159085964-e47ec0804449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODd8fHxlbnwwfHx8fHw%3D",
      price: 13.99,
      size: "Large",
      crust: "Regular",
      toppings: ["Buffalo Chicken", "Blue Cheese", "Mozzarella"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "Spinach and Feta",
      description: "Fresh spinach, feta cheese, garlic, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzR8fHxlbnwwfHx8fHw%3D",
      price: 12.99,
      size: "Medium",
      crust: "Thin",
      toppings: ["Spinach", "Feta Cheese", "Garlic", "Mozzarella"],
      category: "Vegetarian",
      availability: true
    },
    {
      name: "BBQ Beef",
      description: "Tender beef slices marinated in BBQ sauce, red onions, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fHw%3D",
      price: 14.99,
      size: "Large",
      crust: "Thick",
      toppings: ["BBQ Beef", "Red Onions", "Mozzarella"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "White Pizza",
      description: "Ricotta cheese, garlic, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1589477500339-82aeb8718167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTJ8fHxlbnwwfHx8fHw%3D",
      price: 11.99,
      size: "Medium",
      crust: "Regular",
      toppings: ["Ricotta Cheese", "Garlic", "Mozzarella"],
      category: "Vegetarian",
      availability: true
    },
    {
      name: "Sausage and Mushroom",
      description: "Savory sausage, fresh mushrooms, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
      price: 12.99,
      size: "Large",
      crust: "Regular",
      toppings: ["Sausage", "Mushrooms", "Mozzarella"],
      category: "Non-Vegetarian",
      availability: true
    },
    {
      name: "Buffalo Cauliflower",
      description: "Crispy cauliflower florets tossed in spicy buffalo sauce and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTF8fHxlbnwwfHx8fHw%3D",
      price: 12.99,
      size: "Medium",
      crust: "Thin",
      toppings: ["Buffalo Cauliflower", "Mozzarella"],
      category: "Vegetarian",
      availability: true
    },
  ];
  
  module.exports = {data:pizzaData};
  