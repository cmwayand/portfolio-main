import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-8 sm:px-10 sm:py-10 md:py-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <a
              href="mailto:cmwayand@gmail.com"
              className="text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
            >
              cmwayand@gmail.com
            </a>
            <Link
              href="/contact"
              className="text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/clairewayand/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 transition-colors duration-300 hover:text-neutral-950"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Claire Wayand
          </p>
        </div>
      </div>
    </footer>
  );
}
