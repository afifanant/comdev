"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  // Twitter dihapus, import TikTok tidak ada di lucide jadi kita buat manual
} from "lucide-react";
import Image from "next/image";

// Komponen Icon TikTok Custom (SVG) - Versi TypeScript
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0b1120] text-white py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo Image */}
              <div className="bg-white p-1.5 rounded-full w-10 h-10 flex items-center justify-center">
                 <Image 
                    src="/logo-comdev.png" 
                    alt="Logo Comdev" 
                    width={32} 
                    height={32} 
                    className="object-contain"
                 />
              </div>
              <span className="font-bold text-xl tracking-tight">Comdev KSE UINSU</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Divisi Community Development KSE UINSU. Berkomitmen memberdayakan masyarakat 
              melalui inovasi sosial, edukasi lingkungan, dan ekonomi sirkular yang berkelanjutan.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/comdev_kseuinsu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#001d47] hover:text-white transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Facebook (Updated URL & Tag) */}
              <a 
                href="https://www.facebook.com/comdev_kseuinsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#001d47] hover:text-white transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* TikTok (New & Custom Icon) */}
              <a 
                href="https://www.tiktok.com/@comdev_kseuinsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#001d47] hover:text-white transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Menu Utama</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                  Beranda
                </a>
              </li>
              <li>
                <a href="/belajar" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                  Edukasi
                </a>
              </li>
              <li>
                <a href="/komunitas" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                  Program Kami
                </a>
              </li>
              <li>
                <a href="/quiz" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                  Kuis Interaktif
                </a>
              </li>
            </ul>
          </div>

{/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Hubungi Kami</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-500 group-hover:text-blue-400" />
                <span className="group-hover:text-gray-300 transition-colors">
                  UIN Sumatera Utara,<br/>
                  Medan, Indonesia
                </span>
              </div>
              
              {/* FIX: ICON EMAIL DIUBAH MENJADI LINK MAILTO: */}
              <a 
                href="mailto:pkseuinsucomdev@gmail.com"
                className="flex items-center space-x-3 group cursor-pointer"
                target="_blank" // Buka di tab baru (meskipun mailto, ini praktik standar)
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <span className="group-hover:text-gray-300 transition-colors">pkseuinsucomdev@gmail.com</span>
              </a>

              {/* FIX: ICON TELEPON JUGA HARUS JADI LINK TEL: */}
              <a 
                href="tel:+6282361464415"
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <span className="group-hover:text-gray-300 transition-colors">+62 823-6146-4415</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Comdev KSE UINSU. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <span className="text-red-500 animate-pulse">💙</span> for Community Impact
          </p>
          <p className="mt-4 text-xs opacity-50">
            Developed by Afif Ananta & Team
          </p>
        </div>
      </div>
    </footer>
  );
}