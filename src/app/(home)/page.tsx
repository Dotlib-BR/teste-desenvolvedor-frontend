import { useHome } from './useHome'

export default async function Home() {
  const { medicines } = await useHome()

  return (
    <main>
      <h1>Dotlib Farma</h1>
      {medicines.map((medicine) => {
        return (
          <ul key={medicine.id}>
            <a target='_blank' href='/pdf_sample.pdf'>
              <li>{medicine.name}</li>
            </a>
          </ul>
        )
      })}
    </main>
  )
}
