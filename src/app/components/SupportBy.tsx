"use client";
import { useState } from "react";
import { 
  Heart, 
  ExternalLink, 
  Building2, 
  GraduationCap, 
  Handshake, 
  Sprout, 
  School, // Icon untuk Bank Sampah SD
  Fish    // Icon untuk Eco Lele
} from "lucide-react";

export default function SupportBy() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // DATA PARTNER & PROGRAM KERJA (Disesuaikan dengan Progja Comdev)
  const brands = [
    {
      name: "Yayasan Karya Salemba Empat",
      icon: <GraduationCap className="w-10 h-10 text-[#001d47]" />,
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
      description: "Mitra CSR strategis dalam pengembangan program pemberdayaan masyarakat.",
      website: "https://musimmas.com", 
      category: "CSR Partner",
    },
    // --- PROGJA COMDEV ---
    {
      name: "Bank Sampah SD",
      icon: <School className="w-10 h-10 text-[#001d47]" />,
      description: "Program edukasi pemilahan sampah dan literasi ekonomi untuk siswa Sekolah Dasar binaan.",
      website: "#",
      category: "Education",
    },
    {
      name: "Eco Lele & Maggot BSF",
      icon: <Fish className="w-10 h-10 text-[#001d47]" />,
      description: "Budidaya lele bioflok terintegrasi dengan pakan alternatif maggot (Black Soldier Fly).",
      website: "#",
      category: "Integrated Farming",
    },
    {
      name: "Perkebunan Berkomdev",
      icon: <Sprout className="w-10 h-10 text-[#001d47]" />,
      description: "Optimalisasi lahan untuk pertanian organik dan ketahanan pangan mandiri masyarakat.",
      website: "#",
      category: "Agriculture",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      // Warna Partner
      Foundation: "bg-blue-100 text-blue-700 border-blue-200",
      Institution: "bg-indigo-100 text-indigo-700 border-indigo-200",
      "CSR Partner": "bg-orange-100 text-orange-700 border-orange-200",
      
      // Warna Progja
      "Education": "bg-teal-100 text-teal-700 border-teal-200",
      "Integrated Farming": "bg-lime-100 text-lime-700 border-lime-200",
      "Agriculture": "bg-green-100 text-green-700 border-green-200",
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
            Sinergi antara mitra strategis dan program kerja nyata untuk menciptakan 
            dampak berkelanjutan bagi masyarakat dan lingkungan.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brands.map((brand, index) => (
            <a
              key={brand.name}
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div
                className={`
                relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                transition-all duration-500 ease-out h-full
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
                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo & Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {brand.description}
                  </p>

                  {/* Visit Link */}
                  <div
                    className={`
                    flex items-center gap-2 text-[#001d47] font-medium text-sm mt-auto
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
            </a>
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