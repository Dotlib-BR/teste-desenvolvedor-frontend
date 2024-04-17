//import styles from './page.module.css'

export default async function Home() {

 const teste = await (await fetch('http://localhost:3000/data/')).json()
 console.log(teste);
 

  return (
    <main>
      <p>WELCOME TO THE HOME!</p>      
    </main>
  )
}
