import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="flex w-full max-w-5xl rounded-md overflow-hidden shadow-2xl">

                {/* Kiri: Gambar dan Logo */}
                <div className="hidden md:block w-5/12 relative">
                    <img
                        src="/Img/semur.png"
                        alt="Food"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-31 flex items-center gap-2">
                        <img
                            src="/Img/Logo.png"
                            alt="Manja Logo"
                            className="h-20 md:h-20 lg:h-33" // Lebih besar dan responsif
                        />
                    </div>
                </div>

                {/* Kanan: Form login */}
                <div className="w-full md:w-7/12 bg-[#fefce8] px-10 py-12 flex flex-col justify-between">
                    <Outlet />

                    {/* Footer login dengan sosial */}
                    <div className="pt-10 border-t mt-10 flex justify-center items-center gap-4">
                        <span className="text-sm text-gray-500">Login dengan</span>
                        <button className="flex items-center gap-2">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            <span className="text-sm text-gray-600">Google</span>
                        </button>
                        <button className="flex items-center gap-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5" />
                            <span className="text-sm text-gray-600">Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
