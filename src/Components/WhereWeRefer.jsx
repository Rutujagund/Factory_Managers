import React, { useEffect } from 'react';

const sectors = [
  { id: 'automobile', label: 'Automobile Manufacturing', desc: 'Involves the production of cars, trucks, and other motor vehicles' },
  { id: 'electronics', label: 'Electronics Manufacturing', desc: 'The production of electrical devices smartphones, computers' },
  { id: 'textile', label: 'Textile Manufacturing', desc: 'Involves the production of fabrics, clothing, and other textile goods' },
  { id: 'chemical', label: 'Chemical Manufacturing', desc: 'Includes the production of chemicals, plastics, fertilizers, and pharmaceuticals' },
  { id: 'beverage', label: 'Beverage Manufacturing', desc: 'Covers the production and processing of food products, beverages, and packaged goods.' },
  { id: 'machinery', label: 'Machinery Manufacturing', desc: 'Construction machinery, industrial robots, and engines.' },
  { id: 'pharmaceutical', label: 'Pharmaceutical Manufacturing', desc: 'Production of medications, medical devices, and healthcare products' },
  { id: 'furniture', label: 'Furniture Manufacturing', desc: 'Production of furniture for homes, offices, and other spaces' }
];

const WhereWeRefer = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.whereWeRefer-section');
    
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
    <>
      <section className="container-fluid pt-2 bg-light whereWeRefer-section">
        <div className="container text-center mt-5 mb-5">
          <h2>Perfect For These <span style={{ color: "#7D0A0A" }}>Sectors</span></h2>

          <div className="container py-5">
            <ul className="nav nav-tabs d-none d-lg-flex" id="myTab" role="tablist">
              {sectors.map((sector, index) => (
                <li className="nav-item" role="presentation" key={sector.id}>
                  <button
                    className={`nav-link d-flex flex-column align-items-center justify-content-center ${index === 0 ? 'active' : ''}`}
                    id={`${sector.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${sector.id}`}
                    type="button"
                    role="tab"
                    aria-selected={index === 0}
                    style={{ height: '120px' }}
                  >
                    <i className="bi bi-question-circle fs-3 mb-2"></i>
                    <span>{sector.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content accordion" id="myTabContent">
              {sectors.map((sector, index) => (
                <div
                  key={sector.id}
                  className={`tab-pane fade accordion-item ${index === 0 ? 'show active' : ''}`}
                  id={sector.id}
                  role="tabpanel"
                  aria-labelledby={`${sector.id}-tab`}
                  tabIndex="0"
                >
                  <h2 className="accordion-header d-lg-none" id={`heading-${sector.id}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${sector.id}`}
                      aria-expanded={index === 0}
                      aria-controls={`collapse-${sector.id}`}
                    >
                      {sector.label}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${sector.id}`}
                    className={`accordion-collapse collapse d-lg-block ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading-${sector.id}`}
                    data-bs-parent="#myTabContent"
                  >
                    <div className="accordion-body">{sector.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhereWeRefer;
