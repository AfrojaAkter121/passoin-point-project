// CustomSlider.js
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaSwimmer, FaBasketballBall, FaFutbol, FaBiking } from "react-icons/fa";

const CustomSlider = () => {
  return (
    <div className="w-1/2 mx-auto">
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          pauseOnHover: true,
          interval: 4000,
        }}
      >
        {/* ===== Slide 1 ===== */}
        <SplideSlide>
          <div className="relative md:mt-0 w-full flex justify-center items-center ">
            <FaSwimmer size={30} className="absolute top-0 left-20 text-gray-400 text-xl" />
            <FaBasketballBall size={30} className="absolute top-0 right-10 text-gray-400 text-xl" />
            <FaFutbol size={30} className="absolute bottom-20 left-12 text-gray-400 text-xl" />
            <FaBiking size={30} className="absolute bottom-10 right-14 text-gray-400 text-xl" />

            <div className="relative min-w-[380px] min-h-[380px]">
              <img
                src="https://i.ibb.co/1G3pfGXY/kid-1241817-1280.jpg"
                alt="Golf"
                className="rounded-full border-4 border-white shadow-lg w-[220px] h-[220px] object-cover absolute top-0 left-34 -translate-x-1/2"
              />
              <img
                src="https://i.ibb.co/CKmR0Hpy/photographer-407068-1280.jpg"
                alt="Football"
                className="rounded-full border-4 border-white shadow-lg w-[200px] h-[200px] object-cover absolute top-28 left-40"
              />
              <img
                src="https://i.ibb.co/v6wD4s6j/read-1342499-1280.jpg"
                alt="Cycling"
                className="rounded-full border-4 border-white shadow-lg w-[180px] h-[180px] object-cover absolute top-50 left-10"
              />
            </div>
          </div>
        </SplideSlide>

        {/* ===== Slide 2 ===== */}
        <SplideSlide>
        <div className="relative mt-12 md:mt-0 w-full flex justify-center items-center ">
            <FaSwimmer size={30} className="absolute top-0 left-20 text-gray-400 text-xl" />
            <FaBasketballBall size={30} className="absolute top-0 right-10 text-gray-400 text-xl" />
            <FaFutbol size={30} className="absolute bottom-20 left-12 text-gray-400 text-xl" />
            <FaBiking size={30} className="absolute bottom-10 right-14 text-gray-400 text-xl" />

            <div className="relative min-w-[380px] min-h-[380px]">
              <img
                src="https://i.ibb.co/xSdMjbFj/received-2098320103901193.jpg"
                alt="Golf"
                className="rounded-full border-4 border-white shadow-lg w-[220px] h-[220px] object-cover absolute top-0 left-34 -translate-x-1/2"
              />
              <img
                src="https://i.ibb.co/SXjXHq5R/received-1181291449666146.jpg"
                alt="Football"
                className="rounded-full border-4 border-white shadow-lg w-[200px] h-[200px] object-cover absolute top-28 left-40"
              />
              <img
                src="https://i.ibb.co/TxjZdCWG/IMG-20240705-WA0002.jpg"
                alt="Cycling"
                className="rounded-full border-4 border-white shadow-lg w-[180px] h-[180px] object-cover absolute top-50 left-10"
              />
            </div>
          </div>
        </SplideSlide>

        {/* ===== Slide 3 ===== */}
        <SplideSlide>
        <div className="relative mt-12 md:mt-0 w-full flex justify-center items-center ">
            <FaSwimmer size={30} className="absolute top-0 left-20 text-gray-400 text-xl" />
            <FaBasketballBall size={30} className="absolute top-0 right-10 text-gray-400 text-xl" />
            <FaFutbol size={30} className="absolute bottom-20 left-12 text-gray-400 text-xl" />
            <FaBiking size={30} className="absolute bottom-10 right-14 text-gray-400 text-xl" />

            <div className="relative min-w-[380px] min-h-[380px]">
              <img
                src="https://i.ibb.co/ns5K9KXc/pexels-elly-fairytale-4543674.jpg"
                alt="Golf"
                className="rounded-full border-4 border-white shadow-lg w-[220px] h-[220px] object-cover absolute top-0 left-34 -translate-x-1/2"
              />
              <img
                src="https://i.ibb.co/84g2fL4X/pexels-kovyrina-1879288.jpg"
                alt="Football"
                className="rounded-full border-4 border-white shadow-lg w-[200px] h-[200px] object-cover absolute top-28 left-40"
              />
              <img
                src="https://i.ibb.co/V0y52Yw6/pexels-martin-erakovic-2152449792-32203758.jpg"
                alt="Cycling"
                className="rounded-full border-4 border-white shadow-lg w-[180px] h-[180px] object-cover absolute top-50 left-10"
              />
            </div>
          </div>
        </SplideSlide>

         {/* ===== Slide 4 ===== */}
         <SplideSlide>
        <div className="relative  md:mt-0 w-full flex justify-center items-center ">
            <FaSwimmer size={30} className="absolute top-0 left-20 text-gray-400 text-xl" />
            <FaBasketballBall size={30} className="absolute top-0 right-10 text-gray-400 text-xl" />
            <FaFutbol size={30} className="absolute bottom-20 left-12 text-gray-400 text-xl" />
            <FaBiking size={30} className="absolute bottom-10 right-14 text-gray-400 text-xl" />

            <div className="relative min-w-[380px] min-h-[380px]">
              <img
                src="https://i.ibb.co/gZWpFSxh/pexels-betusmusum-13350264.jpg"
                alt="Golf"
                className="rounded-full border-4 border-white shadow-lg w-[220px] h-[220px] object-cover absolute top-0 left-34 -translate-x-1/2"
              />
              <img
                src="https://i.ibb.co/RTxTBYGS/pexels-anastasia-shuraeva-4513218.jpg"
                alt="Football"
                className="rounded-full border-4 border-white shadow-lg w-[200px] h-[200px] object-cover absolute top-28 left-40"
              />
              <img
                src="https://i.ibb.co/RknF5416/pexels-cottonbro-4503737.jpg"
                alt="Cycling"
                className="rounded-full border-4 border-white shadow-lg w-[180px] h-[180px] object-cover absolute top-50 left-10"
              />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default CustomSlider;
