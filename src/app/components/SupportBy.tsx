"use client";
import { useState } from "react";
import { Heart, ExternalLink, Building2, GraduationCap, Handshake, Sprout, Globe, Users } from "lucide-react";

export default function SupportBy() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // DATA PARTNER & PENCAPAIAN (Disesuaikan dengan KSE UINSU)
  const brands = [
    {
      name: "Yayasan Karya Salemba Empat",
      icon: <GraduationCap className="w-10 h-10 text-[#001d47]" />, // Ganti emoji dengan Icon Lucide biar rapi
      description: "Induk organisasi pemberi beasiswa dan pembinaan kepemimpinan mahasiswa.",
      website: "https://kse.or.id",
      category: "Foundation",
    },
    {
      name: "UIN Sumatera Utara",
      icon: <Building2 className="w-10 h-10 text-[#001d47]" />,
      description: "Institusi pendidikan yang menaungi pergerakan dan pengabdian kami.",
      website: "https://uinsu.ac.id",
      category: "Institution",
    },
    {
      name: "PT Musim Mas",
      icon: <Handshake className="w-10 h-10 text-[#001d47]" />,
      description: "Mitra CSR strategis dalam pengembangan program Integrated Farming & Maggot.",
      website: "#",
      category: "CSR Partner",
    },
    {
      name: "Desa Binaan Martubung",
      icon: <Users className="w-10 h-10 text-[#001d47]" />,
      description: "Lokasi implementasi program pemberdayaan masyarakat berkelanjutan.",
      website: "#",
      category: "Community",
    },
    {
      name: "Program Green House",
      icon: <Sprout className="w-10 h-10 text-[#001d47]" />,
      description: "Inovasi pertanian modern untuk ketahanan pangan mandiri.",
      website: "#",
      category: "Program",
    },
    {
      name: "Technology for Social Good",
      icon: <Globe className="w-10 h-10 text-[#001d47]" />,
      description: "Pemanfaatan teknologi tepat guna untuk solusi masalah sosial.",
      website: "#",
      category: "Innovation",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Foundation: "bg-blue-100 text-blue-700 border-blue-200",
      Institution: "bg-green-100 text-green-700 border-green-200",
      "CSR Partner": "bg-orange-100 text-orange-700 border-orange-200",
      Community: "bg-purple-100 text-purple-700 border-purple-200",
      Program: "bg-teal-100 text-teal-700 border-teal-200",
      Innovation: "bg-cyan-100 text-cyan-700 border-cyan-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  return (
    <section className="relative w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-blue-100">
            <Heart className="w-5 h-5 text-[#001d47] animate-pulse" />
            <span className="text-[#001d47] font-medium text-sm">
              Kolaborasi & Sinergi
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Partner & Program <span className="text-[#001d47]">Unggulan</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Pergerakan kami didukung oleh institusi terpercaya dan mitra strategis 
            untuk menciptakan dampak yang luas dan berkelanjutan.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div
                className={`
                relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                transition-all duration-500 ease-out
                ${
                  hoveredIndex === index
                    ? "shadow-2xl scale-105 -translate-y-2"
                    : "hover:shadow-lg hover:scale-102"
                }
              `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#001d47] rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full blur-xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Logo & Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {/* Render Icon component instead of string emoji */}
                      {brand.icon}
                    </div>
                    <span
                      className={`
                      px-3 py-1 rounded-full text-xs font-medium border
                      ${getCategoryColor(brand.category)}
                    `}
                    >
                      {brand.category}
                    </span>
                  </div>

                  {/* Brand Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#001d47] transition-colors duration-300">
                    {brand.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {brand.description}
                  </p>

                  {/* Visit Link */}
                  <div
                    className={`
                    flex items-center gap-2 text-[#001d47] font-medium text-sm
                    transform transition-all duration-300
                    ${hoveredIndex === index ? "translate-x-2" : ""}
                  `}
                  >
                    <span>Lihat Detail</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl border-2 border-[#001d47]
                  transition-opacity duration-300
                  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                `}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#001d47] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-8 w-12 h-12 bg-sky-200 rounded-full opacity-25 animate-ping"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}