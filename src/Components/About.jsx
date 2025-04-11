import React, { useEffect } from 'react';
import "../App.css";

const About = () => {

  const cardData = [
    {
      title: "What we Value",
      text: "At Factory InToIn, we value innovation, efficiency, and simplicity creating smart, user-friendly ERP solutions built on integrity, transparency, and customer success.",
      image: "/Images/values.png"
    },
    {
      title: "Our Mission",
      text: "To empower factories and manufacturing businesses with a smart, integrated ERP solution that simplifies operations, improves productivity, and drives sustainable growth.",
      image: "/Images/mission.png"
    },
    {
      title: "Our Vision",
      text: "To become the leading ERP platform for end-to-end factory management, enabling businesses of all sizes to digitally transform their operations with ease and confidence.",
      image: "/Images/vision.png"
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('.about-section, .whereWeRefer-section');
  
    const handleScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
  
        if (inView) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible'); 
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    document.querySelectorAll('.about-section, .whereWeRefer-section');  

  return (
    <>
      <section className='container pb-5 about-section'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='headerImg'>
              <img className='w-100' src='/Images/erpdev.png' alt='erp' />
            </div>
          </div>
          <div className='col-md-7'>
            <h1 className='mt-5'>About <span style={{color: "#7D0A0A"}}>InToIn</span></h1>
            <p className='text-lg'>
              InToIn is an all-in-one ERP solution designed to streamline and optimize factory operations from start to finish. At the core of our company's values lies an unwavering commitment to customer focus. We prioritize cultivating strong connections and fostering a customer-centric approach, ensuring that every individual and entity connected to our ecosystem experiences sustained growth. This dedication reflects our belief that success is not only measured by our achievements but also by the collective prosperity of those we serve. 
            </p>
          </div>
        </div>
      </section>

      <section className='whereWeRefer-section'>
        <div className='container bg-light'>
          <div className='row'>
            {cardData.map((item, index) => (
              <div className='col-md-4 py-4' key={index}>
                <div
                  className="text-center h-100 px-3"
                  style={{
                    borderRight: index < cardData.length - 1 ? "6px solid white" : "none"
                  }}
                >
                  <img
                    className="mx-auto d-block"
                    src={item.image}
                    alt={item.title}
                    style={{ height: "45%", width: "40%" }}
                  />
                  <div className="mt-4">
                    <h4 className="fw-bold">{item.title}</h4>
                    <p className="lead fw-medium me-3" style={{ fontSize: "0.95rem" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default About