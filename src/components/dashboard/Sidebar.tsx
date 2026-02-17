import { LayoutDashboard, BookOpen, LogOut, UserCheck, FileText, Bell, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/overview' },
    { icon: BookOpen, label: 'Classes', path: '/dashboard/classes' },
    { icon: FileText, label: 'Assignments', path: '/dashboard/assignments' },
    { icon: Bell, label: 'Reminders', path: '/dashboard/reminders' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="hidden lg:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 h-screen fixed left-0 top-0 transition-colors duration-200">
            {/* Logo Area */}
            <div className="flex items-center gap-3 px-6 h-20 border-b border-gray-100 dark:border-slate-800">
                <div className="bg-primary-600 p-2 rounded-lg">
                    <UserCheck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800 dark:text-slate-100">EduTrace</span>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                <p className="px-2 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2">Menu</p>
                {menuItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                : 'text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                                }`}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </Link>
                    );
                })}


            </div>

            {/* Profile / Logout Section */}
            <div className="p-4 border-t border-gray-100 dark:border-slate-800">
                <Link to="/dashboard/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
                        JD
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">John Doe</p>
                        <p className="text-xs text-gray-500 dark:text-slate-500">Teacher</p>
                    </div>
                    <LogOut size={18} className="text-gray-400 dark:text-slate-500 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
