export default function Main() {
  function handleClick() {
    let hello = document.createElement("h1")
    hello.innerText = "hello, world"
    document.getElementById("main").appendChild(hello)
  }

  return (
      <main id="main">
        <form className="add-ingredient-form">
          <input aria-label="Add ingredient" type="text" placeholder="e.g flour" />
          <button onClick={handleClick} className="add-ingredient-button">+ Add Ingredient</button>
        </form>
      </main>
    )
}
