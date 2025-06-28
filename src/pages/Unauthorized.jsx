export default function Unauthorized() {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center max-w-lg w-full bg-white p-12 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 animate-pulse">
                    401
                </h1>
                <h2 className="text-4xl font-semibold text-gray-900 mt-6 animate-slide-up">
                    Unauthorized
                </h2>
                <p className="mt-4 text-lg text-gray-600 animate-slide-up">
                    You are not authorized to access this resource. Make sure you're logged in or have valid credentials before retrying.
                </p>
                <div className="mt-10 flex justify-center gap-x-6 animate-slide-up">
                    <a
                        href="/"
                        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full shadow-lg hover:bg-indigo-500 hover:scale-110 transform transition-all duration-300"
                    >
                        Go back home
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold border border-indigo-500 text-indigo-600 rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <span>📞</span> Contact support
                    </a>
                </div>
            </div>
        </main>
    );
}
