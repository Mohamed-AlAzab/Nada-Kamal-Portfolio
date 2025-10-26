'use client';

import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function ContactSection() {
	const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I\'ll get back to you soon.');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full mb-4">
              <Mail className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Let's Create Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and see how we can collaborate
            </p>
          </div>

          <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a href="mailto:eshranada71@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-800">eshranada71@gmail.com</p>
                    </div>
                  </a>

                  <a href="http://www.linkedin.com/in/nada-eshra" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="font-medium text-gray-800">Connect with me</p>
                    </div>
                  </a>

                  {/* <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-400 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <p className="font-medium text-gray-800">View my work</p>
                    </div>
                  </a> */}
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-100">
                <p className="text-gray-600 italic">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="text-pink-600 font-medium mt-2">— Steve Jobs</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};