import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="grid place-items-center text-richblack-100 text-3xl h-full">
      <div className="flex gap-4">
        <p>Contact Me @: -</p>
        <button>
          <Link to="https://www.instagram.com/luxprajapati_/">
            <FaInstagram />
          </Link>
        </button>
        <button >
          <FaXTwitter />
        </button>
        <button>
          <Link to="https://www.linkedin.com/in/luxprajapati">
            <FaLinkedin />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Contact;
