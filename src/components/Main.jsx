import React from "react"
import IngredientList from "./IngredientList"
import Footer from "./Footer"

/*
 * This component is responsible for displaying the
 * ingredient list form, items, buttons, etc.
 */
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]) // Ingredient format: [{ingredient: "str", id: <int>, jsx: <elements>}]

  // Remove ingredient from list
  function handleRemoveIngredient(event) {
    event.preventDefault();

    const id = parseInt(event.target.id)
    setIngredients(prev => {
      const newArr = prev.filter(elem => elem.id !== id)
      return newArr
    })
  }

  // Handle the form submit and add ingredient to list
  function handleSubmit(event) {
    event.preventDefault()

    setIngredients(prev => {
      return [...prev, {
        ingredient: event.target.elements.ingredient.value,
        id: prev.length,
        jsx: 
          <div key={"item" + prev.length} className="ingredient-list-div">
            <li
            key={"list" + prev.length}
            className="ingredient-list-item">{event.target.elements.ingredient.value.trim()}</li>

            <button
            key={"button" + prev.length}
            id={prev.length}
            onClick={handleRemoveIngredient}
            className="ingredient-remove-button">Remove Ingredient</button>
          </div>
      }]
    })

  }

  return (
      <main id="main">
        <form onSubmit={handleSubmit} className="ingredient-add-form">
          <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g flour"
          name="ingredient"
          required/>
          <button className="ingredient-add-button">+ Add Ingredient</button>
        </form>
        <IngredientList ingredients={ingredients} />
        <Footer />
      </main>
    )
}
