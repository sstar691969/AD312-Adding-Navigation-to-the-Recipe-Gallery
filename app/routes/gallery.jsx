

import { Link } from "react-router";

const recipes = [
  { id: 1, title: "Pasta", image: "/pasta.jpg" },
  { id: 2, title: "Burger", image: "/burger.jpg" },
];

export default function Gallery() {
  return (
    <div>
      <h1>Recipe Gallery</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div>
              <img src={recipe.image} width="120" />
              <p>{recipe.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}