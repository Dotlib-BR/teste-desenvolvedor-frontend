"use client";
import Image from "next/image";
import react from "react";
import { ContainerHeader, TitleHeader } from "./styles";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <ContainerHeader className="bg-white shadow">
      <Image src={logo} alt="Logo" width={300} height={300} />
    </ContainerHeader>
  );
}
