import { Outlet } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';

const StudentLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Student Header */}
            <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-30">
                <div className="flex items-center gap-2">
                    <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                        <BookOpen size={20} />
                    </div>
                    <span className="font-bold text-slate-800 text-lg">EduTrace</span>
                </div>

                <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                    <User size={18} />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
                <Outlet />
            </main>

            {/* Simple Bottom Bar (Optional context) */}
            <div className="bg-white border-t border-gray-100 p-2 text-center text-xs text-gray-400">
                Student Portal • v1.0
            </div>
        </div>
    );
};

export default StudentLayout;
