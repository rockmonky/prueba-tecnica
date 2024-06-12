
import { useState, useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'

export default function BookComponent({ bookId }) {
    const { data, loading, error } = useFetch(bookId ? `https://stephen-king-api.onrender.com/api/book/${bookId}` : null)
    const [book, setBook] = useState(null)

    useEffect(() => {
        if (data) {
            setBook(data)
        }
    }, [data])

    if (!bookId) {
        return <li>Please select a book.</li>; // Mensaje cuando no hay un bookId seleccionado
    }

    return (
        <>
            {loading && <li>Loading...</li>}
            {error && <li>Error: {error.message}</li>}
            {book && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-8 rounded-lg'>
                        <h2 className='text-2xl font-bold mb-4'>{book.Title}</h2>

                    </div>
                </div>
            )}
        </>
    )
}