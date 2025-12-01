"use client";
import { useState } from "react";
import {
  Target,
  Calendar,
  Users,
  Trophy,
  Clock,
  Filter,
  Lightbulb,
  // Tambahkan icon untuk data Progja
  TrendingUp,
  Zap,
  Star,
  Globe,
  Briefcase,
  Handshake,
  Recycle, // Icon Bank Sampah
  Fish,    // Icon Lele
  Bug,     // Icon Maggot
  Sprout,  // Icon Pertanian
  School,  // Icon Sekolah (untuk Bank Sampah SD)
  MapPin,
  // Icon yang dipakai di filter/header
  MessageCircle,
  ThumbsUp,
  Eye,
  Pin,
  Flame,
} from "lucide-react";
import type { LucideIcon } from "lucide-react"; // Import tipe untuk Icon

// INTERFACE BARU UNTUK PROGRAM KERJA (PROGJA) STATISTIK
interface ProgjaCard {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  icon: LucideIcon; // Menggunakan LucideIcon sebagai tipe
  color: string;
  description: string;
}

// DATA PROGRAM KERJA (PROGJA) COMDEV - MENGGANTIKAN DATA CHALLENGES
const progjaData: ProgjaCard[] = [
  {
    id: "bank-sampah",
    title: "Bank Sampah SD",
    value: "2 Sekolah",
    change: "+2 Mitra Baru",
    changeType: "increase",
    icon: School, // Diambil dari import
    color: "emerald", // Hijau Utama
    description: "Edukasi pemilahan & tabungan sampah siswa",
  },
  {
    id: "maggot",
    title: "Budidaya Maggot",
    value: "150 Kg",
    change: "+25kg / bulan",
    changeType: "increase",
    icon: Bug,
    color: "lime", // Hijau Kekuningan (Identik dengan Maggot)
    description: "Pengurai organik & pakan alternatif",
  },
  {
    id: "eco-lele",
    title: "Eco Lele Bioflok",
    value: "4 Kolam",
    change: "Siap Panen Raya",
    changeType: "neutral",
    icon: Fish,
    color: "teal", // Hijau Kebiruan (Air)
    description: "Integrasi pakan maggot untuk efisiensi",
  },
  {
    id: "pertanian",
    title: "Pertanian Organik",
    value: "Green House",
    change: "+Tanaman Toga",
    changeType: "increase",
    icon: Sprout,
    color: "green", // Hijau Murni
    description: "Ketahanan pangan & apotek hidup desa",
  },
];

// QUICK STATS (Dampak Ekonomi & Sosial)
const quickStats = [
  {
    label: "Siswa Terlibat",
    value: "350+",
    icon: <Users className="w-5 h-5 text-emerald-600" />,
    color: "text-emerald-600",
  },
  {
    label: "Omzet Maggot",
    value: "Rp 5jt",
    icon: <Briefcase className="w-5 h-5 text-lime-600" />,
    color: "text-lime-600",
  },
  {
    label: "Hasil Panen Lele",
    value: "900 Kg",
    icon: <Zap className="w-5 h-5 text-teal-600" />,
    color: "text-teal-600",
  },
  {
    label: "Mitra CSR",
    value: "1 Unit",
    icon: <Handshake className="w-5 h-5 text-green-600" />,
    color: "text-green-600",
  },
];

// AKTIVITAS LAPANGAN
const trendingTopics = [
  { topic: "Edukasi Pilah Sampah", posts: "SDN 101898", trend: "up" },
  { topic: "Panen Larva Maggot", posts: "Rumah Kompos", trend: "up" },
  { topic: "Pemberian Pakan Lele", posts: "Kolam Bioflok", trend: "neutral" },
  { topic: "Perawatan Green House", posts: "Tim Pertanian", trend: "up" },
  { topic: "Penimbangan Nasabah", posts: "Bank Sampah", trend: "up" },
];

const periods = [
  { id: "week", label: "Minggu Ini" },
  { id: "month", label: "Bulan Ini" },
  { id: "year", label: "Tahun Ini" },
];


export default function CommunityChallenge() { // Nama komponen dipertahankan CommunityChallenge
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("month");

  // MAP WARNA (TEMA HIJAU/EMERALD)
  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-600",
        light: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
        bar: "bg-emerald-600",
        iconBg: "bg-emerald-600",
      },
      teal: {
        bg: "bg-teal-600",
        light: "bg-teal-50",
        text: "text-teal-700",
        border: "border-teal-200",
        bar: "bg-teal-600",
        iconBg: "bg-teal-600",
      },
      green: {
        bg: "bg-green-600",
        light: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        bar: "bg-green-600",
        iconBg: "bg-green-600",
      },
      lime: {
        bg: "bg-lime-500",
        light: "bg-lime-50",
        text: "text-lime-700",
        border: "border-lime-200",
        bar: "bg-lime-500",
        iconBg: "bg-lime-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-100">
            <Target className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-bold text-sm">
              Program Unggulan
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Progres <span className="text-emerald-600">Unggulan</span> Kami
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Transparansi capaian 4 pilar utama Comdev KSE UINSU: Edukasi, Peternakan, Perikanan, dan Pertanian.
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
            <div className="flex gap-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id as any)}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm ${
                    selectedPeriod === period.id
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
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
          {progjaData.map((stat) => {
            const Icon = stat.icon;
            const colors = getColorClasses(stat.color);
            return (
              <div
                key={stat.id}
                className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${colors.light}`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
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
                  <h3 className={`text-3xl font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm">
                    {stat.title}
                  </p>
                </div>

                <div className="mb-0">
                  <p className="text-xs font-semibold text-emerald-600 mb-1">
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
                Indikator Dampak
              </h3>

              <div className="space-y-4">
                {quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100"
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
                <Star className="w-5 h-5 text-emerald-600" />
                Aktivitas Minggu Ini
              </h3>

              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-emerald-700 transition-colors">
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
                        {topic.trend === "up" ? "🔥 Aktif" : "⚙️ Rutin"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bottom (Dipertahankan) */}
        <div className="text-center mt-10">
          <div className="bg-emerald-600 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-yellow-300" />
                        Punya Ide Proyek?
                    </h3>
                    <p className="text-emerald-50 text-sm md:text-base max-w-lg">
                        Kami terbuka untuk kolaborasi! Usulkan ide kreatifmu untuk kemajuan desa binaan atau lingkungan kampus.
                    </p>
                </div>
                <button className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg whitespace-nowrap">
                    Ajukan Proposal
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}