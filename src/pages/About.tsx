
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';

const teamMembers = [
  {
    name: "Emma Richardson",
    position: "Principal Architect",
    bio: "Emma brings over 15 years of experience in residential and commercial architecture. Her work has been recognized with numerous awards for innovation in sustainable design.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "David Chen",
    position: "Design Director",
    bio: "With a background in both architecture and industrial design, David approaches each project with a focus on materiality and craftsmanship that elevates every detail.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sophia Martinez",
    position: "Project Manager",
    bio: "Sophia excels at translating creative vision into buildable reality. Her precision and attention to detail ensure that our designs maintain their integrity throughout execution.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "James Wilson",
    position: "Environmental Design",
    bio: "James specializes in integrating passive systems and sustainable technologies into our projects, ensuring they are as environmentally responsible as they are beautiful.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const values = [
  {
    title: "Design Excellence",
    description: "We pursue design excellence in every project, balancing aesthetics with functionality and purpose."
  },
  {
    title: "Sustainable Innovation",
    description: "Our commitment to environmental responsibility drives us to pioneer sustainable solutions in all our work."
  },
  {
    title: "Client Partnership",
    description: "We view each project as a collaborative journey with our clients, built on transparent communication."
  },
  {
    title: "Contextual Sensitivity",
    description: "Our designs respond thoughtfully to their context, whether urban, rural, cultural, or historical."
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero 
        image="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
        title="About Our Studio"
        subtitle="The philosophy and people behind our architectural practice"
      />
      
      {/* Studio Philosophy */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500">Our Philosophy</span>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight">
                We believe in architecture that respects both people and planet
              </h2>
              <p className="text-gray-600">
                Founded in 2010, our studio approaches architecture as a practice that can positively transform how we live, work, and interact with our environment. We believe that thoughtful design has the power to improve lives and create spaces that inspire, comfort, and endure.
              </p>
              <p className="text-gray-600">
                Each project begins with deep research into its context—environmental, cultural, and functional. This foundation allows us to create architecture that is not only beautiful but meaningful and purposeful for those who experience it.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Our studio at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4 animate-fade-in">
              Guiding Principles
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight max-w-2xl mx-auto animate-fade-in">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-10 border border-gray-100 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4 animate-fade-in">
              Our People
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight max-w-2xl mx-auto animate-fade-in">
              Meet Our Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recognition */}
      <section className="py-24 px-6 md:px-12 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-gray-500 mb-4 animate-fade-in">
              Recognition
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight max-w-2xl mx-auto animate-fade-in">
              Awards & Publications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h3 className="font-display text-xl mb-6">Awards</h3>
              <ul className="space-y-4">
                <li>
                  <span className="block text-gray-500 text-sm">2023</span>
                  <p className="font-medium">International Architecture Award — Floating Pavilion</p>
                </li>
                <li>
                  <span className="block text-gray-500 text-sm">2022</span>
                  <p className="font-medium">Sustainable Building Award — Glass House</p>
                </li>
                <li>
                  <span className="block text-gray-500 text-sm">2021</span>
                  <p className="font-medium">Urban Design Excellence Award — Urban Center</p>
                </li>
                <li>
                  <span className="block text-gray-500 text-sm">2020</span>
                  <p className="font-medium">Residential Architecture Award — Coastal Retreat</p>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-display text-xl mb-6">Publications</h3>
              <ul className="space-y-4">
                <li>
                  <span className="block text-gray-500 text-sm">Architectural Digest, 2023</span>
                  <p className="font-medium">"The Future of Sustainable Homes"</p>
                </li>
                <li>
                  <span className="block text-gray-500 text-sm">Dezeen, 2022</span>
                  <p className="font-medium">"Transparency in Modern Architecture"</p>
                </li>
                <li>
                  <span className="block text-gray-500 text-sm">Wallpaper, 2021</span>
                  <p className="font-medium">"Redefining Urban Spaces"</p>
                </li>
                <li>
                  <span className="block text-gray-500 text-sm">Dwell, 2020</span>
                  <p className="font-medium">"Coastal Architecture that Respects Nature"</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
