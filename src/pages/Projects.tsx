
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

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
  {
    id: "minimalist-villa",
    title: "Minimalist Villa",
    location: "Mallorca, Spain",
    year: "2022",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cultural-museum",
    title: "Cultural Museum",
    location: "Berlin, Germany",
    year: "2021",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1541772912386-a3ca5474ea3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    location: "Big Sur, California",
    year: "2020",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1518986089805-5b7e9d7feeed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
];

const Projects = () => {
  const categories = [...new Set(projects.map(project => project.category))];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero 
        image="https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
        title="Our Projects"
        subtitle="A curated selection of our most significant works"
      />
      
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4 animate-fade-in">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight animate-fade-in">
              Selected Works
            </h2>
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
    </main>
  );
};

export default Projects;
