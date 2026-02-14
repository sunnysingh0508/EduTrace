import { BookOpen } from 'lucide-react';

const StatsStrip = () => {
    return (
        <div className="mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 w-full md:w-1/3">
                <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
                    <BookOpen size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">Total Classes</p>
                    <p className="text-2xl font-bold text-slate-800">12</p>
                </div>
            </div>
        </div>
    );
};

export default StatsStrip;
