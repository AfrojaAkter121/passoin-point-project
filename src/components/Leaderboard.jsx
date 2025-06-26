import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import bgImage from "../assets/pexels-shyshynyc-671906.jpg"


const leaders = [
  {
    id: 1,
    name: "Rafi",
    points: 120,
    img: "https://i.pravatar.cc/100?img=22",
    group: "Tech Explorers",
    level: "Platinum",
    joined: "2021",
    role: "Web Developer",
  },
  {
    id: 2,
    name: "Mou",
    points: 110,
    img: "https://i.pravatar.cc/100?img=23",
    group: "Art Club",
    level: "Gold",
    joined: "2022",
    role: "UI Designer",
  },
  {
    id: 3,
    name: "Rashed",
    points: 98,
    img: "https://i.pravatar.cc/100?img=24",
    group: "Gaming Zone",
    level: "Silver",
    joined: "2021",
    role: "Game Dev",
  },
  {
    id: 4,
    name: "Sajid",
    points: 105,
    img: "https://i.pravatar.cc/100?img=25",
    group: "Music Circle",
    level: "Gold",
    joined: "2023",
    role: "Sound Editor",
  },
  {
    id: 5,
    name: "Anika",
    points: 112,
    img: "https://i.pravatar.cc/100?img=26",
    group: "Writers Hub",
    level: "Platinum",
    joined: "2022",
    role: "Content Creator",
  },
  {
    id: 6,
    name: "Nabil",
    points: 101,
    img: "https://i.pravatar.cc/100?img=27",
    group: "Photography Club",
    level: "Gold",
    joined: "2021",
    role: "Photo Blogger",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Leaderboard = () => {
  return (
    <section
       className="relative py-20 px-4 bg-cover bg-center rounded-2xl shadow-xl"
      style={{ backgroundImage: `url(${bgImage})`, borderRadius: "20px" }}
    >
      <div className="absolute rounded-2xl inset-0 bg-[rgba(0,0,0,0.2)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-white text-center">
        <h2 className="text-4xl font-bold mb-3">Top Contributors</h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
          Our most active hobbyists who help the community grow with creativity,
          collaboration, and consistency.
        </p>

        <Slider {...settings} className="px-4 relative z-10 overflow-visible">
          {leaders.map((leader, index) => (
            <div key={leader.id} className="px-3 overflow-visible mt-10">
              <div  className={`bg-white relative text-teal-700 rounded-xl p-6 shadow-xl min-h-[200px] transition-all duration-300 ${
                  index % 2 === 0 ? "-mt-6" : "mt-6"
                }`}>
                <FaQuoteLeft className="text-orange-400 text-2xl absolute top-4 left-4" />

                <p className="text-sm italic mb-4 mt-6">
                  “{leader.group} has helped me grow both professionally and
                  personally. Being a {leader.level} member is an honor.”
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-14 h-14 rounded-full border-4 border-teal-500"
                  />
                  <div>
                    <h3 className="text-base font-semibold">{leader.name}</h3>
                    <p className="text-xs text-gray-500">
                      {leader.role} • {leader.joined}
                    </p>
                    <div className="flex gap-1 text-yellow-400 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Badge bottom right */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full text-white ${
                    leader.level === "Platinum"
                      ? "bg-teal-600"
                      : leader.level === "Gold"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                >
                  {leader.level}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Leaderboard;
