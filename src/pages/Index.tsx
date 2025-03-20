
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "floating-pavilion",
    title: "Floating Pavilion",
    location: "Lake Geneva, Switzerland",
    year: "2023",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "glass-house",
    title: "Glass House",
    location: "Oslo, Norway",
    year: "2022",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "urban-center",
    title: "Urban Center",
    location: "Tokyo, Japan",
    year: "2021",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
];

const testimonials = [
  {
    quote: "Their attention to detail and understanding of our vision transformed our space beyond expectation.",
    author: "Sarah Johnson",
    position: "CEO, Modern Living"
  },
  {
    quote: "Working with STUDIO was a revelation. They balance aesthetics and functionality like no other.",
    author: "Michael Chen",
    position: "Real Estate Developer"
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero 
        image="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
        title="Creating thoughtful spaces that inspire and endure"
        subtitle="Award-winning architecture studio focused on sustainable modern design"
      />
      
      {/* Introduction Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500">Our Approach</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight">
                Design is not just what it looks like. Design is how it works.
              </h2>
              <p className="text-gray-600">
                Our studio approaches each project with a dedication to understanding the unique context, requirements, and opportunities. We believe that exceptional architecture emerges from a deep engagement with both the physical environment and the human experience.
              </p>
              <Link to="/about" className="inline-flex items-center text-sm font-medium hover:underline">
                Learn more about our philosophy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Our design approach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="mb-6 md:mb-0">
              <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4">
                Selected Works
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center text-sm font-medium hover:underline">
              View all projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight max-w-2xl mx-auto">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-10 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <blockquote className="text-xl md:text-2xl font-display font-light italic mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4 animate-fade-in">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-6 animate-fade-in">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-gray-600 mb-8 animate-fade-in">
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
            </p>
            <Link 
              to="/contact"
              className="inline-block px-6 py-3 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors animate-fade-in"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
