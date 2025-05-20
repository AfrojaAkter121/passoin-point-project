import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-10  mt-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* App Info */}
        <div>
          <p className="text-sm">
            <span className="text-3xl">PassionPoint</span> <br/>is a platform where you can connect with others who share
            your hobbies and interests. Whether it's painting, photography,
            cooking, or gaming — you'll find a group that feels like home. Join
            a community, learn something new, and enjoy your free time doing
            what you love!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 ml-10">Quick Links</h3>
          <ul className="space-y-2 text-sm ml-10">
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Developer Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100092609836093"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-100"
            >
              <FaFacebookF />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801314381390"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-100"
            >
              <FaWhatsapp />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-100"
            >
              <FaLinkedinIn />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AfrojaAkter121"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-100"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-20 text-sm text-white">
        &copy; 2025 PassionPoint. All rights reserved.
      </p>
    </footer>
  );
}
