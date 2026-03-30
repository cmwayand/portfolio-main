import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a 
              href="mailto:cmwayand@gmail.com" 
              className="text-gray-700 hover:text-[#0E4D88] transition-colors duration-300"
            >
              cmwayand@gmail.com
            </a>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-[#0E4D88] transition-colors duration-300"
            >
              Contact
            </Link>
            <a 
              href="https://www.linkedin.com/in/clairewayand/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#0E4D88] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Claire Wayand
          </p>
        </div>
      </div>
    </footer>
  );
}
