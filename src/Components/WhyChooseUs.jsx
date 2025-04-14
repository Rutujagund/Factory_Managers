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
            <p className='lead'>Our ERP system is built for efficiency, security, and scalability.</p>
          </div>

          <div className='col-md-1 d-none d-md-flex'></div>

          <div className='col-md-5'>
          {features.map((item, i) => (
            <div className='row bg-white rounded py-2 m-2 chooseShadow' key={i}>
              <div className='col-12 d-block d-md-none text-center'>
                <div className='d-flex justify-content-center align-items-center'>
                  <i className={`${item.icon} fa-lg`} style={{ color: "#7D0A0A" }}></i>
                  <h5 className='mb-2'>{item.title}</h5>
                </div>
              </div>

              <div className='col-md-3 d-none d-md-block text-center'>
                <i className={`${item.icon} fa-2x`} style={{ color: "#7D0A0A" }}></i>
              </div>
              <div className='col-md-9 d-none d-md-block'>
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
