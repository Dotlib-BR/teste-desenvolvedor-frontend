"use client"
import React, { useState, useEffect } from 'react';

// components
import Header from "../components/Header/index";
import Menu from "../components/Menu/index";
import Pagination from "@/components/PaginatedCards/index";
import Loader from "@/components/Loader/index";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
      setShowPagination(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showLoader && 
      <Loader />} 
      {!showLoader && (
        <> 
          <Menu />
          <Header />
          {showPagination && <Pagination />}
        </>
      )}
    </>
  );
}
