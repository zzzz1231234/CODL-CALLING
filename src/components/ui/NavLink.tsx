import React from 'react';
import { Diamond, X } from 'lucide-react';

interface NavLinkProps {
  name: string;
  href: string;
}

export function NavLink({ name, href }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors group"
    >
      <Diamond className="w-2 h-2 text-neon-green transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span>{name}</span>
      <X className="w-3 h-3 text-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}