
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// This would normally come from an API or CMS
const projectsData = {
  "floating-pavilion": {
    title: "Floating Pavilion",
    location: "Lake Geneva, Switzerland",
    year: "2023",
    category: "Residential",
    client: "Private Client",
    area: "450 sq.m.",
    description: "This floating pavilion blends seamlessly with its natural surroundings, creating a tranquil retreat on Lake Geneva. The structure appears to hover above the water, with large glass facades that maximize views and natural light.",
    challenge: "The primary challenge was designing a structure that could withstand changing water levels while maintaining a minimal environmental footprint. We needed to balance the client's desire for expansive views with the structural requirements of a floating building.",
    solution: "We developed a modular system that allows the pavilion to adjust to seasonal water level changes. Using sustainably sourced timber and high-performance glass, we created a lightweight yet durable structure that minimizes impact on the lake ecosystem.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "glass-house": {
    title: "Glass House",
    location: "Oslo, Norway",
    year: "2022",
    category: "Residential",
    client: "Private Client",
    area: "320 sq.m.",
    description: "The Glass House is a testament to modern minimalism, designed to embrace the harsh Nordic climate while providing a warm, light-filled living space. The house is characterized by its transparent walls that create a continuous dialogue between interior and exterior.",
    challenge: "Designing a glass structure for the Nordic climate presented significant challenges in terms of thermal efficiency and privacy. We needed to consider the low winter sun angle and the midnight sun in summer.",
    solution: "We implemented triple-glazed glass with advanced thermal properties and designed a sophisticated heating system embedded in the floors. Automated shading systems respond to changing light conditions, and strategic landscaping provides natural privacy barriers.",
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "urban-center": {
    title: "Urban Center",
    location: "Tokyo, Japan",
    year: "2021",
    category: "Commercial",
    client: "Nippon Enterprises",
    area: "12,500 sq.m.",
    description: "The Urban Center is a mixed-use development that redefines vertical urban living in Tokyo. Combining retail, office, and public spaces, this tower creates a microcosm of city life within a single structure.",
    challenge: "Working within Tokyo's strict building codes and seismic requirements while creating a landmark structure on a relatively small urban footprint. The client requested maximum usable space without compromising on design quality or public amenities.",
    solution: "We developed an innovative structural system that allows for column-free spaces on the lower retail levels. Vertical gardens and sky terraces create breathing spaces throughout the tower, enhancing well-being for occupants while improving the building's environmental performance.",
    images: [
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id && projectsData[id as keyof typeof projectsData]) {
      setProject(projectsData[id as keyof typeof projectsData]);
      setLoading(false);
      
      // Preload images
      const imagePromises = projectsData[id as keyof typeof projectsData].images.map((src: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });
      
      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse w-16 h-16 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <h2 className="font-display text-2xl mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the project you're looking for.</p>
          <Link to="/projects" className="inline-block px-6 py-3 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Project Header */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/projects" className="inline-flex items-center text-sm hover:underline mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4">
                {project.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
                {project.title}
              </h1>
              <p className="text-gray-600 mb-8 max-w-md">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-1">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-600">Location</span>
                  </div>
                  <p className="font-medium">{project.location}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-600">Year</span>
                  </div>
                  <p className="font-medium">{project.year}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <User className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-600">Client</span>
                  </div>
                  <p className="font-medium">{project.client}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <span className="w-4 h-4 mr-2 flex items-center justify-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="M13 17H3v-4h10z" />
                        <path d="M13 9H3V5h10z" />
                        <path d="M21 13h-8v4h8z" />
                        <path d="M21 5h-8v4h8z" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-600">Area</span>
                  </div>
                  <p className="font-medium">{project.area}</p>
                </div>
              </div>
            </div>
            
            {/* Main Image Gallery */}
            <div className="relative overflow-hidden aspect-[4/3] animate-fade-in">
              {project.images.map((image: string, index: number) => (
                <div 
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeImage === index ? "opacity-100 visible" : "opacity-0 invisible"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - View ${index + 1}`}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700",
                      imagesLoaded ? "scale-100" : "scale-105"
                    )}
                  />
                </div>
              ))}
              
              {/* Image Navigation */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  onClick={() => setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-full hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-full hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="px-6 md:px-12 py-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-light tracking-tight mb-4">
                The Challenge
              </h2>
              <p className="text-gray-600">
                {project.challenge}
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="font-display text-2xl font-light tracking-tight mb-4">
                Our Solution
              </h2>
              <p className="text-gray-600">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-light tracking-tight mb-8 animate-fade-in">
            Project Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image: string, index: number) => (
              <div 
                key={index} 
                className="aspect-[4/3] overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => setActiveImage(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Next Project */}
      <section className="px-6 md:px-12 py-16 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4 animate-fade-in">
            Continue Exploring
          </span>
          <h2 className="font-display text-3xl font-light tracking-tight mb-8 animate-fade-in">
            Discover More Projects
          </h2>
          <Link 
            to="/projects"
            className="inline-flex items-center px-6 py-3 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors animate-fade-in"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
