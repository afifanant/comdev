"use client";
import { useState } from "react";
import {
  MessageCircle,
  ThumbsUp,
  Eye,
  Clock,
  Pin,
  Flame,
  TrendingUp,
  Search,
  Filter,
  Plus,
} from "lucide-react";

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    badge: string;
    level: number;
  };
  category: string;
  replies: number;
  likes: number;
  views: number;
  timeAgo: string;
  isPinned: boolean;
  isHot: boolean;
  tags: string[];
}

// DATA DISKUSI COMDEV - DISESUAIKAN DENGAN NAMA PENGURUS
const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Evaluasi Program Maggot Desa Martubung - Q1 2025",
    content:
      "Rekan-rekan, berikut adalah poin evaluasi dari kunjungan terakhir ke kandang maggot. Ada beberapa kendala suhu yang perlu kita diskusikan solusinya...",
    author: {
      name: "Afif Ananta", // Ketua
      avatar: "https://i.pravatar.cc/150?u=afifananta",
      badge: "Ketua Comdev",
      level: 20,
    },
    category: "Program Kerja",
    replies: 24,
    likes: 56,
    views: 120,
    timeAgo: "3 jam lalu",
    isPinned: true,
    isHot: true,
    tags: ["Evaluasi", "Maggot", "Martubung"],
  },
  {
    id: 2,
    title: "[INFO PENTING] Jadwal Wawancara Perpanjangan Beasiswa KSE",
    content:
      "Halo Beswan KSE! Jadwal wawancara perpanjangan sudah keluar. Silakan cek lampiran di bawah dan persiapkan berkas laporan kalian ya.",
    author: {
      name: "Hany Arifya", // Sekretaris
      avatar: "https://i.pravatar.cc/150?u=hany",
      badge: "Sekretaris Comdev",
      level: 18,
    },
    category: "Info Beasiswa",
    replies: 89,
    likes: 230,
    views: 1500,
    timeAgo: "1 hari lalu",
    isPinned: true,
    isHot: true,
    tags: ["Beasiswa", "Wawancara", "Urgent"],
  },
  {
    id: 3,
    title: "Ide Inovasi: Pemanfaatan Eceng Gondok untuk Kerajinan",
    content:
      "Saya melihat potensi eceng gondok di sungai dekat desa binaan cukup melimpah. Bagaimana kalau kita buat pelatihan anyaman untuk ibu-ibu PKK?",
    author: {
      name: "Anissya Fahira Pasaribu", // PIC Bank Sampah
      avatar: "https://i.pravatar.cc/150?u=anissya",
      badge: "PIC Bank Sampah",
      level: 10,
    },
    category: "Inovasi Sosial",
    replies: 15,
    likes: 45,
    views: 300,
    timeAgo: "5 jam lalu",
    isPinned: false,
    isHot: false,
    tags: ["Ide", "PKK", "Ekonomi Kreatif"],
  },
  {
    id: 4,
    title: "Diskusi Santai: Persiapan Comdev Camp 2025",
    content:
      "Siapa yang mau gabung panitia Comdev Camp tahun ini? Yuk kumpul ide tema dan lokasi yang seru tapi tetap edukatif.",
    author: {
      name: "Angga Wardana Yansuri Sirait", // PIC Eco Lele
      avatar: "https://i.pravatar.cc/150?u=angga",
      badge: "PIC Eco Lele",
      level: 14,
    },
    category: "Diskusi Umum",
    replies: 56,
    likes: 80,
    views: 450,
    timeAgo: "2 hari lalu",
    isPinned: false,
    isHot: true,
    tags: ["Event", "Camp", "Panitia"],
  },
];

const categories = [
  { name: "Semua", count: 156, color: "emerald" },
  { name: "Program Kerja", count: 45, color: "blue" },
  { name: "Info Beasiswa", count: 32, color: "yellow" },
  { name: "Inovasi Sosial", count: 28, color: "purple" },
  { name: "Diskusi Umum", count: 51, color: "gray" },
];

export default function CommunityForum() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "trending">(
    "latest"
  );

  // MAP WARNA BADGE (TEMA HIJAU/EMERALD) - Disesuaikan untuk roles yang baru
  const getBadgeColor = (badge: string) => {
    const colors = {
      "Ketua Comdev": "bg-red-500 text-white border-red-600",
      "Sekretaris Comdev": "bg-yellow-500 text-white border-yellow-600",
      "PIC Eco Lele": "bg-teal-500 text-white border-teal-600",
      "PIC Bank Sampah": "bg-blue-500 text-white border-blue-600",
      // Default roles
      "Pengurus Inti": "bg-emerald-600 text-white border-emerald-600",
      "Relawan Aktif": "bg-green-100 text-green-700 border-green-200",
      "Member": "bg-gray-100 text-gray-700 border-gray-200",
    };
    return (
      colors[badge as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Program Kerja": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Info Beasiswa": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Inovasi Sosial": "bg-purple-100 text-purple-700 border-purple-200",
      "Diskusi Umum": "bg-gray-100 text-gray-700 border-gray-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  return (
    <section className="w-full py-20 px-4 bg-emerald-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-100">
            <MessageCircle className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-bold text-sm">
              Ruang Diskusi
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Forum & <span className="text-emerald-600">Aspirasi</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Wadah komunikasi anggota Comdev KSE UINSU. Berbagi ide, info beasiswa, 
            dan evaluasi program kerja untuk kemajuan bersama.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 mb-6">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari topik..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                />
              </div>

              <button className="w-full bg-emerald-600 text-white py-2.5 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 font-medium text-sm shadow-md hover:shadow-lg">
                <Plus className="w-4 h-4" />
                <span>Buat Topik Baru</span>
              </button>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-600" />
                Kategori
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between text-sm ${
                      activeCategory === category.name
                        ? "bg-emerald-50 text-emerald-700 font-medium border border-emerald-100"
                        : "hover:bg-gray-50 text-gray-600 border border-transparent"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${
                        activeCategory === category.name 
                        ? "bg-emerald-100 text-emerald-700 border-emerald-200" 
                        : "bg-gray-100 text-gray-500 border-gray-200"
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="font-bold mb-4 relative z-10 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Statistik Forum
              </h3>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-emerald-100">Total Topik</span>
                  <span className="font-bold">1,247</span>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-emerald-100">Anggota Aktif</span>
                  <span className="font-bold">892</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-emerald-100">Diskusi Hari Ini</span>
                  <span className="font-bold text-yellow-300">23</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex gap-2">
                {[
                  { id: "latest", label: "Terbaru", icon: Clock },
                  { id: "popular", label: "Populer", icon: ThumbsUp },
                  { id: "trending", label: "Trending", icon: TrendingUp },
                ].map((sort) => {
                  const Icon = sort.icon;
                  return (
                    <button
                      key={sort.id}
                      onClick={() => setSortBy(sort.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                        sortBy === sort.id
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{sort.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="text-sm text-gray-500">
                Menampilkan {forumPosts.length} diskusi terpilih
              </div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-emerald-200 transition-all duration-300 cursor-pointer group"
                >
                  {/* Post Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-100"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-800 text-sm group-hover:text-emerald-700 transition-colors">
                          {post.author.name}
                        </h4>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getBadgeColor(
                            post.author.badge
                          )}`}
                        >
                          {post.author.badge}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          • Lv.{post.author.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{post.timeAgo}</span>
                        <span>•</span>
                        <span
                          className={`px-2 py-0.5 rounded-md font-medium border ${getCategoryColor(
                            post.category
                          )}`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {post.isPinned && (
                        <Pin className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                      )}
                      {post.isHot && (
                        <Flame className="w-4 h-4 text-orange-500 fill-orange-50" />
                      )}
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Post Content Preview */}
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {post.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md text-xs border border-gray-200 hover:border-emerald-200 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-emerald-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          {post.replies}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-emerald-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          {post.likes}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          {post.views}
                        </span>
                      </div>
                    </div>

                    <button className="text-emerald-600 hover:text-emerald-700 font-bold text-xs transition-colors flex items-center gap-1">
                      Baca Selengkapnya 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <button className="bg-white border border-gray-300 text-gray-600 px-8 py-3 rounded-xl font-medium hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300 text-sm">
                Muat Lebih Banyak
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}