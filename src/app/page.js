"use client"
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event.target[0].files[0].name)
    let body = new FormData()
    for (const file of event.target[0].files) {
      body.append('file',file,file.name)
    }
    

    const response = await fetch("http://127.0.0.1:8000/load_documents", {
      method: "POST",
      body: body,
    })
    
    const data = await response.json()

    console.log({data})
  }
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <input type='file' name="test_files" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
