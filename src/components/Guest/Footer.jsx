import { FaTiktok, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <div className="text-2xl font-extrabold text-yellow-400 mb-3 cursor-default select-none">
            ManJa<span className="text-white">.</span>
          </div>
          <p className="text-gray-400 max-w-xs">
            Menyediakan berbagai makanan dan minuman lezat dengan kualitas terbaik untuk memanjakan lidah Anda.
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navigasi</h4>
          <ul>
            <li><a href="/" className="hover:text-yellow-400 transition">Beranda</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">Tentang Kami</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-white font-semibold mb-3">Sosial Media</h4>
          <div className="flex space-x-4 text-yellow-400 text-2xl">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-pink-500 transition">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} ManJa. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
