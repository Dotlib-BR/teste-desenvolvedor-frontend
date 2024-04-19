import { LeafletCollection } from "../../components";
import { Layout } from "../../components/Layout";
import { useSearchContext } from "../../../context/search-context";

export const FavoritePage = () => {
  const { leafletFavoriteCollection } = useSearchContext();

  return (
    <Layout>
      {leafletFavoriteCollection.length && (
        <LeafletCollection
          title="Meus Favoritos"
          leafletList={leafletFavoriteCollection}
        />
      )}
    </Layout>
  );
};
