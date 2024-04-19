import { LeafletCollection } from "../../components";
import { Layout } from "../../components/Layout";
import { useSearchContext } from "../../../context/search-context";

export const FavoritePage = () => {
  const { leafletFavoriteCollection } = useSearchContext();

  return (
    <Layout>
      <LeafletCollection
        title="Meus Favoritos"
        leafletCollection={leafletFavoriteCollection}
      />
    </Layout>
  );
};
