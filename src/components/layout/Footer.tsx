"use client"; 

import { Feather, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-muted dark:bg-card">
      <div className="container py-8 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center items-center space-x-2 mb-4 md:mb-0">
            <Feather className="h-5 w-5 text-primary" />
            {currentYear !== null ? (
              <p className="text-sm text-muted-foreground font-headline">
                &copy; {currentYear} María S. Panadero. All rights reserved.
              </p>
            ) : (
              // Placeholder while waiting for client-side hydration
              <p className="text-sm text-muted-foreground font-headline h-5 animate-pulse w-48 bg-muted-foreground/20 rounded"></p>
            )}
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="mailto:maria.s.panadero@example.com" aria-label="Email María" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="María's LinkedIn profile" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            {/* Add other social links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
