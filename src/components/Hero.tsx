
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [image]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Calculate parallax effect
  const translateY = scrollPosition * 0.2;
  const opacity = 1 - Math.min(1, scrollPosition / 700);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 bg-gray-900">
        <img
          ref={imageRef}
          src={image}
          alt="Hero background"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0",
            "animate-image-zoom"
          )}
          style={{ transform: `translateY(${translateY}px)` }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text content */}
      <div 
        className="relative h-full flex flex-col justify-center items-center text-center text-white px-6"
        style={{ opacity }}
      >
        <div className={cn(
          "transition-all duration-1000 delay-300",
          isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
        )}>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-shadow-lg mb-6 max-w-4xl">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto text-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center space-y-2 transition-all",
          isLoaded ? "opacity-100" : "opacity-0",
          scrollPosition > 100 ? "opacity-0" : "opacity-100"
        )}
      >
        <span className="text-xs font-medium tracking-wider">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </div>
  );
};

export default Hero;
