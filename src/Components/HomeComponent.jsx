import { useFetch } from '../Hooks/useFetch'
import { useState, useEffect } from 'react';


import SwiperComponente from '../Components/SwiperComponent';
import InputSearchComponent from '../Components/InputSearchComponent';



function HomeComponent() {
    const { data, loading, error } = useFetch('https://stephen-king-api.onrender.com/api/books')
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    const [favorites, setFavorites] = useState(() => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });

    const [favoritesBooks, setFavoritesBooks] = useState(false)

    useEffect(() => {
        if (data) {
            setBooks(data.sort((a, b) => a.title.localeCompare(b.title)));
        }
    }, [data]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const filteredBooks = (input) => {
        const filtered = data.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
        setBooks(filtered)
        setSearch(input)
    }

    const changeMyFavoriteBooks = () => {
        console.log(favorites);
        if (!favoritesBooks) {
            setFavoritesBooks(!favoritesBooks)
            setBooks(books.filter(book => favorites.includes(book.id)))
            return
        }
        setFavoritesBooks(!favoritesBooks)
        setBooks(data)

    }


    const addRemoveFavorites = (event, bookId) => {
        event.preventDefault();
        if (bookIsFavorite(bookId)) {
            // Remover de favoritos
            setFavorites(favorites.filter(id => id !== bookId));
        } else {
            // Añadir a favoritos
            setFavorites([...favorites, bookId]);
        }
    };

    const bookIsFavorite = (id) => {
        return favorites.includes(id)
    }


    return (
        <>

            {loading && <li>Loading...</li>}
            <div className='flex items-center justify-center flex-col h-screen bg-[#222]'>

                <h1 className='text-white text-4xl font-bold mb-8'>Stephen King Books</h1>
                <div className='flex justify-center items-center '>
                    <InputSearchComponent search={search} filteredBooks={filteredBooks} changeMyFavoriteBooks={changeMyFavoriteBooks} favoritesBooks={favoritesBooks} />
                </div>
                <SwiperComponente books={books} addRemoveFavorites={addRemoveFavorites} bookIsFavorite={bookIsFavorite}  />

            </div>
            {error && <li>Error: {error.message}</li>}
        </>
    )
}

export default HomeComponent
