"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatarBelakang from "./components/LatarBelakang";
import Support from "./components/SupportBy";
import EnhancedStats from "./components/EnhancedStats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CTABelajar from "./components/CTABelajar";

export default function Home() {
  const homeHeroProps = {
    // UBAH: Judul statis yang lebih punya wibawa organisasi
    title: "Bergerak Nyata,", 
    
    // UBAH: Rotating text fokus ke value Comdev (Aksi, Dampak, Inovasi)
    rotatingTexts: [
      "Untuk Masyarakat",
      "Demi Lingkungan",
      "Penuh Inovasi",
      "Membangun Desa",
      "Tanpa Tapi!",
    ],
    
    // UBAH: Subtitle menjelaskan siapa lu (Comdev) & apa misinya
    subtitle:
      "Community Development KSE UINSU: Mengubah masalah menjadi peluang melalui pemberdayaan masyarakat, ekonomi sirkular, dan aksi sosial yang berkelanjutan.",
      
    // Warna Teks Judul Utama (Running Text) - Biru Dongker
    primaryColor: "text-[#001d47]", 
    
    ctaPrimary: {
      text: "Lihat Program", // Jangan "Get Started", ini bukan aplikasi SaaS
      action: () => (window.location.href = "/komunitas"),
    },
    ctaSecondary: {
      text: "Tentang Kami",
      action: () => (window.location.href = "/#about"), // Arahkan ke section About/LatarBelakang
    },
    
    // Tema Warna (Tetap Biru Dongker sesuai request)
    theme: {
      gradient: "bg-gradient-to-t from-[#001d47]/50 to-white", 
      primaryColor: "bg-[#001d47]", 
      primaryHover: "hover:bg-[#00337A]", 
      borderColor: "border-[#001d47]", 
      hoverBg: "hover:bg-blue-50", 
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tl from-blue-100/20 via-blue-100/10 to-white">
      <Navbar />
      
      {/* Hero Section dengan Copywriting Baru */}
      <Hero {...homeHeroProps} />
      
      {/* Section di bawah ini isinya masih statis di file masing-masing.
          Lu harus buka file-file ini satu per satu kalau mau ganti teksnya 
          biar nyambung sama narasi "Comdev", bukan narasi "Sampedia" lama. 
      */}
      <div id="about">
        <LatarBelakang />
      </div>
      
      <Support />
      <CTA />
      <EnhancedStats />
      <Testimonials />
      <CTABelajar />
      <Footer />
    </div>
  );
}