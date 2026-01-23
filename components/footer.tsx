import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image 
              src="/flockr.png" 
              alt="Flockr Labs" 
              width={160} 
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600">
              Flockr Labs LLC - Making technology simple and affordable for small businesses and entrepreneurs. Big tech experience, small business focus.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <p className="text-gray-600 text-sm">Flockr Labs LLC</p>
            <p className="text-gray-600 text-sm mt-2">
              <a href="mailto:flockr@flockrlabs.com" className="hover:text-blue-600 transition-colors">
                flockr@flockrlabs.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Flockr Labs LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
