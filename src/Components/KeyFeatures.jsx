import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const KeyFeatures = () => {
  const location = useLocation();

  const features = [
    [
      {
        icon: "fa-solid fa-calculator",
        title: "Accounting Management",
        desc: "Automate transactions, manage budgets, and generate real-time financial reports.",
        marginTop: "mt-4"
      },
      {
        icon: "fa-solid fa-file-invoice",
        title: "Invoicing & Quotation",
        desc: "Create invoices and quotations with templates and payment reminders.",
        style: { marginTop: "-30px" }
      },
      {
        icon: "fa-solid fa-money-bills",
        title: "Bill of Materials",
        desc: "Track materials, plan production, and calculate accurate product assembly costs.",
        marginTop: "mt-4"
      },
      {
        icon: "fa-solid fa-users",
        title: "Lead Generation",
        desc: "Capture, track, and convert leads with automated follow-ups and pipelines.",
        style: { marginTop: "-30px" }
      },
      {
        icon: "fa-solid fa-user",
        title: "Vendor Management",
        desc: "Maintain vendor records, track purchases, and manage procurement efficiently.",
        marginTop: "mt-4"
      }
    ],
    [
      {
        icon: "fa-solid fa-store",
        title: "Inventory & Store Management",
        desc: "Track inventory, scan barcodes, and receive alerts for low stock.",
        marginTop: "mt-4"
      },
      {
        icon: "fa-solid fa-indian-rupee-sign",
        title: "Inward & Outward Challan",
        desc: "Manage goods receipts and dispatch with automated challan generation.",
        style: { marginTop: "-30px" }
      },
      {
        icon: "fa-solid fa-truck",
        title: "Transport Management",
        desc: "Track transport, optimize delivery routes, and manage logistics costs.",
        marginTop: "mt-4"
      },
      {
        icon: "fa-solid fa-person",
        title: "Multi-User Roles & Permissions",
        desc: "Assign user roles and secure access with permission-based control.",
        style: { marginTop: "-30px" }
      },
      {
        icon: "fa-solid fa-list-check",
        title: "Track Inquiries and Orders",
        desc: "Assign tasks, track progress, and manage orders from one dashboard.",
        marginTop: "mt-4"
      }
    ],
    [
      {
        icon: "fa-solid fa-industry",
        title: "Production Planning",
        desc: "Schedule production, allocate resources, and monitor real-time work orders.",
        marginTop: "mt-4"
      },
      {
        icon: "fa-solid fa-money-check",
        title: "Reports",
        desc: "Generate detailed reports for accounting, inventory, and operational insights.",
        style: { marginTop: "-30px" }
      },
      {
        icon: "fa-brands fa-whatsapp",
        title: "WhatsApp Integration",
        desc: "Send automatic updates, invoices, and notifications via WhatsApp easily.",
        marginTop: "mt-4"
      },
      {
        image: "/Images/indiamart.png",
        title: "IndiaMART Integration",
        desc: "Sync inquiries and orders directly from IndiaMART into the system.",
        style: { marginTop: "-30px" }
      },
      {
        icon: "fa-solid fa-bars",
        title: "Expense & Budget Tracking",
        desc: "Monitor expenses, analyze budgets, and manage financial planning effectively.",
        marginTop: "mt-4"
      }
    ]
  ];

  const hiddenTitles = location.pathname === "/choukashi"
    ? ["Production Planning", "Expense & Budget Tracking"]
    : [];

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const handleScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight - 100 && rect.bottom >= 0;

        if (inView) {
          card.classList.add('card-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="keyfeatures container-fluid pb-5 mt-3">
        <div className="container bg-light border border-light py-5 px-5">
          <h1 className="text-center" style={{ marginBottom: '80px' }}>
            Key <span style={{ color: "#7D0A0A" }}>Features</span>
          </h1>
          {features.map((row, rowIndex) => (
            <div className="row text-center" key={rowIndex}>
              <div className="col-md-1"></div>
              {row.map((feature, colIndex) => {
                const shouldHide = hiddenTitles.includes(feature.title);

                return (
                  <div className="col-md-2" key={colIndex}>
                    {shouldHide ? (
                      <div className="card border-0 bg-transparent"></div>
                    ) : (
                      <div
                        className={`card cardshadow ${feature.marginTop || ''}`}
                        style={{
                          ...feature.style,
                          animationDelay: `${colIndex * 0.1}s`
                        }}
                      >
                        <div className="card-body">
                          <span>
                            {feature.icon ? (
                              <i
                                className={`${feature.icon} fa-3x`}
                                style={{ color: "#7D0A0A" }}
                              ></i>
                            ) : (
                              <img
                                src={feature.image}
                                alt="icon"
                                style={{ width: "40px" }}
                              />
                            )}
                          </span>
                          <h5 className="card-title mt-3">{feature.title}</h5>
                        </div>
                        <div className="overlay">
                          <p className="card-text ms-3 me-3">{feature.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
