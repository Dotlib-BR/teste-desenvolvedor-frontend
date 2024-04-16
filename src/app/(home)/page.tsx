import { useHome } from './useHome'

export default async function Home() {
  const { medicines } = await useHome()

  return (
    <main>
      <h1>Dotlib Farma</h1>
      {medicines.map((medicine) => {
        return (
          <ul key={medicine.id}>
            <li>{medicine.name}</li>
          </ul>
        )
      })}
    </main>
  )
}
