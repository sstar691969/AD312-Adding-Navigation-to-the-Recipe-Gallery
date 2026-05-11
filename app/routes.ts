
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("gallery", "routes/gallery.jsx"),
  route("recipe/:id", "routes/recipe.$id.jsx"),
];