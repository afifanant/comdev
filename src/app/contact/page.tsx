"use client";
import { useState } from "react";
import type React from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Users,
  BookOpen,
  Star,
  CheckCircle,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Handshake,
} from "lucide-react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

interface ContactForm {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

// KATEGORI BANTUAN DISESUAIKAN DENGAN COMDEV
const supportCategories = [
  {
    id: "program",
    title: "Program & Kegiatan",
    description: "Tanya seputar Maggot, Desa Binaan, dll",
    icon: BookOpen,
    color: "yellow",
  },
  {
    id: "volunteer",
    title: "Rekrutmen Relawan",
    description: "Info pendaftaran anggota baru",
    icon: Users,
    color: "yellow",
  },
  {
    id: "partnership",
    title: "Kerjasama & CSR",
    description: "Tawaran kolaborasi atau sponsor",
    icon: Handshake,
    color: "purple",
  },
  {
    id: "technical",
    title: "Website & Data",
    description: "Lapor bug atau masalah akses",
    icon: MessageCircle,
    color: "red",
  },
];

// FAQ DISESUAIKAN DENGAN KSE UINSU
const faqData = [
  {
    question: "Bagaimana cara bergabung menjadi relawan Comdev?",
    answer:
      "Pendaftaran relawan biasanya dibuka setiap awal semester atau saat ada proyek besar. Pantau terus Instagram @comdev_kseuinsu untuk info open recruitment terbaru.",
  },
  {
    question: "Apakah kegiatan ini khusus untuk penerima beasiswa KSE?",
    answer:
      "Tidak selalu. Meskipun inti pengurus adalah beswan KSE, banyak kegiatan aksi sosial (seperti bersih pantai atau webinar) yang terbuka untuk mahasiswa umum UINSU.",
  },
  {
    question: "Bagaimana cara mengajukan kerjasama CSR?",
    answer:
      "Anda bisa menghubungi divisi External Relations kami melalui email atau formulir di halaman ini dengan memilih kategori 'Kerjasama & CSR'.",
  },
  {
    question: "Dimana lokasi Desa Binaan Comdev KSE UINSU?",
    answer:
      "Saat ini fokus utama desa binaan kami berada di kawasan Martubung, Medan, dengan fokus pada pengelolaan sampah organik dan ekonomi kreatif.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Nomor WhatsApp yang benar
  const WHATSAPP_NUMBER = "6282361464415"; 
  const WHATSAPP_DISPLAY = "+62 823-6146-4415";
  const CONTACT_EMAIL = "pkseuinsucomdev@gmail.com";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = WHATSAPP_NUMBER; 

    const categoryTitle = supportCategories.find(c => c.id === formData.category)?.title || formData.category;

    const whatsappMessage = encodeURIComponent(
      `Halo Admin Comdev (via Website),\n\n*Kategori:* ${categoryTitle}\n*Subjek:* ${formData.subject}\n\n*Pengirim:*\nNama: ${formData.name}\nEmail: ${formData.email}\n\n*Pesan:*\n${formData.message}\n\nMohon konfirmasi pesannya ya!`
    );

    const waLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    window.open(waLink, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-200",
        button: "bg-yellow-500",
      },

      purple: {
        bg: "bg-purple-10s0",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-500",
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
        button: "bg-red-500",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.yellow;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-5 h-5 text-red-600 animate-pulse" />
              <span className="text-red-700 font-medium text-sm">
                Hubungi Kami
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Ada <span className="text-red-600">Pertanyaan</span>?
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tim Comdev KSE UINSU siap membantu! Hubungi kami untuk info program, 
              kerjasama, atau aspirasi mahasiswa.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info & Support Categories */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Information - FIX: Semuanya dibuat clickable */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Informasi Kontak
                </h3>

                <div className="space-y-4">
                  {/* Email Link (Clickable Mailto) */}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600 text-sm truncate">
                        {CONTACT_EMAIL}
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp Link (Clickable wa.me) */}
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">WhatsApp</div>
                      <div className="text-gray-600 text-sm">
                        {WHATSAPP_DISPLAY}
                      </div>
                    </div>
                  </a>

                  {/* Alamat (Static Info) */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Alamat</div>
                      <div className="text-gray-600 text-sm">
                        UINSU, Medan, Indonesia
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Categories */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Tujuan Pesan
                </h3>

                <div className="space-y-3">
                  {supportCategories.map((category) => {
                    const Icon = category.icon;
                    const colors = getColorClasses(category.color);

                    return (
                      <div
                        key={category.id}
                        className={`${colors.bg} border ${colors.border} rounded-xl p-4 cursor-pointer hover:shadow-md transition-all duration-300 ${
                          formData.category === category.id ? `shadow-md border-2 border-dashed ${colors.text.replace('text-', 'border-')}` : ''
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, category: category.id })
                        }
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${colors.button} rounded-full flex items-center justify-center`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 text-sm">
                              {category.title}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {category.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-red-100 to-yellow-100 border border-red-200 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Waktu Respon</div>
                    <div className="text-red-600 text-sm font-medium">
                      1-2 Hari Kerja
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Kami adalah organisasi mahasiswa. Kami akan berusaha membalas 
                  secepat mungkin disela-sela kegiatan perkuliahan.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Membuka WhatsApp... 🟢
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Sistem sedang mengalihkan ke WhatsApp. Silakan tekan tombol <strong>"Kirim"</strong> di aplikasi WhatsApp kamu untuk menyelesaikan pesan.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-700 font-medium text-sm">
                        Pesan sudah diformat dan siap dikirim
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Kirim Pesan
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                            placeholder="Nama Kamu"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                            placeholder="nama@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Kategori *
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Pilih kategori</option>
                            {supportCategories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subjek *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                            placeholder="Judul pesan"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pesan *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tuliskan pertanyaan, saran, atau tawaran kerjasama kamu..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.category}
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6 rounded-xl font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Mempersiapkan Pesan...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Kirim ke WhatsApp Admin
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                <HelpCircle className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-700 font-medium text-sm">FAQ</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pertanyaan Umum (FAQ)
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hal-hal yang sering ditanyakan seputar Comdev KSE UINSU
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}