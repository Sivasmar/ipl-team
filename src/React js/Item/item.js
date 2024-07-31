import React from 'react';
import OrderList from '../orderlist/orderlist';
import "./items.css"// Import the CSS fil
import UnorderList from '../orderlist/unorder';
const Items = {  
  "recipes": [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "tags": [
        "Pizza",
        "Italian"
      ],
      "userId": 166,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,
      "reviewCount": 98,
      "mealType": [
        "Dinner"
      ]
    },
  ]
};

function Card() {
  return (
    <div className="App">
      <h1 className='recipes'>RECIPES</h1>
      <div className="cards-container">
        {Items["recipes"].map((recipe, index) => (
          <div className="card" key={index}>
            <img src={recipe.image} alt={recipe.name} />
            <div className="info">
              <h1>{recipe.name}</h1>
              <p>ID: {recipe.id}</p>
              <p>Ingredients: <OrderList array={recipe["ingredients"]}/></p>
              <p>Instructions: <UnorderList array={recipe["0instructions"]}/></p>
              <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
              <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
              <p>Servings: {recipe.servings}</p>
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Difficulty: {recipe.difficulty}</p>
              <p>Calories per Serving: {recipe.caloriesPerServing}</p>
              <p className="tags">Tags: {recipe.tags.join(', ')}</p>
              <p>User ID: {recipe.userId}</p>
              <p>Rating: {recipe.rating}</p>
              <p>Review Count: {recipe.reviewCount}</p>
              <p className="mealType">Meal Type: {recipe.mealType.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;