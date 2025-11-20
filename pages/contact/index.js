import Circles from '../../components/Circles';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {BsArrowRight} from 'react-icons/bs'

import {motion} from 'framer-motion'

import {fadeIn} from '../../variants'

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const form = useRef();

  const sendEmail = async (e) => {
      e.preventDefault();
  
      setButtonText("Sending...");
  
      try {
          const result = await emailjs.sendForm('service_ggogquo', 'template_gsl28kw', form.current, 'RZfkDMwLB2LmXjf-k');
          console.log(result.text);
          form.current.reset(); // Reset the form
      } catch (error) {
          console.log(error.text);
      }
  
      setButtonText("Send");
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-transparent overflow-hidden">
      <Circles />
      <div className="relative z-10 h-full w-full flex items-center justify-center"> 
        <div className="w-full max-w-[700px] px-4 sm:px-6" id="connect">
          <motion.h2 
            variants={fadeIn('up',0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="h2 text-center mb-8">
            Let&apos;s <span className="text-accent">connect</span>
          </motion.h2>
          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="flex flex-col gap-6 w-full">
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="First Name" name="first_name" className="input"/>
              <input type="text" placeholder="Email" name="email" className="input"/>
            </div>
            <input type="text" placeholder="subject" className="input"/>
            <textarea placeholder="Message" name="message" className="textarea">
            </textarea>
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto">
              <span>{buttonText}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;