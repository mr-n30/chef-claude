import recipes from "../recipes/recipes.js"
import { marked } from "marked"
import { useState } from "react"

export default function GetRecipe() {
  const [recipe, setRecipe] = useState("")

  function getRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setRecipe(marked.parse(recipes[randomIndex]))
  }

  return (
    <div className="generated-recipe-container">
      <button onClick={getRecipe} className="recipe-generate-button">Get Recipe</button>
      <div className="generated-recipe" dangerouslySetInnerHTML={{ __html: recipe }} /> 
    </div>
  )
}

