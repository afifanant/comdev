"use client";
import { useState } from "react";
import {
  Users,
  MapPin,
  TrendingUp,
  Target,
  Zap,
  Star,
  Heart,
  Globe,
  Briefcase,
  Building2,
  Handshake
} from "lucide-react";

interface StatCard {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  icon: any;
  color: string;
  description: string;
}

// DATA STATISTIK REALISTIS (COMDEV)
const statsData: StatCard[] = [
  {
    id: "relawan",
    title: "Relawan Aktif",
    value: "145",
    change: "+12 bulan ini",
    changeType: "increase",
    icon: Users,
    color: "navy",
    description: "Mahasiswa KSE yang berkontribusi",
  },
  {
    id: "desa",
    title: "Desa Binaan",
    value: "3",
    change: "Target 5 di 2026",
    changeType: "neutral",
    icon: MapPin,
    color: "teal",
    description: "Lokasi fokus pemberdayaan",
  },
  {
    id: "program",
    title: "Program Terlaksana",
    value: "48",
    change: "+3 minggu ini",
    changeType: "increase",
    icon: Target,
    color: "blue",
    description: "Kegiatan sosial & edukasi",
  },
  {
    id: "penerima",
    title: "Penerima Manfaat",
    value: "1.2K+",
    change: "+150 dari bulan lalu",
    changeType: "increase",
    icon: Heart,
    color: "gold",
    description: "Warga yang terbantu",
  },
];

// QUICK STATS (Ringkasan Kinerja)
const quickStats = [
  {
    label: "Mitra Kolaborasi",
    value: "12",
    icon: <Handshake className="w-5 h-5 text-blue-600" />,
    color: "text-blue-600",
  },
  {
    label: "Donasi Tersalurkan",
    value: "Rp 45jt",
    icon: <Briefcase className="w-5 h-5 text-green-600" />,
    color: "text-green-600",
  },
  {
    label: "Proyek Berjalan",
    value: "8",
    icon: <Zap className="w-5 h-5 text-yellow-600" />,
    color: "text-yellow-600",
  },
  {
    label: "Total Jam Sosial",
    value: "3,400+",
    icon: <Globe className="w-5 h-5 text-purple-600" />,
    color: "text-purple-600",
  },
];

// FOKUS UTAMA PROGRAM
const trendingTopics = [
  { topic: "Budidaya Maggot BSF", posts: "Desa Martubung", trend: "up" },
  { topic: "Bank Sampah Unit", posts: "Kampus UINSU", trend: "up" },
  { topic: "KSE Mengajar", posts: "Panti Asuhan", trend: "up" },
  { topic: "Pelatihan UMKM", posts: "Warga Lokal", trend: "neutral" },
  { topic: "Eco-Enzyme", posts: "Ibu PKK", trend: "up" },
];

export default function CommunityStats() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("month");

  // MAP WARNA BARU (NAVY THEME)
  const getColorClasses = (color: string) => {
    const colorMap = {
      navy: {
        bg: "bg-[#001d47]",
        light: "bg-blue-50",
        text: "text-[#001d47]",
        border: "border-blue-200",
        iconBg: "bg-white/20", // Icon di dalam box navy
      },
      blue: {
        bg: "bg-blue-600",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        iconBg: "bg-blue-600",
      },
      teal: {
        bg: "bg-teal-600",
        light: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        iconBg: "bg-teal-600",
      },
      gold: {
        bg: "bg-amber-500",
        light: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
        iconBg: "bg-amber-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.navy;
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
            <TrendingUp className="w-5 h-5 text-[#001d47] animate-pulse" />
            <span className="text-[#001d47] font-medium text-sm">
              Laporan Dampak
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Jangkauan <span className="text-[#001d47]">Perubahan</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Transparansi data capaian program pemberdayaan masyarakat yang dikelola oleh Comdev KSE UINSU.
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
            <div className="flex gap-2">
              {[
                { id: "week", label: "Minggu Ini" },
                { id: "month", label: "Bulan Ini" },
                { id: "year", label: "Tahun Ini" },
              ].map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id as any)}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm ${
                    selectedPeriod === period.id
                      ? "bg-[#001d47] text-white shadow-lg"
                      : "text-gray-600 hover:text-[#001d47] hover:bg-blue-50"
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            const colors = getColorClasses(stat.color);
            return (
              <div
                key={stat.id}
                className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${stat.color === 'navy' ? 'bg-[#001d47]' : colors.light}`}>
                    <Icon className={`w-6 h-6 ${stat.color === 'navy' ? 'text-white' : colors.text}`} />
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      stat.changeType === "increase"
                        ? "bg-green-100 text-green-700"
                        : stat.changeType === "decrease"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {stat.changeType === "increase" && "↗"}
                    {stat.changeType === "decrease" && "↘"}
                    {stat.changeType === "neutral" && "•"}
                  </div>
                </div>

                <div className="mb-2">
                  <h3 className={`text-3xl font-bold text-gray-800 mb-1 group-hover:text-[#001d47] transition-colors`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm">
                    {stat.title}
                  </p>
                </div>

                <div className="mb-0">
                  <p className="text-xs font-semibold text-green-600 mb-1">
                    {stat.change}
                  </p>
                  <p className="text-xs text-gray-400 leading-tight">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Quick Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 mb-6 h-full">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Indikator Kinerja
              </h3>

              <div className="space-y-4">
                {quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-1.5 rounded-lg shadow-sm">
                        {stat.icon}
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">
                        {stat.label}
                      </span>
                    </div>
                    <span
                      className={`font-bold text-sm md:text-base ${stat.color}`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fokus Program (Trending) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 h-full">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#001d47]" />
                Fokus Program Bulan Ini
              </h3>

              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#001d47] text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-[#001d47] transition-colors">
                          {topic.topic}
                        </h4>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            <p className="text-xs md:text-sm text-gray-500">
                            Lokasi: {topic.posts}
                            </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-md ${
                          topic.trend === "up"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {topic.trend === "up" ? "🔥 Prioritas" : "⚙️ Rutin"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}