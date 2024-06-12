import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

import { RxArrowTopRight, RxHeart } from 'react-icons/rx'

function SwiperComponente({ books, addRemoveFavorites, bookSelected }) {
  return (
    <>

      {books.length === 0 && <h1 className='text-white text-2xl'>No se encontraron libros</h1>}

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        // loop={true}
        // pagination={{ clickable: false }}
        modules={[FreeMode, Pagination]}
        className='max-w-[90%] lg:max-w-[80%]'
      >
        {books.map((book) => (
          <SwiperSlide key={book.id} onClick={() => bookSelected(book.id)} >


            <div className='flex flex-col gap-6 group relative shadow-lg rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
              <div className='absolute inset-0 bg-cover bg-center' style={{ background: 'black' }} />
              {/* backgroundImage: `url(${stephenImage})` */}

              <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
              <div className='relative flex flex-col gap-3 p-3'>
                <h2 className='text-xl text-white lg:text-2xl'>{book.title.toUpperCase()}</h2>
                <p className=' text-white lg:text-[18px] text-shadow-md'>{book.publisher}</p>
                <p className=' text-white lg:text-[18px]'>{book.isbn}</p>
                <p className=' text-white lg:text-[18px]'>{book.year}</p>
              </div>

              <button onClick={() => addRemoveFavorites(book.id)} >
                <RxHeart className='absolute top-5 right-5 w-[35px] h-[35px] text-white group-hover:text-[#f5f5f5]' />
              </button>

              <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-[#f5f5f5] group-hover:rotate-45 transition-all duration-100' />
            </div>

          </SwiperSlide>
        ))

        }
      </Swiper >
    </>
  );
}

export default SwiperComponente;