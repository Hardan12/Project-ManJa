export default function Header() {
    return (
        <header className="bg-[#e07a5f] text-white px-6 py-3 flex justify-end items-center gap-4 rounded-t-[2rem] shadow-md">
            {/* Icon Chat */}
            <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
                💬
            </button>

            {/* Icon Bell */}
            <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
                🔔
            </button>

            {/* Profile */}
            <div className="bg-white flex items-center gap-2 px-3 py-1 rounded-full shadow hover:bg-gray-100 transition cursor-pointer">
                <img src="/Img/user.png" alt="User" className="h-8 w-8 rounded-full" />
                <span className="text-black font-semibold">Admin ManJa</span>
                <span className="text-black">▾</span>
            </div>
        </header>
    );
}
