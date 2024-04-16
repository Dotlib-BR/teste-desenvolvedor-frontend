import { useEffect } from "react";
import { getData } from "../../services/axios";

export const Medicine = () => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <>medicine;</>
  )
}