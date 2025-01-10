import GetRecipe from "./GetRecipe"
export default function IngredientList({ ingredients }) {
  // Extract JSX element from ingredients state variable
  function extractJSX(ingredients) {
    return ingredients.map(elem => elem.jsx)
  }

  return (
    <>
      {ingredients.length > 0 && <section>
        <h2 className="ingredient-on-hand">Ingredients on hand:</h2>
        <ul className="ingredient-list-ul">{extractJSX(ingredients)}</ul>
        {ingredients.length > 3 && <GetRecipe />}
      </section>}
    </>
  )
}
