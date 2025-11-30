"use client";
import { Star, Quote, MessageSquare } from "lucide-react";
import { useState } from "react";
import TargetCursor from "../rb/TargetCursor/TargetCursor";

export default function Testimonials() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // DATA TESTIMONI REALISTIS (COMDEV CONTEXT)
  const testimonials = [
    {
      name: "Pak Suryadi",
      role: "Warga Desa Binaan",
      content:
        "Program budidaya maggot dari Comdev KSE UINSU sangat membantu kami para peternak lele. Biaya pakan jadi lebih hemat dan sampah organik di desa kami berkurang drastis.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=anisa",
      color: "navy",
      location: "Martubung, Medan",
    },
    {
      name: "Anisa Putri",
      role: "Relawan Mahasiswa",
      content:
        "Bergabung di Comdev bukan cuma soal pengabdian, tapi belajar leadership nyata. Melihat langsung dampak ekonomi sirkular bagi warga adalah pengalaman tak ternilai.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=suryadi",
      color: "blue",
      location: "Mahasiswa UINSU",
    },
    {
      name: "Ibu Hartini",
      role: "Ketua PKK",
      content:
        "Edukasi pemilahan sampah yang diberikan sangat mudah dipraktikkan. Sekarang ibu-ibu di sini jadi lebih kreatif mengolah barang bekas menjadi kerajinan bernilai jual.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=hartini",
      color: "navy",
      location: "Desa Binaan",
    },
  ];

  // Logic Warna (Disederhanakan ke Palet Biru)
  const getColorClasses = (color: string) => {
    const colorMap = {
      navy: {
        bg: "bg-white",
        text: "text-[#001d47]",
        border: "border-blue-100",
        stackBg: "bg-[#001d47]",
        stackBorder: "border-[#001d47]",
        iconBg: "bg-[#001d47]",
        quoteBg: "bg-blue-50",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        stackBg: "bg-blue-600",
        stackBorder: "border-blue-600",
        iconBg: "bg-blue-600",
        quoteBg: "bg-white",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.navy;
  };

  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden bg-gray-50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-6xl mx-auto">
        {isHovering && (
          <TargetCursor spinDuration={3} hideDefaultCursor={true} />
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-blue-100">
            <MessageSquare className="w-5 h-5 text-[#001d47] animate-pulse" />
            <span className="text-[#001d47] font-medium text-sm">Kata Mereka</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Dampak Nyata di <br/>
            <span className="text-[#001d47]">Masyarakat</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cerita inspiratif dari warga desa binaan, mitra, dan relawan yang telah merasakan manfaat dari program Community Development kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colors = getColorClasses(testimonial.color);
            const floatDelay = `${index * 0.5}s`;

            return (
              <div
                key={index}
                className={`group cursor-target relative cursor-pointer transform hover:rotate-0 transition-all duration-500`}
                style={{
                  animation: `float 6s ease-in-out infinite ${floatDelay}`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Stack effect layers (Card tumpuk di belakang) */}
                <div
                  className={`absolute inset-0 ${colors.stackBg} border ${colors.stackBorder} rounded-3xl transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-10 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative ${colors.bg} border ${colors.border} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 z-10`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                    <div className={`absolute -top-4 -right-4 w-20 h-20 ${colors.iconBg} rounded-full blur-xl`}></div>
                    <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.iconBg} rounded-full blur-xl`}></div>
                  </div>

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div
                      className={`w-12 h-12 ${colors.quoteBg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                    >
                      <Quote className={`w-6 h-6 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base italic">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              testimonial.name
                            )}&background=random&color=fff&size=48`;
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 group-hover:text-[#001d47] transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className={`text-xs ${colors.text} font-bold uppercase tracking-wide`}>
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          📍 {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div
                      className={`mt-6 w-full h-1 ${colors.iconBg} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div 
             onClick={() => window.location.href = "/komunitas"}
             className="inline-flex items-center gap-2 bg-[#001d47] px-8 py-3 rounded-full hover:bg-blue-900 transition-all duration-300 cursor-pointer group shadow-lg"
          >
            <span className="text-white font-medium">
              Ingin Berkolaborasi dengan Kami?
            </span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <span className="text-[#001d47] text-xs font-bold">➜</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements (Background) */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-[#001d47] rounded-full opacity-10 animate-bounce"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}