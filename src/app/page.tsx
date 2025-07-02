import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  MapPin,
  Navigation,
  Wrench,
  CheckCircle,
  Zap,
  FootprintsIcon as Tire,
  Truck,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BikeAidLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mekanik.jpg"
            alt="Modern motorcycle on city street"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Motor Mogok di Jalan?
            <br />
            <span className="text-orange-400">Bantuan Profesional</span>
            <br />
            Tiba dalam 30 Menit.
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            BikeAid adalah platform layanan darurat motor on-demand pertama di Indonesia.
            <br />
            Cepat, transparan, dan terpercaya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <Image
                src="/app.png"
                alt="Download on the App Store"
                width={24}
                height={24}
                className="mr-3"
              />
              Download on the App Store
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <Image
                src="/ps.png"
                alt="Get it on Google Play"
                width={24}
                height={24}
                className="mr-3"
              />
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Cara Kerja BikeAid</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dapatkan bantuan profesional hanya dalam 3 langkah mudah
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="relative">
                  <Smartphone className="w-10 h-10 text-blue-600" />
                  <MapPin className="w-6 h-6 text-orange-500 absolute -top-1 -right-1" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Request Help</h3>
              <p className="text-gray-600 text-lg">
                Buka aplikasi BikeAid dan pilih jenis bantuan yang Anda butuhkan. Lokasi Anda akan terdeteksi otomatis.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">2. Track Your Mechanic</h3>
              <p className="text-gray-600 text-lg">
                Pantau lokasi mekanik terdekat secara real-time. Anda akan mendapat estimasi waktu kedatangan yang
                akurat.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="relative">
                  <Wrench className="w-10 h-10 text-blue-600" />
                  <CheckCircle className="w-6 h-6 text-green-500 absolute -top-1 -right-1" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">3. Problem Solved</h3>
              <p className="text-gray-600 text-lg">
                Mekanik profesional akan mengatasi masalah motor Anda dengan cepat dan transparan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan darurat motor Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src="/start.jpg"
                  alt="Mechanic working on motorcycle starter"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/60"></div>
                <div className="absolute top-4 left-4 bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Emergency Start Service</h3>
                <p className="text-gray-600">
                  Motor tidak bisa dinyalakan? Kami siap membantu dengan layanan starter darurat profesional.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src="/tire.jpg"
                  alt="Mechanic fixing motorcycle tire"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/60"></div>
                <div className="absolute top-4 left-4 bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Tire className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Tire Services</h3>
                <p className="text-gray-600">
                  Ban bocor atau kempes? Layanan tambal ban dan ganti ban darurat tersedia 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src="/wire.jpg"
                  alt="Mechanic working on motorcycle electrical system"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/60"></div>
                <div className="absolute top-4 left-4 bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Basic Electrical</h3>
                <p className="text-gray-600">
                  Masalah kelistrikan motor? Tim ahli kami siap mengatasi gangguan listrik dengan cepat.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src="/light.jpg"
                  alt="Mechanic performing light mechanical repair"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/60"></div>
                <div className="absolute top-4 left-4 bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Light Mechanical</h3>
                <p className="text-gray-600">
                  Perbaikan mekanik ringan seperti rantai putus, rem bermasalah, dan perawatan dasar lainnya.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200 overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="relative h-48">
                <Image
                  src="/tow.png"
                  alt="Emergency motorcycle towing service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/60"></div>
                <div className="absolute top-4 left-4 bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Emergency Towing</h3>
                <p className="text-gray-600">
                  Motor tidak bisa diperbaiki di tempat? Layanan derek darurat untuk membawa motor ke bengkel terdekat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Dipercaya Ribuan Pengendara</h2>
            <p className="text-xl text-gray-600">
              Bergabunglah dengan komunitas pengendara yang sudah merasakan layanan terbaik BikeAid
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Image
                    src="/p2.jpg"
                    alt="Budi Santoso - BikeAid Customer"
                    width={60}
                    height={60}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">Budi Santoso</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;Motor saya mogok di tengah jalan, dalam 25 menit mekanik sudah datang dan langsung bisa diperbaiki.
                  Pelayanan sangat profesional!&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Image
                    src="/p1.jpg"
                    alt="Sari Dewi - BikeAid Customer"
                    width={60}
                    height={60}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">Sari Dewi</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;Aplikasi yang sangat membantu! Harga transparan, bisa tracking mekanik, dan pelayanannya ramah.
                  Recommended banget!&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Image
                    src="/p3.jpg"
                    alt="Ahmad Rizki - BikeAid Customer"
                    width={60}
                    height={60}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">Ahmad Rizki</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;Sebagai driver ojol, BikeAid sangat membantu saat motor bermasalah. Cepat, murah, dan bisa diandalkan
                  24 jam!&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Menggunakan BikeAid?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Download aplikasi BikeAid sekarang dan rasakan kemudahan layanan darurat motor terpercaya di Indonesia.
            Tersedia 24/7 untuk membantu perjalanan Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <Image
                src="/app.png"
                alt="Download on the App Store"
                width={28}
                height={28}
                className="mr-3"
              />
              Download on the App Store
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <Image
                src="/ps.png"
                alt="Get it on Google Play"
                width={28}
                height={28}
                className="mr-3"
              />
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">BikeAid</h3>
              <p className="text-blue-200 mb-6 max-w-md">
                Platform layanan darurat motor on-demand pertama di Indonesia. Cepat, transparan, dan terpercaya untuk
                semua kebutuhan darurat motor Anda.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Bantuan</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              &copy; {new Date().getFullYear()} BikeAid. All rights reserved. Made with ❤️ in Indonesia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
