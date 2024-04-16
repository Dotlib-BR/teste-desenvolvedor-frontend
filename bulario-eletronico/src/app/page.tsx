"use client"
import Header from "../components/Header/index";
import Menu from "../components/Menu/index";
import Pagination from "@/components/PaginatedCards/index";
import Input from "@/components/Input/index";

export default function Home() {



  return (
    <>
      <Menu />
      <Header />

        <Pagination />
    </>
  );
}
