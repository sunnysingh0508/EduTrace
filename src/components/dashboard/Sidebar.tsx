import { LayoutDashboard, BookOpen, LogOut, UserCheck, FileText, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/overview' },
    { icon: BookOpen, label: 'Classes', path: '/dashboard/classes' },
    { icon: FileText, label: 'Assignments', path: '/dashboard/assignments' },
    { icon: Bell, label: 'Reminders', path: '/dashboard/reminders' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
            {/* Logo Area */}
            <div className="flex items-center gap-3 px-6 h-20 border-b border-gray-100">
                <div className="bg-primary-600 p-2 rounded-lg">
                    <UserCheck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800">EduTrace</span>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
                {menuItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-slate-900'
                                }`}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </Link>
                    );
                })}


            </div>

            {/* Profile / Logout Section */}
            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                        JD
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800">John Doe</p>
                        <p className="text-xs text-gray-500">Teacher</p>
                    </div>
                    <LogOut size={18} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
