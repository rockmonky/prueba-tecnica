import { useFetch } from './Hooks/useFetch'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';


function App() {
  const { data, loading, error } = useFetch('https://stephen-king-api.onrender.com/api/books')
  const books = data || []
  console.log(books);


  return (
    <>
      {/* {loading && <li>Loading...</li>}
            {error && <li>Error: {error.message}</li>} */}
      <div className='flex items-center justify-center flex-col h-screen bg-[#222]'>

        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            }
          }}
          freeMode={true}
          // loop={true}
          // pagination={{ clickable: false }}
          modules={[FreeMode, Pagination]}
          className='max-w-[90%] lg:max-w-[80%]'
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className='flex flex-col gap-6 group relative shadow-lg rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/001/826/199/small_2x/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg")' }} />

                <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' >
                  <div className='relative flex flex-col gap-3 p-3'>
                    <h2 className='text-xl text-white lg:text-2xl'>{book.title}</h2>
                    <p className=' text-white lg:text-[18px]'>{book.year}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))

          }
        </Swiper>
      </div>
    </>
  )
}

export default App
