"use client";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  Thead,
  TableHead,
  TableBody,
  TableRow,
  TableData,
  ContainerArrowBack,
  ContainerDocuments,
} from "./styles";
import Pagination from "../Pagination";
import formatDate from "../../utils/formatDate";
import limitWords from "@/app/utils/limitWords";
import { FaArrowLeft, FaBookMedical } from "react-icons/fa";

interface Medicamento {
  id: string;
  name: string;
  published_at: string;
  active_principles: { name: string }[];
  company: string;
  documents: { id: string; type: string; url: string }[];
}

interface MedicineResultsProps {
  searchTerm: string;
}

const MedicineResults: React.FC<MedicineResultsProps> = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [data, setData] = useState<Medicamento[]>([]);
  const [findData, setFindData] = useState<Medicamento[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/data?_page=${currentPage}`
      );
      if (Array.isArray(response.data.data)) {
        setData(response.data.data);
      } else {
        console.error("A resposta da API não é um array");
      }
    } catch (error) {
      toast.error(
        "Erro ao carregar os dados. Por favor, tente novamente mais tarde."
      );
    }
  };

  const memoizedData = useMemo(() => fetchData, [currentPage]);

  useEffect(() => {
    memoizedData();
  }, [memoizedData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/data`);
        setFindData(response.data);
        setTotalItems(response.data.length);
      } catch (error) {
        toast.error(
          "Erro ao carregar os dados. Por favor, tente novamente mais tarde."
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const searchInData = () => {
      if (!searchTerm) {
        setTotalItems(findData.length);
      } else {
        const filteredData = findData.filter(
          (medicamento) =>
            medicamento.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            medicamento.company.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData);
        setTotalItems(filteredData.length);
        if (filteredData.length === 0) {
          toast.error("Nenhum resultado encontrado para o termo de pesquisa.");
        }
      }
    };

    searchInData();
  }, [searchTerm, findData]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleBackButtonClick = () => {
    if (searchTerm) {
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      {searchTerm && (
        <ContainerArrowBack>
          <FaArrowLeft
            style={{ color: "black", cursor: "pointer" }}
            onClick={handleBackButtonClick}
          />
        </ContainerArrowBack>
      )}

      {screenWidth > 575 ? (
        <Table>
          <Thead>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data de Publicação</TableHead>
              <TableHead>Princípios Ativos</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Documentos</TableHead>
            </TableRow>
          </Thead>
          <TableBody>
            {data.map((medicamento) => (
              <TableRow key={medicamento.id}>
                <TableData>{medicamento.name}</TableData>
                <TableData>{formatDate(medicamento.published_at)}</TableData>
                <TableData>
                  {medicamento.active_principles
                    .map((principio) => principio.name)
                    .join(", ")}
                </TableData>
                <TableData>{limitWords(medicamento.company, 5)}</TableData>
                <TableData className="documents">
                  {medicamento.documents.map((doc) => (
                    <ContainerDocuments key={doc.id}>
                      <FaBookMedical />
                      <a
                        key={doc.id}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {doc.type}
                      </a>
                    </ContainerDocuments>
                  ))}
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        data.map((medicamento) => (
          <Table key={medicamento.id}>
            <Thead>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Data de Publicação</TableHead>
                <TableHead>Princípios Ativos</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Documentos</TableHead>
              </TableRow>
            </Thead>
            <TableBody>
              <TableRow>
                <TableData>{limitWords(medicamento.name, 3)}</TableData>
                <TableData>{formatDate(medicamento.published_at)}</TableData>
                <TableData>
                  {medicamento.active_principles
                    .map((principio) => principio.name)
                    .join(", ")}
                </TableData>
                <TableData>{limitWords(medicamento.company, 5)}</TableData>
                <TableData className="documents">
                  {medicamento.documents.map((doc) => (
                    <ContainerDocuments key={doc.id}>
                      <FaBookMedical />
                      <a
                        key={doc.id}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {doc.type}
                      </a>
                    </ContainerDocuments>
                  ))}
                </TableData>
              </TableRow>
            </TableBody>
          </Table>
        ))
      )}

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MedicineResults;
