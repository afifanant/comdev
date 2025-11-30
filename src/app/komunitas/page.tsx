"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CommunityStats from "./components/CommunityStats"
import CommunityForum from "./components/CommunityForum"
import CommunityLeaderboard from "./components/CommunityLeaderboard"
import CommunityChallenge from "./components/CommunityChallenge"

export default function KomunitasPage() {
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
    
    // UBAH: Warna Utama jadi Emerald (Hijau)
    primaryColor: "text-emerald-600",
    
    ctaPrimary: {
      text: "Daftar Relawan", 
      action: () => console.log("Join community!"),
    },
    ctaSecondary: {
      text: "Lihat Proyek",
      action: () => console.log("View projects!"),
    },
    
    // UBAH: Tema Warna Hijau
    theme: {
      gradient: "bg-gradient-to-t from-emerald-500/50 to-white",
      primaryColor: "bg-emerald-600",
      primaryHover: "hover:bg-emerald-700",
      borderColor: "border-emerald-600",
      hoverBg: "hover:bg-emerald-50",
    },
  }

  return (
    // UBAH: Background page jadi nuansa Hijau tipis
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-emerald-100/20 via-emerald-100/10 to-white">
      <Navbar />
      
      {/* Hero Section dengan Props Hijau */}
      <Hero {...komunitasHeroProps} />
      
      {/* PERINGATAN KERAS:
         Komponen di bawah ini (Stats, Forum, Leaderboard, Challenge) 
         kemungkinan besar isinya masih BIRU (Navy) karena barusan kita ubah.
         
         Kalau lu mau halaman ini total Hijau, lu harus buka file komponen tersebut
         satu per satu di folder 'src/app/komunitas/components/...' 
         dan ganti manual warnanya dari 'navy/blue' ke 'emerald/green'.
      */}
      <CommunityStats />
      <CommunityForum />
      <CommunityLeaderboard />
      <CommunityChallenge />
      
      <Footer />
    </div>
  )
}