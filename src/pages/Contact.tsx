
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-24">
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
  Contact us at{" "}
  <a
    href="mailto:benhaddouche.imrane@gmail.com"
    className="text-blue-600 font-semibold hover:underline"
  >
    benhaddouche.imrane@gmail.com
  </a>
  — whether you have a project in mind or just want to learn more about our work.<br />
  We'd love to hear from you! :)
</p>

          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-gray-200 focus:border-black focus:ring-0 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="border-gray-200 focus:border-black focus:ring-0 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="border-gray-200 focus:border-black focus:ring-0 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry"
                    required
                    className="min-h-[150px] border-gray-200 focus:border-black focus:ring-0 transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending</span>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span className="mr-2">Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div>
                <h2 className="font-display text-xl mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:benhaddouche.imrane@gmail.com" className="font-medium hover:underline">
                        benhaddouche.imrane@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:+213555128740" className="font-medium hover:underline">
                      +213 (555) 128 740
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Office</p>
                      <address className="not-italic font-medium">
                      A108 Adam Street<br />
                      Oran, Algeria 31000
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="font-display text-xl mb-4">Office Hours</h2>
                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Monday - Friday</td>
                      <td className="py-2 font-medium">9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Saturday</td>
                      <td className="py-2 font-medium">By appointment</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Sunday</td>
                      <td className="py-2 font-medium">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-6 md:px-12 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] w-full bg-gray-200 animate-fade-in">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12959.286840002758!2d-0.6413231!3d35.6976546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e885e97e4d8f5%3A0x363d09b8e5c4d0a1!2sOran%2C%20Algeria!5e0!3m2!1sen!2sus!4v1710182765432!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
