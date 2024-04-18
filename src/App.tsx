import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IMedicalRecipe } from "./utils/types/medicals-recipe.type";
import { getRecipes } from "./services/recipes.service";
import { CollapsableTable } from "./components/Table";

function App() {
  const [recipes, setRecipes] = useState<IMedicalRecipe[]>([]);
  useEffect(() => {
    getRecipes().then((response) => {
      setRecipes(response.data)}
  )
  }, []);
  return (
    <>
    
      <CollapsableTable recipes={recipes}></CollapsableTable>
    </>
  );
}

export default App;
