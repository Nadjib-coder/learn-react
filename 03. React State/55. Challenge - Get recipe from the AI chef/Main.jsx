import React from 'react';
import { useState } from 'react';
import IngredientsList from './components/IngredientsList';
import ClaudeRecipe from './components/ClaudeRecipe';
import { getRecipeFromMistral } from './ai';

/** Challage
 * Using the `getRecipeFromMistral` function, make it so that
 * when the user clicks "Get a recipe", the text response from the AI
 * is displayed in the <ClaudeRecipe> component.
 */

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
