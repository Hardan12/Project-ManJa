import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-lg w-full bg-white p-12 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 animate-pulse">
          404
        </h1>
        <h2 className="text-4xl font-semibold text-gray-900 mt-6">
          Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been removed, renamed, or did not exist in the first place.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            to="/"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full shadow-lg hover:bg-indigo-500 hover:scale-110 transform transition-all duration-300"
          >
            Go back home
          </Link>
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
