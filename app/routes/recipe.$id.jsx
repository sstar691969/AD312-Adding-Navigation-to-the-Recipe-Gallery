

import { useParams, Link } from "react-router";

export default function RecipeDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Recipe Detail</h1>
      <p>Recipe ID: {id}</p>

      <h3>Cooking Instructions</h3>
      <p>Step 1: Prepare ingredients</p>
      <p>Step 2: Cook and serve</p>

      <Link to="/gallery">Back to Gallery</Link>
    </div>
  );
}