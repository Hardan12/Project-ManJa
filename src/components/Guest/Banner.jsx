import { FaTiktok, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Banner() {
    return (
        <section className="relative h-[60vh] bg-black text-white flex items-center justify-center overflow-hidden font-script">
            {/* Background Image */}
            <img
                src="/Img/menu.jpg"
                alt="latar"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay hitam semi transparan */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

            {/* Konten Teks */}
            <div className="relative z-20 max-w-4xl px-6 text-center">
                {/* Tulisan "Selamat Datang di" dengan gaya miring */}
                <h2 className="text-xl md:text-2xl italic mb-2 text-white tracking-wide font-script">
                    Selamat datang di
                </h2>

                {/* Logo ManJa */}
                <img
                    src="/Img/Logo.png"
                    alt="Logo ManJa"
                    className="mx-auto mb-5 h-2 md:h-35"
                />

                {/* Deskripsi */}
                <p className="text-lg md:text-xl text-white font- mb-8">
                    Tempat Berbagi Cerita, Rasa, dan Resep Kuliner dari<br />
                    Seluruh Penjuru Negeri!
                </p>

                {/* Tombol Aksi */}
                <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300">
                    Ayo Bergabung
                </button>
            </div>

            {/* Sosial Media Icons di tengah bawah */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6 z-20 text-white text-2xl">
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                    className="border border-white rounded-full p-3 hover:border-pink-500 hover:text-pink-500 transition">
                    <FaTiktok />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="border border-white rounded-full p-3 hover:border-blue-600 hover:text-blue-600 transition">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="border border-white rounded-full p-3 hover:border-pink-400 hover:text-pink-400 transition">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                    className="border border-white rounded-full p-3 hover:border-red-600 hover:text-red-600 transition">
                    <FaYoutube />
                </a>
            </div>
        </section>
    );
}
