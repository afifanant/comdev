"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
// Import semua komponen yang relevan
import CommunityStats from "./components/CommunityStats" // Anggap ini EnhancedStats
import CommunityForum from "./components/CommunityForum"
import CommunityLeaderboard from "./components/CommunityLeaderboard"
import CommunityChallenge from "./components/CommunityChallenge"

export default function KomunitasPage() {
  const scrollToSection = (id: string) => {
    // Menggunakan setTimeout untuk memastikan DOM sudah siap sebelum scroll
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            // Smooth scroll ke elemen
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };
    
  const komunitasHeroProps = {
    // Judul
    title: "Bersinergi dalam", 
    
    // Rotating text
    rotatingTexts: [
      "Comdev UINSU!", 
      "Desa Binaan!", 
      "Program Maggot!", 
      "Social Enterprise!", 
      "Aksi Nyata!"
    ],
    
    // Subtitle
    subtitle:
      "Wadah kolaborasi mahasiswa KSE UINSU dan masyarakat untuk menciptakan kemandirian ekonomi dan kelestarian lingkungan melalui inovasi sosial.",
    
    // Warna Utama Emerald (Hijau)
    primaryColor: "text-emerald-600",
    
    ctaPrimary: {
      // FIX: Ganti label dari "Daftar Relawan" menjadi "Tim Inti"
      text: "Tim Inti Comdev", 
      // FIX: Scroll ke Leaderboard (anggota Comdev)
      action: () => scrollToSection("leaderboard-section"),
    },
    ctaSecondary: {
      text: "Lihat Program",
      // FIX: Scroll ke Challenge (daftar program)
      action: () => scrollToSection("challenge-section"),
    },
    
    // Tema Warna Hijau
    theme: {
      gradient: "bg-gradient-to-t from-emerald-500/50 to-white",
      primaryColor: "bg-emerald-600",
      primaryHover: "hover:bg-emerald-700",
      borderColor: "border-emerald-600",
      hoverBg: "hover:bg-emerald-50",
      textColor: "text-emerald-700", // Tambahkan warna teks utama
    },
  }

  return (
    // Background page jadi nuansa Hijau tipis
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-emerald-100/20 via-emerald-100/10 to-white">
      <Navbar />
      
      {/* Hero Section dengan Props Hijau */}
      <Hero {...komunitasHeroProps} />
      
      {/* Semua Komponen Komunitas disatukan */}
      <CommunityStats />
      
      {/* Tambahkan ID untuk target scroll */}
      <div id="challenge-section"> 
        <CommunityChallenge />
      </div>
      
      {/* Tambahkan ID untuk target scroll */}
      <div id="leaderboard-section"> 
        <CommunityLeaderboard />
      </div>

      <CommunityForum />
      
      <Footer />
    </div>
  )
}