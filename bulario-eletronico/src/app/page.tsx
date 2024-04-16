"use client"
import Card from "./components/Card/index";
import Header from "./components/Header/index";
import Menu from "./components/Menu/index";

export default function Home() {
  return (
    <>
      <Menu />
      <Header />

      <div>
        <Card />
      </div>
    </>
  );
}
