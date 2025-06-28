import PageHeader from "../../components/Guest/PageHeader";
import products from "../../assets/products.json";

export default function Product() {
    return (
        <div className="flex flex-col min-h-screen bg-white p-4 rounded-lg" id="dashboard-container">
            <PageHeader title="Produk Unggulan" breadcrumb="Dashboard / Produk" />

            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border
                         border-gray-200 relative"
                    >
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold text-black px-2 py-0.5 rounded-md shadow-sm">
                                🌟 Baru
                            </span>
                        </div>
                        <div className="p-4 flex flex-col justify-between h-[200px]">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                            </div>
                            <div className="mt-auto">
                                <p className="text-hijau font-bold text-base mb-3">{product.price}</p>
                                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md font-semibold transition">
                                    🛒 Pesan Sekarang
                                </button>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 
                        transition-transform origin-left duration-300 rounded-b-xl" />
                    </div>
                ))}
            </div>
        </div>
    );
}
