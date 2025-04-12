import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer backgroundimg mt-auto py-4 bg-info text-dark">
      <div className="container text-center text-md-start">
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} InToIn. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
