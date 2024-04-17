//lottie
import Lottie from "lottie-react";
import animation from "../../../lottie/medicine.json";

//styles
import "./style.sass";

export default function index() {
  return (
    <>
      <Lottie
        animationData={animation}
        className="Lottie"
        initialSegment={[0, 125]}
      />
    </>
  );
}
