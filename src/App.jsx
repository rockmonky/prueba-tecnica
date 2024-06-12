import { useState } from 'react'
import { useFetch } from './Hooks/useFetch'


function App() {
  const { data, loading, error } = useFetch('https://stephen-king-api.onrender.com/api/books')
  const books = data?.data || []
  console.log(books);


  return (
    <>
      <div>
        <h1>Sthephen King Books</h1>
        <div>
          <ul>
            {loading && <li>Loading...</li>}
            {error && <li>Error: {error.message}</li>}
            {books.map((book) => (
              <li key={book.id}>
                <h2>{book.Title}</h2>
                <p>{book.synopsis}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
