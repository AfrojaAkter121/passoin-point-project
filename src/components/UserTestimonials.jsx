import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    id: 1,
    name: "Sara Ahmed",
    group: "Photography Club",
    message: "I’ve found my true creative family here!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Nayeem Khan",
    group: "Tech Enthusiasts",
    message: "The events and members helped me grow fast!",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 3,
    name: "Tania Akter",
    group: "Art Circle",
    message: "Amazing community full of positive energy.",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 4,
    name: "Rashed Mia",
    group: "Gaming Zone",
    message: "Made great friends while gaming together.",
    avatar: "https://i.pravatar.cc/150?img=22",
  },
  {
    id: 5,
    name: "Anika Jahan",
    group: "Writers Hub",
    message: "Love sharing my poems and stories here.",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    id: 6,
    name: "Sajid Rahman",
    group: "Music Circle",
    message: "A perfect place to jam and learn!",
    avatar: "https://i.pravatar.cc/150?img=26",
  },
  {
    id: 7,
    name: "Tanvir Alam",
    group: "Fitness Freaks",
    message: "Motivated me to stay consistent and healthy.",
    avatar: "https://i.pravatar.cc/150?img=28",
  },
  {
    id: 8,
    name: "Mou Nasrin",
    group: "Art Circle",
    message: "I improved my sketching skills so much!",
    avatar: "https://i.pravatar.cc/150?img=30",
  },
];

const TestimonialCard = ({ user }) => (
  <div className="bg-teal-800 border-2 border-dotted border-teal-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 m-4 min-w-[280px] max-w-[320px]">
    <div className="flex items-center gap-4 mb-3">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-16 h-16 rounded-full border-2 border-teal-50"
      />
      <div>
        <h3 className="font-semibold text-gray-100">{user.name}</h3>
        <p className="text-sm text-gray-50">Member of {user.group}</p>
      </div>
    </div>
    <FaQuoteLeft className="text-white mb-2" />
    <p className="text-gray-100 text-sm">“{user.message}”</p>
  </div>
);

const UserTestimonials = () => {
  return (
    <section data-aos="zoom-in-up" className="bg-white py-16 px-4 my-18 rounded-2xl">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
        Member Stories
      </h2>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {testimonials.slice(0, 3).map((user) => (
          <TestimonialCard key={user.id} user={user} />
        ))}
      </div>

      {/* Marquee View */}
      <Marquee
        pauseOnHover
        speed={50}
        gradient={false}
        className="max-w-7xl mx-auto"
      >
        {testimonials.slice(3).map((user) => (
          <TestimonialCard key={user.id} user={user} />
        ))}
      </Marquee>
    </section>
  );
};

export default UserTestimonials;
