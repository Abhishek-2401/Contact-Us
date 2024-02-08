import React from 'react';
import '../styles.css';
import { PhoneCall, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="background-container">
      <div className="background-image">
        <div className="overlay-div lg:ml-20 md:ml-10 sm:ml-10">

          <div className="section">
            <h2>Contact us today</h2>
          </div>

          <div className="call-email-section flex ">
            <div className="contact-info flex items-center text-white">
              <PhoneCall className="mr-2 mb-6 text-white w-5 h-5" />
              <div>
                <h3>Call</h3>
                <p>+91 9087 6543 21</p>
              </div>
            </div>

            <div className="contact-info email flex items-center text-white">
              <Mail className="mr-2 mb-6 text-white w-5 h-5" />
              <div>
                <h3>Email ID</h3>
                <p>campfly@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="request-call-section text-white mt-2">
            <h3>Want us to call you?</h3>
            <div className="flex items-start flex-col sm:flex-row sm:items-start sm:space-x-5">
              <textarea className="w-35 p-1 border bg-transparent border-white text-white rounded-lg resize-none" rows="1" placeholder="Full name"></textarea>
              <select className="w-35 sm:w-auto p-1 border bg-transparent border-white text-white rounded-lg mt-2 sm:mt-0">
                <option value="+1">+91</option>
              </select>
              <textarea className="w-35 p-1 border bg-transparent border-white text-white rounded-lg resize-none mt-2 sm:mt-0" rows="1" placeholder="1234 5678 90"></textarea>
              <button className="w-full sm:w-auto bg-custom-green text-black px-2 py-1 mt-2 sm:mt-0 flex items-center rounded-lg hover:bg-black hover:text-[#1ed760]">
                <PhoneCall className="mr-2 text-black w-5 h-5 hover:text-[#1ed760]" />
                Request a call back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
