import { ColorRing } from "react-loader-spinner";
import { LoaderContainer } from "./Styles";
import { useContext } from "react";
import { LoaderContext, LoaderContextType } from "../../contexts/Loader";

export const Loader = () => {
  const { loading } = useContext(LoaderContext) as LoaderContextType

  return (
    <LoaderContainer $display={loading}>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="color-ring-loading"
        colors={['#26bb5a', '#26bb5a', '#26bb5a', '#26bb5a', '#26bb5a']}
      />
    </LoaderContainer>
  )
} 