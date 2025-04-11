import React from 'react';
import "../App.css";

const GetDemo = () => {
  return (
    <>
    <section className='container py-5 mb-5 rounded backgroundimg slide-in'>
        <div>
            <div className='row'>
            <div className='col-md-4'>
                <h1 className='text-end me-3 fw-bold mt-1'> Book a free <span style={{ color: "#7D0A0A" }}>Demo</span></h1>
            </div>
            <div className='col-md-8'>
                <p className='lead fw-bold' >
                    Join the growing number of businesses using InToIn to optimize operations
                </p>
                <a href="#contact" className="btn" style={{ backgroundColor: '#7D0A0A', color: 'white' }}>
                    Get a Demo
                </a>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GetDemo;
