import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">QFA</h3>
            <p className="text-gray-400">Creating Great Tastes in Africa</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-orange-400 transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                310A Akin Ogunlewe Street, Victoria Island, Lagos
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contact@qfafrica.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Our Brands</h4>
            <div className="flex gap-4">
              <Link
                to="https://instagram.com/krispykremeng"
                className="hover:text-orange-400 transition-colors"
              >
                <Instagram />
              </Link>
              <Link
                to="https://facebook.com/krispykremeng"
                className="hover:text-orange-400 transition-colors"
              >
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Quality Foods Africa | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
