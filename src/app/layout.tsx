import { Analytics } from "@vercel/analytics/next";
import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import PageTransition from "@/components/PageTransition";
import FloatingCharacter from "./components/FloatingCharacter";

// --- METADATA COMDEV ---
export const metadata: Metadata = {
  title: "Comdev KSE UINSU - Community Development",
  description:
    "Divisi Community Development KSE UINSU. Fokus pada pemberdayaan masyarakat, inovasi sosial, dan ekonomi sirkular melalui program desa binaan yang berkelanjutan.",
  keywords:
    "comdev, kse uinsu, community development, pemberdayaan masyarakat, uinsu, social enterprise, lingkungan, pengabdian, mahasiswa",
  authors: [{ name: "Comdev KSE UINSU Team" }],
  
  // Icon di Tab Browser (Favicon)
  icons: {
    icon: "/logo-comdev.png", // Pastikan file ini ada di folder public
    apple: "/logo-comdev.png",
  },

  // Tampilan saat share link di WA/Twitter/FB
  openGraph: {
    title: "Comdev KSE UINSU - Membangun Desa, Memberdayakan Masyarakat",
    description:
      "Platform resmi Community Development KSE UINSU. Kolaborasi mahasiswa untuk dampak sosial yang nyata.",
    type: "website",
    locale: "id_ID",
    siteName: "Comdev KSE UINSU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased">
        <LenisProvider>
          <PageTransition>
            {children}
            <Analytics />
            
            {/* CATATAN:
               FloatingCharacter (Karakter Kartun) mungkin agak kekanak-kanakan 
               untuk profil Organisasi Mahasiswa resmi. 
               Kalau mau terlihat lebih profesional, hapus baris di bawah ini.
               Tapi kalau targetnya emang edukasi anak SD, biarin aja.
            */}
            <FloatingCharacter /> 
            
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}