import { useFetch } from './Hooks/useFetch'
import { useState, useEffect } from 'react';

import SwiperComponente from './Components/SwiperComponent';
import InputSearchComponent from './Components/InputSearchComponent';
import BookComponent from './Components/BookComponent';


function App() {
  const { data, loading, error } = useFetch('https://stephen-king-api.onrender.com/api/books')
  const [books, setBooks] = useState([])
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState('')
  const [bookId, setBookId] = useState(null)
  useEffect(() => {
    if (data) {
      setBooks(data.sort((a, b) => a.title.localeCompare(b.title)));
    }
  }, [data]);

  const addRemoveFavorites = id => {
    const favoriteBook = books.find((book) => book.id === id)
    if (!favorites.includes(favoriteBook)) {
      setFavorites([...favorites, favoriteBook])
      return
    }

    if (favorites.includes(favoriteBook)) {
      const newFavorites = favorites.filter((book) => book.id !== id)
      setFavorites(newFavorites)
    }
  }

  const filteredBooks = (input) => {
    const filtered = data.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
    setBooks(filtered)
    setSearch(input)
  }

  const bookSelected = (id) => {
    setBookId(id)
    // console.log(id);
  }

  return (
    <>
      {loading && <li>Loading...</li>}
      <div className='flex items-center justify-center flex-col h-screen bg-[#222]'>

        <h1 className='text-white text-4xl font-bold mb-8'>Stephen King Books</h1>
        <InputSearchComponent search={search} filteredBooks={filteredBooks} />
        <SwiperComponente books={books} addRemoveFavorites={addRemoveFavorites} bookSelected={bookSelected} />


         <BookComponent bookId={bookId} />



      </div>
      {error && <li>Error: {error.message}</li>}
    </>
  )
}

export default App
