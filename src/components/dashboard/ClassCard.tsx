import { BookOpen, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ClassCardProps {
    id: number;
    name: string;
    subject: string;
    section: string;
    semester: string;
    students: number;
    lectures: number;
    progress: number;
}

const ClassCard = ({ id, name, subject, section, semester, students, lectures, progress }: ClassCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            {/* Header */}
            <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{name}</h3>
                    <span className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold px-2 py-1 rounded-lg border border-primary-100 dark:border-primary-900/30">
                        {semester}
                    </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">{subject} • {section}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-50 dark:bg-slate-700/50 text-gray-400 dark:text-slate-400">
                        <Users size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-slate-500">Students</p>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{students}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-50 dark:bg-slate-700/50 text-gray-400 dark:text-slate-400">
                        <BookOpen size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-slate-500">Lectures</p>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{lectures}</p>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-500 dark:text-slate-400">Syllabus Completion</span>
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <button
                    onClick={() => navigate(`/dashboard/classes/${id}`)}
                    className="w-full bg-primary-600 hover:bg-primary-700 dark:hover:bg-primary-500 text-white text-sm font-medium py-2.5 rounded-xl transition-colors shadow-lg shadow-primary-600/20"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ClassCard;
