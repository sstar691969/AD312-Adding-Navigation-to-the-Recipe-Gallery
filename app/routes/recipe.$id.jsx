
import { useParams, Link } from "react-router";
import { recipes } from "../data/recipes"; // adjust path if needed

export default function RecipeDetail() {
  const { id } = useParams();

  // find the matching recipe
  const recipe = recipes.find((r) => r.id === Number(id));

  // safety check
  if (!recipe) {
    return (
      <div>
        <h1>Recipe not found</h1>
        <Link to="/gallery">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>

      <img src={recipe.image} alt={recipe.title} width="300" />

      <h3>Cooking Instructions</h3>
      <p>Step 1: Prepare ingredients</p>
      <p>Step 2: Cook and serve</p>

      <br />

      <Link to="/gallery">Back to Gallery</Link>
    </div>
  );
}