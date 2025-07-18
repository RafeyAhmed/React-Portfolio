import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-5 px-4">
      <div className="container text-center">
        <h2 className="display-4 mb-4">Contact Me</h2>
        <p className="mb-5">Feel free to reach out for collaborations, freelance work, or just a chat.</p>
        
        <form className="contact-form mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <p className='fs-6'>&#9432; Email service is not working.</p>
          <button type="submit" className="btn btn-dark px-4">Send</button>
        </form>
      </div>
    </section>
  );
}
