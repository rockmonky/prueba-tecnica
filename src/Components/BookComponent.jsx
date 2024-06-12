
import { useState, useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'

export default function BookComponent({ bookId, onClose, children }) {
    const { data, loading, error } = useFetch(bookId ? `https://stephen-king-api.onrender.com/api/book/${bookId}` : null)
    const [book, setBook] = useState(null)


    useEffect(() => {
        if (data) {
            setBook(data)
            console.log(book);
        }
    }, [data])

    if (!bookId) {
        return <li>Please select a book.</li>; // Mensaje cuando no hay un bookId seleccionado
    }

    return (
        <>
            {loading ? <li>Loading...</li> : book && (
                <div className='py-2'>
                    <h2>{book.Title}</h2>
                    <p>Año: {book.Year}</p>
                    <p>ISBN: {book.ISBN}</p>
                    <p>Publicado: {book.Publisher}</p>
                </div>
            )}

            <button onClick={() => setIsModalOpen(true)}>Mostrar Modal</button>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <p>Aquí va la información que quieres mostrar en el modal.</p>
                </Modal>
            )}
            <div className="modal-backdrop">
                <div className="modal-content">
                    {children}
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </>
    )
}