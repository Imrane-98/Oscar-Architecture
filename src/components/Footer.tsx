
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, X, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="space-y-4">
            <h3 className="font-display text-xl">Oscar Niemeyer</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Creating spaces that inspire, connect, and transform the way we live and work.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg">Contact</h3>
            <p className="text-gray-600 text-sm">benhaddouche.imrane@gmail.com</p>
            <p className="text-gray-600 text-sm">+213 (555) 128 740</p>
            <address className="text-gray-600 text-sm not-italic">
            A108 Adam Street<br />
            Oran, Algeria 31000
            </address>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/imrane.ben" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-black">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/imrane_ben98" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-600 hover:text-black">
              <X className="w-5 h-5" />
              </a>

              <a href="https://www.linkedin.com/in/imranebenhaddouche/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-black">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:benhaddouche.imrane@gmail.com" aria-label="Email" className="text-gray-600 hover:text-black">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-black-500 text-xs">
            <b>© 2025 Imrane Benhaddouche. All rights reserved.</b>
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-black text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-black text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
