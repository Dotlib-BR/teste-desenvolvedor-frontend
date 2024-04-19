"use client";
import { Input } from "@/components/input";
import { useState } from "react";
import { useQuery } from "react-query";
import type { Medicine } from "@/types/medicines";
import "./page.css";
import { ListMedicineItem } from "@/components/list-medicine-item";
import { Pagination } from "@/components/pagination";
import { flushSync } from "react-dom";
import { useDebounce } from "@/hooks/debounce";
import { Select } from "@/components/select";

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    name: "",
    company: "",
    page: 1,
    publishDateSort: "asc",
  });
  const { company, name, page, publishDateSort } = searchParams;
  const { data: currentPage, refetch } = useQuery<Pagination<Medicine>>({
    queryKey: ["data", page],
    enabled: true,
    queryFn: async () => {
      return fetch(
        `http://localhost:3000/data?name=${name.toUpperCase()}&company=${company.toUpperCase()}&_page=${page}&_sort=published_at&_order=${publishDateSort}`
      ).then((res) => res.json());
    },
  });

  const debouncedRefetch = useDebounce(refetch, 500);
  const onChange = (fieldKey: keyof typeof searchParams) => (value: string) => {
    flushSync(() => {
      setSearchParams((prev) => ({ ...prev, [fieldKey]: value }));
    });

    debouncedRefetch();
  };
  return (
    <main className="page-container">
      <header className="main-page-header">
        <h1>Medicamentos</h1>
        <div className="d-flex flex-row gap-sm w-full">
          <Input
            placeholder="Pesquisar por medicamento"
            onChangeValue={onChange("name")}
            value={name}
          />
          <Input
            placeholder="Pesquisar por laboratório"
            onChangeValue={onChange("company")}
            value={company}
          />
          <Select
            onChangeValue={onChange("publishDateSort")}
            options={[
              {
                value: "asc",
                label: "Publicação Crescente",
              },
              {
                value: "desc",
                label: "Publicação Decrescente",
              },
            ]}
            value={publishDateSort}
          />
        </div>
      </header>
      {currentPage && (
        <>
          <div className="d-flex flex-col flex-1 gap-sm w-full">
            {currentPage.data.map((item) => (
              <ListMedicineItem key={item.id} item={item} />
            ))}
          </div>
          <Pagination
            pagination={currentPage}
            onSelectPage={(page) =>
              setSearchParams((prev) => ({ ...prev, page }))
            }
          />
        </>
      )}
    </main>
  );
}
