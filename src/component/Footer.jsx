import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Services</header>
          <Link className="link link-hover">Food</Link>
          <Link className="link link-hover">Home delivery</Link>
          <Link className="link link-hover">Orders</Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
            foodBangla <br />
            Providing reliable service since 2011
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebook className="text-4xl text-blue-400" />
            </Link>
            <Link>
              <FaTwitter className="text-4xl text-blue-400" />
            </Link>
            <Link>
              <FaLinkedinIn className="text-4xl text-blue-400" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
