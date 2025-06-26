import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white pt-16 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* App Info */}
        <div className="space-y-4">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-block"
          >
            <HiOutlineSparkles size={40} className="text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold">PassionPoint</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            PassionPoint is a platform where you can connect with others who share
            your hobbies and interests. Whether it’s painting, photography, cooking,
            or gaming — you’ll find a group that feels like home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline hover:text-teal-200 transition duration-200">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-teal-200 transition duration-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-teal-200 transition duration-200">
                Developer Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/profile.php?id=100092609836093",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/8801314381390",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/yourprofile",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/AfrojaAkter121",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-white p-2 rounded-full text-teal-800 hover:bg-teal-700 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} PassionPoint. All rights reserved.
      </p>
    </footer>
  );
}
