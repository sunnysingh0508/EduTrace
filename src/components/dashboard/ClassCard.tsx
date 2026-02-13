import { BookOpen, Users } from 'lucide-react';

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

const ClassCard = ({ name, subject, section, semester, students, lectures, progress }: ClassCardProps) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            {/* Header */}
            <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{name}</h3>
                    <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-lg border border-blue-100">
                        {semester}
                    </span>
                </div>
                <p className="text-sm text-gray-500 font-medium">{subject} • {section}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-50 text-gray-400">
                        <Users size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Students</p>
                        <p className="text-sm font-bold text-slate-700">{students}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-50 text-gray-400">
                        <BookOpen size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Lectures</p>
                        <p className="text-sm font-bold text-slate-700">{lectures}</p>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-500">Syllabus Completion</span>
                    <span className="text-xs font-bold text-blue-600">{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                    Start Attendance
                </button>
            </div>
        </div>
    );
};

export default ClassCard;
