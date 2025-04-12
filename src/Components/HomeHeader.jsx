import React, { useEffect, useState } from 'react';
import '../App.css'; 

const HomeHeader = () => {
  const fullText = "All-in-One ERP Solution";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeout;

    const type = () => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
        timeout = setTimeout(type, 100);
      } else {
        setTimeout(() => {
          index = 0;
          setTypedText('');
          type();
        }, 4000);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [fullText]);

  return (
    <section className="home-header-section">
      <img
        src="/Images/erp-system-1.gif"
        alt="ERP Background"
        className="home-header-bg"
      />
      <div className="home-header-overlay" />
      <div className="home-header-content text-white text-center">
        <h1 className="display-1 fw-bold">{typedText}</h1>
        <p className="lead mt-3">
          Streamline your business with accounting, invoicing, inventory, and more.
        </p>
      </div>
    </section>
  );
};

export default HomeHeader;
