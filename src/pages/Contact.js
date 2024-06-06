import React, { useState } from 'react';
import "../css/Contact.css"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('hello');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your server
    // For now, we'll just simulate a successful submission
    try {
      // Simulate form submission
      setStatus('Your message was sent successfully. Thank you!');
    } catch (error) {
      setStatus('Oopsie...message not sent.');
    }
  };

  return (
    <div id="contact-form">
        <div className='contact_main'>
      <div>
        <h1>Nice to Meet You!</h1>
        <h3>Have a question or just want to get in touch? Let's chat.</h3>
      </div>
      {status && <p id={status.includes('Oopsie') ? 'failure' : 'success'}>{status}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            {/* <span className="required">Name: *</span> */}
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Your Name"
              required
              tabIndex="1"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            {/* <span className="required">Email: *</span> */}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Your Email"
              required
              tabIndex="2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="subject">
            <span>Subject</span>
            <select
              id="subject"
              name="subject"
              tabIndex="4"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="hello">Just to Say hello</option>
              <option value="Freelancing work">Any freelancing work</option>
              <option value="Job">A job roll for me</option>
              <option value="suggestion">Any Suggestion for my work and portfolio</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="message">
            {/* <span className="required">Message: *</span> */}
            <textarea
              id="message"
              name="message"
              placeholder="Please write your message here."
              required
              tabIndex="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button name="submit" type="submit" id="submit">SEND</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
