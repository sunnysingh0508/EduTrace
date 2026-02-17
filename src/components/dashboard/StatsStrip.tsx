import { BookOpen } from 'lucide-react';

const StatsStrip = () => {
    return (
        <div className="mb-8">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 flex items-center gap-4 w-full md:w-1/3 transition-colors">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl">
                    <BookOpen size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 font-medium uppercase">Total Classes</p>
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">12</p>
                </div>
            </div>
        </div>
    );
};

export default StatsStrip;
