import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content Container */}
        <div className="flex justify-between items-center mb-8">
          {/* Brand Name */}
          <div className="text-2xl font-semibold">
            <span>Shopping Cart</span>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-green-500 transition">
              Home
            </a>
            <a href="/products" className="hover:text-green-500 transition">
              Products
            </a>
            <a href="/about" className="hover:text-green-500 transition">
              About
            </a>
            <a href="/contact" className="hover:text-green-500 transition">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Shopping Cart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
