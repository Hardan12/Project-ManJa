import Banner from "../../components/Guest/Banner";
import Footer from "../../components/Guest/Footer";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Banner />

            {/* Section: Tentang */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <div className="md:flex items-start gap-8">
                    <img
                        src="/Img/makan3d.png"
                        alt="Makanan"
                        className="w-full md:w-1/2 rounded-lg"
                    />
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-2xl font-bold mb-4">Tentang</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ManJa (Makan Aja!) adalah komunitas kuliner berbasis web yang hadir untuk menjawab kebingungan sederhana sehari-hari: "Hari ini mau makan apa ya?".<br /><br />
                            Melalui platform ini, kamu bisa menemukan rekomendasi tempat makan terbaik, membaca ulasan dari pengguna lain, dan membagikan pengalaman kulinermu sendiri.<br /><br />
                            Lebih dari sekadar mencari makanan, ManJa adalah ruang untuk mengeksplorasi rasa dan mengenal kekayaan kuliner lewat interaksi komunitas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section: Apa yang Bisa Kamu Lakukan */}
            <section className="py-16 bg-gray-50 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6">
                        Apa yang Bisa Kamu <br /> Lakukan di ManJa?
                    </h2>
                    <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Di ManJa, kamu bisa menemukan tempat makan favorit berdasarkan lokasi, suasana, atau jenis makanan,
                        membaca dan menulis ulasan dari sesama pecinta kuliner, membagikan cerita dan foto pengalaman kulinermu,
                        hingga menjelajahi berbagai resep dan tips memasak khas Nusantara—semua dalam satu komunitas yang hangat dan penuh rasa.
                    </p>
                </div>
            </section>


            {/* Section: Testimoni */}
            <section className="py-16 bg-yellow-50 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-10">Cerita Rasa dari Pengguna ManJa</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <p className="italic text-gray-700">
                                "Dulu bingung tiap malam mau makan apa. Sekarang tinggal buka ManJa, langsung nemu yang cocok!"
                            </p>
                            <p className="font-semibold mt-4 text-gray-800">- Riko, Mahasiswa</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <p className="italic text-gray-700">
                                "Review dari pengguna lain sangat membantu. Rekomendasi makanannya selalu pas di lidah!"
                            </p>
                            <p className="font-semibold mt-4 text-gray-800">- Dina, Ibu Rumah Tangga</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <p className="italic text-gray-700">
                                "Fitur ulasan dan foto makanannya bikin ngiler. Beneran jadi lebih seru eksplor kuliner!"
                            </p>
                            <p className="font-semibold mt-4 text-gray-800">- Arfan, Pegawai Kantoran</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section: Call to Action */}
            <section className="py-16 bg-yellow-400 text-center px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Sudah Tahu Mau Makan Apa Hari Ini?</h2>
                <p className="mb-6 text-gray-900 text-base md:text-lg">
                    Temukan rekomendasi kuliner terbaik dan cerita rasa dari komunitas ManJa.
                </p>
                <NavLink to="/login">
                    <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                        Lihat Menu
                    </button>
                </NavLink>

            </section>



            <Footer />
        </div>
    );
}
