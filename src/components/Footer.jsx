// src/components/Footer.jsx
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-green-900 text-white text-center p-10 mt-10">
        <h1 className="text-4xl font-bold">KeenKeeper</h1>
        <p className="opacity-70">
          Your personal shelf of meaningful connections.
        </p>
      </div>

      <div className="bg-green-900 text-white text-center">
        <h3>Social Links</h3>
        <div className="flex justify-center gap-4 text-2xl py-5">
          <FaSquareInstagram />
          <FaSquareFacebook />
          <FaSquareXTwitter />
        </div>
      </div>

      <div className="flex justify-between bg-green-900 text-gray-300 py-10 px-7">
        <span>© 2026 KeenKeeper</span>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </>
  );
};

export default Footer;