import React, { useEffect, useRef } from 'react';
import '../App.css'

const FactoryManagers = () => {

  const factoyrManagersFeatures = [
      {
        icon: "fa-solid fa-calculator",
        title: "Accounting Management",
        desc: "Automate transactions, manage budgets, and generate real-time financial reports.",
      },
      {
        icon: "fa-solid fa-file-invoice",
        title: "Invoicing & Quotation",
        desc: "Create invoices and quotations with templates and payment reminders.",
      },
      {
        icon: "fa-solid fa-money-bills",
        title: "Bill of Materials",
        desc: "Track materials, plan production, and calculate accurate product assembly costs.",
      },
      {
        icon: "fa-solid fa-users",
        title: "Lead Generation",
        desc: "Capture, track, and convert leads with automated follow-ups and pipelines.",
      },
      {
        icon: "fa-solid fa-user",
        title: "Vendor Management",
        desc: "Maintain vendor records, track purchases, and manage procurement efficiently.",
      },
      {
        icon: "fa-solid fa-store",
        title: "Inventory & Store Management",
        desc: "Track inventory, scan barcodes, and receive alerts for low stock.",
      },
      {
        icon: "fa-solid fa-indian-rupee-sign",
        title: "Inward & Outward Challan",
        desc: "Manage goods receipts and dispatch with automated challan generation.",
      },
      {
        icon: "fa-solid fa-truck",
        title: "Transport Management",
        desc: "Track transport, optimize delivery routes, and manage logistics costs.",
      },
      {
        icon: "fa-solid fa-person",
        title: "Multi-User Roles & Permissions",
        desc: "Assign user roles and secure access with permission-based control.",
      },
      {
        icon: "fa-solid fa-list-check",
        title: "Track Inquiries and Orders",
        desc: "Assign tasks, track progress, and manage orders from one dashboard.",
      },
      {
        icon: "fa-solid fa-industry",
        title: "Production Planning",
        desc: "Schedule production, allocate resources, and monitor real-time work orders.",
      },
      {
        icon: "fa-solid fa-money-check",
        title: "Reports",
        desc: "Generate detailed reports for accounting, inventory, and operational insights.",
      },
      {
        icon: "fa-solid fa-bars",
        title: "Expense & Budget Tracking",
        desc: "Monitor expenses, analyze budgets, and manage financial planning effectively.",
      },
      {
        image: "/Images/whatsapp.png",
        title: "WhatsApp Integration",
        desc: "Send automatic updates, invoices, and notifications via WhatsApp easily.",
      },
      {
        image: "/Images/indiamart.png",
        title: "IndiaMART Integration",
        desc: "Sync inquiries and orders directly from IndiaMART into the system.",
      },
  ];

    const cardsRef = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
        }
      );
  
      cardsRef.current.forEach(card => {
        if (card) observer.observe(card);
      });
  
      return () => {
        cardsRef.current.forEach(card => {
          if (card) observer.unobserve(card);
        });
      };
    }, []);

  return (
    <>
    <section className='keyfeatures container bg-light p-5 mt-5'>
      <div className='row'>
        <div className='disableMobile col-md-4'>
          <h1>
            One <span style={{ color: "#7D0A0A" }}>ERP</span> Solution to <span style={{ color: "#7D0A0A" }}>Manage Your Entire Business</span>
          </h1>
          <img
            src="/Images/FactoryManagers_logo.png"
            alt="choukashi"
            style={{ height: "200px",width: "100%",marginLeft: "-30px" }}
          />
          <p className='lead'>
            A comprehensive ERP solution designed to streamline operations, improve productivity, and manage your entire business efficiently and intelligently.
          </p>
        </div>
        <div className='col-md-8'>
          <h1 className="mobile-title d-block d-sm-none text-center mb-3">
            Key <span style={{ color: "#7D0A0A" }}></span>Features
          </h1>
          <div className="row">
            {factoyrManagersFeatures.map((feature, index) => (
              <div className="col-lg-3 col-md-4 mb-4" key={index}>
                <div
                  className="choukashicard card"
                  ref={el => (cardsRef.current[index] = el)}
                >
                  <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {feature.icon ? (
                        <i className={`${feature.icon} fa-2x`} style={{ color: "#7D0A0A" }}></i>
                      ) : (
                        <img src={feature.image} alt="icon" style={{ width: "40px" }} />
                      )}
                    </div>
                    <h6 className="card-title text-center mt-3">{feature.title}</h6>
                    <div className="overlay d-none d-md-flex">
                      <p className="card-text text-center" style={{ textAlign: 'justify', lineHeight:"1.1" }}>{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FactoryManagers