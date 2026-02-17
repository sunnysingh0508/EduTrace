import { Outlet, useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import { Bell, Search, User } from 'lucide-react';

const DashboardLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex transition-colors duration-200">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-64 flex flex-col">
                {/* Topbar */}
                <header className="h-20 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-30 transition-colors duration-200">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative w-full max-w-sm hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search classes, students..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:bg-white dark:focus:bg-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900 outline-none transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/dashboard/reminders')}
                            className="p-2.5 text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors relative"
                        >
                            <Bell size={20} />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <Link to="/dashboard/profile" className="w-10 h-10 bg-gray-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-gray-500 dark:text-slate-400 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors cursor-pointer hidden md:flex">
                            <User size={20} />
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
