import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IMedicalRecipe } from "./utils/types/medicals-recipe.type";
import { getRecipes } from "./services/recipes.service";
import { CollapsableTable } from "./components/Table";
import { IFilterConfig } from "./utils/types/flter-config.type";
import { Filter } from "./components/Filter";

function App() {
  const [recipes, setRecipes] = useState<IMedicalRecipe[]>([]);
  const [filterConfig, setFilterConfig] = useState<IFilterConfig>({
    page: 1,
    last: 0,
    items: 0,
  });
  useEffect(() => {
    getRecipes({ page: filterConfig.page, name: "", company: "", sort:"" }).then(
      (response) => {
        setRecipes(response.data.data);
        setFilterConfig((prev) => ({
          ...prev,
          last: response.data.last,
          items: response.data.items,
        }));
      }
    );
  }, [filterConfig.page]);

  const handleFilter = (filter: { name: string; company: string, sort: string, }) => {
    getRecipes({
      page: filterConfig.page,
      name: filter.name,
      company: filter.company,
      sort: filter.sort,
    }).then((response) => {
      setRecipes(response.data.data);
      setFilterConfig((prev) => ({ ...prev }));
    });
  };

  const pagination = (page: number) => {
    setFilterConfig((prev) => ({ ...prev, page }));
  };

  return (
    <>
      <Filter submit={handleFilter}></Filter>
      <CollapsableTable
        recipes={recipes}
        filterConfig={filterConfig}
        pagination={pagination}
      ></CollapsableTable>
    </>
  );
}

export default App;
