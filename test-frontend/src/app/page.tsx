"use client"
import { getDate } from "@/Utils/getdate";
import CardProduct from '@/Components/CardProduct/index'

export default function Home() {
  const { setSearch, dateInfo }: any = getDate()

  return (
    <>
      <header>
        <nav>Teste</nav>
      </header>
      <main>
        <div>
          <label htmlFor="">Procurar:</label>
          <input
            type="text"
            placeholder="Consulte aqui seu medicamento..."
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>
        {
          dateInfo && dateInfo.map((date: any) => (
            <CardProduct key={date.id} date={date} />
          ))
        }
      </main>
      <footer></footer>
    </>
  );
}