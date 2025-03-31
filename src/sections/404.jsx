export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="px-6 py-3 bg-[#F4983C] text-white rounded-lg hover:bg-[#d87c2a] transition">
                Go Back Home
            </a>
        </div>
    );
}
