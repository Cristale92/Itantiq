import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // In a real application, you would send this data to your backend
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help. Reach out to our team using the contact information below or fill out the form.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-gray-700 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">123 Design Street, Milan, Italy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-gray-700 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@pamono.it</p>
                    <p className="text-gray-600">support@pamono.it</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-gray-700 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+39 123 456 7890</p>
                    <p className="text-gray-600">Monday-Friday, 9am-6pm CET</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Our Hours</h3>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-2">Monday - Friday</td>
                      <td className="py-2">9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Saturday</td>
                      <td className="py-2">10:00 AM - 4:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Thank you for your message!</h3>
                  <p>We've received your inquiry and will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Returns">Returns</option>
                      <option value="Shipping">Shipping</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Visit Our Showroom</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            {/* In a real application, you would embed a Google Map here */}
            <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What is your shipping policy?</h3>
              <p className="text-gray-600">
                We offer worldwide shipping. Delivery times vary depending on your location and the type of product. For standard items, delivery within Europe typically takes 3-5 business days, while international shipping may take 7-14 business days.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can I return or exchange an item?</h3>
              <p className="text-gray-600">
                Yes, we accept returns within 14 days of delivery. The item must be in its original condition and packaging. Please note that custom or made-to-order items cannot be returned unless they are defective.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer interior design services?</h3>
              <p className="text-gray-600">
                Yes, we offer professional interior design consultations. Our team of experienced designers can help you select the perfect pieces for your space and provide comprehensive design solutions. Contact us for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;