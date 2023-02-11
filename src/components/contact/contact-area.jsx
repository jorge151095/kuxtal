import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/contact-1.jpg" alt="" />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Email</h4>
                  <span><a href="mailto:(kuxtalap8283@gmail.com)">(kuxtalap8283@gmail.com)</a></span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Número telefónico</h4>
                  <span><a href="tel:(+52729-106-7620)">(+52729 - 106 - 7620)</a></span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Dirección</h4>
                  <span><a href="https://www.google.com/maps" target="blank"></a>ARZATE Y VILCHIS 300 C AZTECAS, UNION. C.P. 50040, TOLUCA CENTRO, MEX.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;