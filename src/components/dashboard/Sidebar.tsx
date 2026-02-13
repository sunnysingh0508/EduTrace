import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    CalendarCheck,
    BookOpen,
    FileBarChart,
    Settings,
    ShieldCheck,
    LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';

const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Attendance', icon: CalendarCheck, path: '/dashboard/attendance' },
    { name: 'Curriculum', icon: BookOpen, path: '/dashboard/curriculum' },
    { name: 'Reports', icon: FileBarChart, path: '/dashboard/reports' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="hidden lg:flex flex-col w-64 h-screen bg-gray-50 border-r border-gray-200 fixed left-0 top-0">
            {/* Logo */}
            <div className="h-20 flex items-center px-6 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-slate-800 tracking-tight">EduTrace</span>
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-6 space-y-1 px-3">
                {sidebarItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${isActive
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'text-gray-500 hover:bg-white hover:text-blue-600 hover:shadow-sm'
                                }`}
                        >
                            <Icon size={20} className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'} />
                            <span className="font-medium">{item.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                                />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-200">
                <button className="flex items-center gap-3 px-3 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
