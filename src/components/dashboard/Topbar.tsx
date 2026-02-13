import { Bell, Search } from 'lucide-react';

const Topbar = () => {
    return (
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
            <h1 className="text-xl font-bold text-slate-800">Teacher Dashboard</h1>

            <div className="flex items-center gap-6">
                {/* Search (Optional) */}
                <div className="hidden md:flex relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 outline-none text-sm w-64"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-blue-600 transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    <div className="w-8 h-1 bg-gray-200 rounded-full rotate-90"></div>

                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-slate-800">Sunny Singh</p>
                            <p className="text-xs text-gray-500">Senior Lecturer</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm">
                            SS
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
