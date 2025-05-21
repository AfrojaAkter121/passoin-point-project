import { FaUsers, FaHeart, FaLightbulb } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const AboutHobbyHub = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="my-16 px-4 py-12 bg-white text-center rounded-xl shadow-xl max-w-5xl mx-auto">
      <h2
        className="text-4xl font-bold text-teal-700 mb-4"
        data-aos="fade-up"
      >
        About HobbyHub
      </h2>

      <p
        className="text-gray-600 max-w-2xl mx-auto text-lg mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        HobbyHub is a vibrant community platform where individuals come together
        to share, explore, and grow their hobbies. From art and tech to fitness
        and food—this is your space to connect and thrive!
      </p>

      <div
        className="grid md:grid-cols-3 gap-6 items-center justify-center mb-10"
        data-aos="zoom-in-up"
      >
        <div className="flex flex-col items-center space-y-2">
          <FaUsers className="text-4xl text-purple-600" />
          <p className="font-semibold text-gray-700">Connect with People</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaHeart className="text-4xl text-pink-500" />
          <p className="font-semibold text-gray-700">Follow Your Passion</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaLightbulb className="text-4xl text-yellow-500" />
          <p className="font-semibold text-gray-700">Grow Your Skills</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 max-w-6xl" data-aos="fade-up" data-aos-delay="150">
        <img
          src="https://i.ibb.co/1G3pfGXY/kid-1241817-1280.jpg"
          alt="People enjoying hobbies together"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src="https://i.ibb.co/1G3pfGXY/kid-1241817-1280.jpg"
          alt="People enjoying hobbies together"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src="https://i.ibb.co/1G3pfGXY/kid-1241817-1280.jpg"
          alt="People enjoying hobbies together"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default AboutHobbyHub;
