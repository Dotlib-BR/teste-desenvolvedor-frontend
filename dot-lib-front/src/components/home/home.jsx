import { useEffect } from "react";
import axios from "axios";
import { Header, Body } from "./homeStyle";
import logo from "../../assets/dotlib_logo.png"
import Medicine from "../medicine/medicine";

export default function Home(){

  // useEffect(() => {
  //   const LINK_API = "http://localhost:3000/data";
  //   const request = axios.get(LINK_API);
  //   request.then(response => {
  //     console.log(response);
  //   });
  //   request.catch(err => {
  //     console.log(err.response);
  //   });
  // }, []);

  return(<>
    <Header>
      <img src={logo} alt="Dot.Lib logo" />
    </Header>
    
    <Body>
      <Medicine></Medicine>
      <Medicine></Medicine>
      <Medicine></Medicine>
      <Medicine></Medicine>
      <Medicine></Medicine>
    </Body>

  </>);
}


