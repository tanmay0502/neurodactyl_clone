import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id='contacts' className="contact-container">
      <h2 className='flex justify-center my-10 '>Contact Us</h2>
      <div className="contact-line pb-20">Any question about our product or technologies?<br /> Just text us!</div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Your Phone" />
        </div>
        <div className="form-group">
          <label htmlFor="question">Your Question</label>
          <textarea rows="6" id="question" placeholder="Type your question here..."></textarea>
        </div>
        <div className='flex justify-center'>
          <div className="submit-btn flex justify-center w-40 bg-newblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10"> 
            <button className='p-2' type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;