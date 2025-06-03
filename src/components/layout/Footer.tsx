import { Feather, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted dark:bg-card">
      <div className="container py-8 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center items-center space-x-2 mb-4 md:mb-0">
            <Feather className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground font-headline">
              &copy; {new Date().getFullYear()} María S. Panadero. All rights reserved.
            </p>
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
