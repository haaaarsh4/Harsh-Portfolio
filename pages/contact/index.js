import Circles from '../../components/Circles';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validate form before sending
    const formData = new FormData(form.current);
    const firstName = formData.get('first_name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Basic validation
    if (!firstName || !email || !subject || !message) {
      toast.error('Please fill in all fields', {
        description: 'All fields are required to send a message.',
        duration: 4000,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address', {
        description: 'Please enter a valid email address.',
        duration: 4000,
      });
      return;
    }

    setButtonText('Sending...');
    setIsLoading(true);

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...', {
      description: 'Please wait while we process your request.',
    });

    try {
      const result = await emailjs.sendForm(
        'service_ggogquo',
        'template_gsl28kw',
        form.current,
        'RZfkDMwLB2LmXjf-k'
      );

      console.log('✅ Email sent successfully:', result.text);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show success toast
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
        duration: 5000,
      });

      // Reset form
      form.current.reset();
    } catch (error) {
      console.error('❌ Email send failed:', error);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show error toast with specific message
      toast.error('Failed to send message', {
        description: error.text || 'Something went wrong. Please try again or contact me directly.',
        duration: 6000,
      });
    } finally {
      setButtonText('Send');
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toaster component - place this at the root level */}
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />

      <div className="h-screen w-screen fixed top-0 left-0 bg-transparent overflow-hidden">
        <Circles />
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <div className="w-full max-w-[700px] px-4 sm:px-6" id="connect">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-8"
            >
              Let&apos;s <span className="text-accent">connect</span>
            </motion.h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 w-full"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  className="input"
                  required
                  disabled={isLoading}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input"
                  required
                  disabled={isLoading}
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="input"
                required
                disabled={isLoading}
              />

              <textarea
                placeholder="Message"
                name="message"
                className="textarea"
                required
                disabled={isLoading}
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 py-3 transition-all duration-300 flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
              >
                <span>{buttonText}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;