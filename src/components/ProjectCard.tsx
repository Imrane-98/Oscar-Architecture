
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  imageUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  location,
  year,
  category,
  imageUrl,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay before setting visibility to create a staggered effect
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group h-full transition-all",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        <div className="relative overflow-hidden aspect-[4/5] mb-4">
          <img
            src={imageUrl}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          <div className={cn(
            "absolute inset-0 bg-black/0 transition-all duration-500",
            isHovered ? "bg-black/10" : "bg-black/0"
          )} />
          
          <div className={cn(
            "absolute bottom-0 left-0 p-6 transform transition-all duration-500",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium">
              View Project <ArrowUpRight className="ml-1 w-3 h-3" />
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg tracking-tight">{title}</h3>
            <span className="text-gray-500 text-sm">{year}</span>
          </div>
          <p className="text-gray-600 text-sm">{location}</p>
          <p className="text-gray-500 text-xs">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
