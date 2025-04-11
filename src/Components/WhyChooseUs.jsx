import React, { useEffect } from 'react'

const WhyChooseUs = () => {
  const features = [
    { 
      icon : "fa-solid fa-gear",
      title: "Customizable Workflows",
      desc: "Tailored to your processes" 
    },
    { 
      icon : "fa-solid fa-sack-dollar",
      title: "Cost-Effective",
      desc: "Lower costs, maximize resources"
    },
    { 
      icon : "fa-solid fa-users",
      title: "Multi-User Collaboration",
      desc: "Teams work together securely" 
    },
    { 
      icon : "fa-solid fa-tty",
      title: "24/7 Support",
      desc: "Dedicated support team available anytime"
    },
  ]

  useEffect(() => {
    const sections = document.querySelectorAll('.about-section');

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

  return (
    <section className='m-5 about-section'>
      <div className='container'>
        <div className='row boxshadow bg-light'>
          <div className='col-md-12 text-center mt-4'>
            <h1>Why Choose <span style={{ color: "#7D0A0A" }}>InToIn ?</span></h1>
            <span className='lead'>Our ERP system is built for efficiency, security, and scalability.</span>
          </div>

          <div className='col-md-1'></div>

          <div className='col-md-5'>
            {features.map((item, i) => (
              <div className='row bg-white rounded py-2 ms-5 me-3 mt-3 chooseShadow' key={i}>
                <div className='col-md-3'>
                  <i className={`${item.icon} fa-2x ms-5 mt-4`} style={{ color: "#7D0A0A" }}></i>
                </div>
                <div className='col-md-9'>
                  <h5 className='mt-1'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='col-md-5'>
            <div className='headerImg'>
              <img
                src="/Images/chooseus.gif"
                alt="chooseus"
                className='mt-2'
                style={{ height: "450px", width: "90%"}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
