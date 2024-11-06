import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 text-white">
            
          </div>
          <p className="mt-4">
            Making the world a better place through constructing elegant hierarchies.
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-white" />
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-white" />
            <FaGithub className="w-5 h-5 cursor-pointer hover:text-white" />
            <FaYoutube className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Links Section */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">Marketing</a></li>
              <li><a href="#" className="">Analytics</a></li>
              <li><a href="#" className="">Automation</a></li>
              <li><a href="#" className="">Commerce</a></li>
              <li><a href="#" className="">Insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">Submit ticket</a></li>
              <li><a href="#" className="">Documentation</a></li>
              <li><a href="#" className="">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">About</a></li>
              <li><a href="#" className="">Blog</a></li>
              <li><a href="#" className="">Jobs</a></li>
              <li><a href="#" className="">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="">Terms of service</a></li>
              <li><a href="#" className="">Privacy policy</a></li>
              <li><a href="#" className="">License</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p>© TEAM 105, Inc. <span className="text-redMakit">All rights reserved.</span></p>
      </div>
    </footer>
  );
}

export default Footer;
