"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  BookOpen,
  Users,
  Phone,
  Home,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Theme colors based on route
  const getThemeColors = () => {
    if (pathname === "/belajar") {
      return {
        primary: "yellow",
        gradient: "from-yellow-500 to-yellow-600",
        gradientHover: "from-yellow-600 to-yellow-700",
        text: "from-yellow-600 to-yellow-600",
        bg: "bg-yellow-100",
        bgHover: "hover:bg-yellow-50/80",
        textHover: "hover:text-yellow-600",
        borderColor: "border-yellow-100",
        gradientOverlay: "from-yellow-400 to-yellow-500",
      };
    } else if (pathname === "/komunitas") {
      return {
        primary: "emerald",
        gradient: "from-emerald-500 to-emerald-600",
        gradientHover: "from-emerald-600 to-emerald-700",
        text: "from-emerald-600 to-emerald-600",
        bg: "bg-emerald-100",
        bgHover: "hover:bg-emerald-50/80",
        textHover: "hover:text-emerald-600",
        borderColor: "border-emerald-100",
        gradientOverlay: "from-emerald-400 to-emerald-500",
      };
    } else if (pathname === "/quiz") {
      return {
        primary: "purple",
        gradient: "from-purple-500 to-purple-600",
        gradientHover: "from-purple-600 to-purple-700",
        text: "from-purple-600 to-purple-600",
        bg: "bg-purple-100",
        bgHover: "hover:bg-purple-50/80",
        textHover: "hover:text-purple-600",
        borderColor: "border-purple-100",
        gradientOverlay: "from-purple-400 to-purple-500",
      };
    } else if (pathname === "/contact") {
      return {
        primary: "red",
        gradient: "from-red-500 to-red-600",
        gradientHover: "from-red-600 to-red-700",
        text: "from-red-600 to-red-600",
        bg: "bg-red-100",
        bgHover: "hover:bg-red-50/80",
        textHover: "hover:text-red-600",
        borderColor: "border-red-100",
        gradientOverlay: "from-red-400 to-red-500",
      };
    }

    // Default (Home) - Navy Blue Comdev
    return {
      primary: "slate",
      gradient: "from-[#001d47] to-[#00337A]",
      gradientHover: "from-[#00337A] to-[#001d47]",
      text: "from-[#001d47] to-[#001d47]",
      bg: "bg-blue-50",
      bgHover: "hover:bg-blue-100",
      textHover: "hover:text-[#001d47]",
      borderColor: "border-blue-100",
      gradientOverlay: "from-blue-400 to-blue-600",
    };
  };

  const theme = getThemeColors();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      icon: Home,
      label: "Beranda",
      href: "/",
    },
    {
      icon: BookOpen,
      label: "Belajar",
      href: "/belajar",
    },
    {
      icon: Users,
      label: "Komunitas",
      href: "/komunitas",
    },
    {
      icon: Phone,
      label: "Kontak",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[90] transition-all duration-500 ease-in-out  ${
          scrolled ? "scale-95 top-4" : "scale-100"
        }`}
      >
        <div
          className={`backdrop-blur-[1px] rounded-full px-8 py-3 bg-transparent border border-gray-200 transition-all duration-300 shadow-lg ${
            scrolled ? "py-2 bg-white/90 backdrop-blur-md" : ""
          }`}
        >
          <div className="flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              
              {/* Logo */}
              <div className="flex items-center space-x-2 pr-4">
                <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
                   <Image 
                      src="/logo-comdev.png" 
                      alt="Logo Comdev" 
                      width={40} 
                      height={40} 
                      className="object-contain"
                   />
                </div>
                <span
                  className={`font-bold text-lg bg-gradient-to-r ${theme.text} bg-clip-text text-transparent`}
                >
                  COMDEV
                </span>
              </div>

              {/* Separator */}
              <div className="w-px h-6 bg-gray-200 mx-2"></div>

              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? `${theme.bg} ${theme.textHover.replace(
                            "hover:",
                            ""
                          )} shadow-sm`
                        : `text-gray-700 ${theme.textHover} ${theme.bgHover}`
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${theme.gradientOverlay} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full`}
                    ></div>
                  </a>
                );
              })}

              {/* Separator */}
              <div className="w-px h-6 bg-gray-200 mx-2"></div>

              {/* CTA Button */}
              <a
                href="/quiz"
                className={`bg-gradient-to-r ${theme.gradient} text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap`}
              >
                Coba Quiz
              </a>
            </div>

            {/* Mobile Content (Hanya Logo dan Menu Button) */}
            <div className="md:hidden flex items-center justify-between min-w-82 ">
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 flex items-center justify-center">
                   <Image 
                      src="/logo-comdev.png" 
                      alt="Logo Comdev" 
                      width={32} 
                      height={32} 
                      className="object-contain"
                   />
                </div>
                <span
                  className={`font-bold text-lg bg-gradient-to-r ${theme.text} bg-clip-text text-transparent`}
                >
                  COMDEV
                </span>
              </div>

              {/* FIX: Hanya menampilkan Menu icon, X dipindah ke dalam Mobile Menu */}
              <button
                onClick={() => setIsOpen(true)} // Selalu set ke true untuk buka
                className={`p-2 rounded-full ${theme.bgHover} transition-colors duration-200`}
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 ${ // Z-index di-adjust
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border ${
            theme.borderColor
          } p-6 transform transition-all duration-300 max-h-[80vh] overflow-y-auto ${
            isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          {/* NEW: Tombol X di dalam Mobile Menu Header */}
          <div className="flex justify-end mb-4 -mt-2 -mr-2">
            <button
              onClick={() => setIsOpen(false)} // Menutup menu
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* END NEW BLOCK */}
          
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? `${theme.bg} ${theme.textHover.replace(
                          "hover:",
                          ""
                        )} shadow-sm`
                      : `text-gray-700 ${theme.textHover} ${theme.bgHover}`
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen
                      ? "slideInLeft 300ms ease-out forwards"
                      : "none",
                  }}
                >
                  <div
                    className={`${
                      isActive ? theme.bg : theme.bg
                    } p-2 rounded-full transition-colors duration-200`}
                  >
                    <IconComponent
                      className={`w-5 h-5 ${
                        isActive
                          ? theme.textHover.replace("hover:", "")
                          : `text-gray-500`
                      }`}
                    />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <a
              href="/quiz"
              className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-3 rounded-2xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 block text-center`}
            >
              Coba Quiz
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}