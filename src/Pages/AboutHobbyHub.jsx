import { FaUsers, FaHeart, FaLightbulb } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const AboutHobbyHub = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const categories = [
    {
      name: "Drawing & Painting",
      description:
        "Express your creativity through colors and strokes, bringing ideas to life on canvas.",
    },
    {
      name: "Photography",
      description:
        "Capture moments and tell visual stories through the lens of your camera.",
    },
    {
      name: "Video Gaming",
      description:
        "Immerse yourself in virtual worlds and challenge your skills in dynamic gameplay.",
    },
    {
      name: "Fishing",
      description:
        "Relax by the water while honing patience and skill to catch the perfect fish.",
    },
    {
      name: "Running",
      description:
        "Boost your endurance and clear your mind with every step, one mile at a time.",
    },
    {
      name: "Reading",
      description:
        "Dive into worlds of imagination and knowledge through pages of inspiring books.",
    },
  ];

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

      <div className=" px-5 max-w-6xl" data-aos="fade-up" data-aos-delay="150">
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">Hobby Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-teal-600"
          >
            <h3 className="text-xl font-semibold mb-3 text-teal-600">
              {cat.name}
            </h3>
            <p className="text-gray-600 flex-1">{cat.description}</p>
            {/* Optional: Add an icon or image here */}
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default AboutHobbyHub;
