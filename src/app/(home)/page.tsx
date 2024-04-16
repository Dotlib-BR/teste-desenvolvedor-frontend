import { MedicineProps } from '@/@types/medice'

export default async function Home() {
  const response: MedicineProps[] = await fetch(
    'http://localhost:3001/data'
  ).then((response) => response.json())

  console.log(response)

  return (
    <main>
      <h1>Dotlib Farma</h1>
      {response.map((medicine) => {
        return (
          <ul key={medicine.id}>
            <li>{medicine.name}</li>
          </ul>
        )
      })}
    </main>
  )
}
