import { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import StatsStrip from '../../components/dashboard/StatsStrip';
import ClassCard from '../../components/dashboard/ClassCard';
import CreateClassModal from '../../components/dashboard/CreateClassModal';
import { classesData } from '../../data/mockData';

interface ClassData {
    id: number;
    name: string;
    subject: string;
    section: string;
    semester: string;
    students: number;
    lectures: number;
    progress: number;
}

const TeacherClasses = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredClasses = classesData.filter((cls: ClassData) => {
        return cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cls.subject.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">My Classes</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your active courses and attendance</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-slate-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                        <Filter size={18} />
                        Filter
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20"
                    >
                        <Plus size={18} />
                        Create New Class
                    </button>
                </div>
            </div>

            {/* Stats Strip */}
            <StatsStrip />

            {/* Search (Mobile/Tablet visible) */}
            <div className="mb-6 md:hidden">
                <input
                    type="text"
                    placeholder="Search classes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-500 transition-all"
                />
            </div>

            {/* Classes Grid */}
            {filteredClasses.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredClasses.map((cls: ClassData) => {
                        return <ClassCard key={cls.id} {...cls} />;
                    })}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                    <p className="text-gray-500">No classes found matching your search.</p>
                </div>
            )}

            {/* Create Class Modal */}
            <CreateClassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default TeacherClasses;
