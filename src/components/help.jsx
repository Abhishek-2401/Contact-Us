
import React from 'react';
import '../styles.css';
import { PhoneCall } from 'lucide-react';

const Help = () => {
  return (
    <div className="help-container">
   
      <div className="left-heading ml-24 mt-10">
        <h2 className="text-3xl font-bold mb-2">How can we help?</h2>
      </div>

     
      <div className="flex flex-wrap justify-center md:justify-start ml-24 space-x-5 md:space-x-12 mt-5">
      
        <div className="card mb-8 w-full md:w-1/2 lg:w-1/5">
          <div className="card-1 w-full h-60 rounded-lg" />
          <div className="pt-2">
            <h3 className="text-xl font-semibold mb-2">Honeymoon Package</h3>
            <p className="text-gray-500 text-sm mb-4">We're Here to Assist You! Contact Us Whenever You Need Help.</p>
            <div className="flex items-center">
              <PhoneCall className="mr-2 text-black-400" />
              <p className="text-black-500 font-semibold text-lg">+91 9087 6543 21</p>
            </div>
          </div>
        </div>

        
        <div className="card mb-8 w-full md:w-1/2 lg:w-1/5">
          <div className="card-2 w-full h-60 border-none rounded-lg" />
          <div className="pt-2">
            <h3 className="text-xl font-semibold mb-2">Family/Friends</h3>
            <p className="text-gray-500 text-sm mb-4">We're Here to Assist You! Contact Us Whenever You Need Help.</p>
            <div className="flex items-center">
              <PhoneCall className="mr-2 text-black-400" />
              <p className="text-black-500 font-semibold text-lg">+91 9087 6543 21</p>
            </div>
          </div>
        </div>

     
        <div className="card mb-8 w-full md:w-1/2 lg:w-1/5">
          <div className="card-3 w-full h-60 border-none rounded-lg" />
          <div className="pt-2">
            <h3 className="text-xl font-semibold mb-2">Adventure</h3>
            <p className="text-gray-500 text-sm mb-4">We're Here to Assist You! Contact Us Whenever You Need Help.</p>
            <div className="flex items-center">
              <PhoneCall className="mr-2 text-black-400" />
              <p className="text-black-500 font-semibold text-lg">+91 9087 6543 21</p>
            </div>
          </div>
        </div>

        
        <div className="card mb-8 w-full md:w-1/2 lg:w-1/5">
          <div className="card-4 w-full h-60 border-none rounded-lg" />
          <div className="pt-2">
            <h3 className="text-xl font-semibold mb-2">Solo</h3>
            <p className="text-gray-500 text-sm mb-4">We're Here to Assist You! Contact Us Whenever You Need Help.</p>
            <div className="flex items-center">
              <PhoneCall className="mr-2 text-black-400" />
              <p className="text-black-500 font-semibold text-lg">+91 9087 6543 21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
