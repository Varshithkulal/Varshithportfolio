import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    // Reset the error message
    setError('');

    // Prepare the email data
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs.send('service_dkr2chw', 'template_xjdq5gq', templateParams, 'oO8ADJ2i3DkElI0hT')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error('Failed to send email. Error:', error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 bg-black-500 p-6 rounded-lg shadow-lg">
        <h1 className='flex items-center justify-center text-white-500 font-semibold text-2xl'>Get In Touch</h1>
        
        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Name */}
        <div className="mt-4 space-y-2">
          <label htmlFor="name" className='mr-8'>Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-80 px-3 py-1 border rounded-md outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="mt-4 space-y-2">
          <label htmlFor="email" className='mr-8'>Email<span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 px-3 py-1 border rounded-md outline-none"
            required
          />
        </div>

        {/* Message */}
        <div className="mt-4 space-y-2">
          <label htmlFor="message" className='mr-1'>Message<span className="text-red-500">*</span></label>
          <textarea
            id="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-80 px-3 py-1 border rounded-md outline-none"
            rows="4"
            required
          />
        </div>

        {/* Button */}
        <div className="flex justify-around mt-6">
          <button type="submit" className="bg-green-400 text-white rounded-md px-3 py-1">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
