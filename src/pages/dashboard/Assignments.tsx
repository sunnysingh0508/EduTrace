
import { useState, useRef } from 'react';
import {
    Plus,
    Search,
    Filter,
    FileText,
    Clock,
    AlertCircle,
    CheckCircle,
    MoreVertical,
    Calendar,
    X,
    UploadCloud,
    File
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy Data
const assignments = [
    {
        id: 1,
        title: "Data Structures Project",
        subject: "Computer Science",
        dueDate: "2026-02-20",
        totalStudents: 62,
        submitted: 45,
        status: "Active",
    },
    {
        id: 2,
        title: "Database Schema Design",
        subject: "Database Systems",
        dueDate: "2026-02-18",
        totalStudents: 58,
        submitted: 52,
        status: "Due Soon",
    },
    {
        id: 3,
        title: "Web Development Basics",
        subject: "Information Tech",
        dueDate: "2026-02-10",
        totalStudents: 45,
        submitted: 40,
        status: "Overdue",
    },
    {
        id: 4,
        title: "Operating Systems Quiz",
        subject: "Computer Science",
        dueDate: "2026-02-25",
        totalStudents: 60,
        submitted: 12,
        status: "Active",
    },
];

const Assignments = () => {
    const [assignmentsList, setAssignmentsList] = useState(assignments);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    // Form State
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('Computer Science');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
    const [totalMarks, setTotalMarks] = useState('');
    const [allowLate, setAllowLate] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const resetForm = () => {
        setTitle('');
        setSubject('Computer Science');
        setDueDate('');
        setDescription('');
        setTotalMarks('');
        setAllowLate(false);
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const handleCreateAssignment = () => {
        if (!title || !dueDate || !totalMarks) return;

        const newAssignment = {
            id: assignmentsList.length + 1,
            title,
            subject,
            dueDate,
            totalStudents: 60, // Default for now
            submitted: 0,
            status: 'Active',
        };

        setAssignmentsList([newAssignment, ...assignmentsList]);
        handleCloseModal();
    };

    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-emerald-100 text-emerald-600';
            case 'Due Soon': return 'bg-yellow-100 text-yellow-600';
            case 'Overdue': return 'bg-red-100 text-red-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Assignment Manager</h1>
                    <p className="text-sm text-gray-500">Create and monitor class assignments</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary-600 text-white rounded-xl px-5 py-2.5 hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/20 flex items-center gap-2 font-medium"
                >
                    <Plus size={20} />
                    Create Assignment
                </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    onClick={() => setFilterStatus('All')}
                    className={`bg-white rounded-2xl p-4 shadow-md border cursor-pointer transition-all ${filterStatus === 'All' ? 'border-primary-500 ring-2 ring-primary-100' : 'border-gray-100 hover:border-primary-200'}`}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
                            <FileText size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Assignments</p>
                            <p className="text-2xl font-bold text-slate-800">{assignmentsList.length}</p>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setFilterStatus('Active')}
                    className={`bg-white rounded-2xl p-4 shadow-md border cursor-pointer transition-all ${filterStatus === 'Active' ? 'border-emerald-500 ring-2 ring-emerald-100' : 'border-gray-100 hover:border-emerald-200'}`}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Active Assignments</p>
                            <p className="text-2xl font-bold text-slate-800">
                                {assignmentsList.filter(a => a.status === 'Active').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setFilterStatus('Overdue')}
                    className={`bg-white rounded-2xl p-4 shadow-md border cursor-pointer transition-all ${filterStatus === 'Overdue' ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-100 hover:border-red-200'}`}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                            <AlertCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Late Submissions</p>
                            <p className="text-2xl font-bold text-slate-800">
                                {assignmentsList.filter(a => a.status === 'Overdue').length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart Alert Strip */}
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 flex items-center gap-3 text-yellow-800 shadow-sm">
                <Clock size={20} className="text-yellow-600" />
                <span className="font-medium text-sm">Action Required: 2 assignments are due this week.</span>
            </div>

            {/* Main Content - Assignment List */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                {/* Search & Filter */}
                <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search assignments..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                            <Filter size={16} />
                            Filter
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Assignment Title</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Due Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Progress</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {assignmentsList.filter(assignment =>
                                (filterStatus === 'All' || assignment.status === filterStatus) &&
                                (assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    assignment.subject.toLowerCase().includes(searchQuery.toLowerCase()))
                            ).map((assignment) => {
                                const progress = Math.round((assignment.submitted / assignment.totalStudents) * 100);
                                return (
                                    <tr key={assignment.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-primary-50 text-primary-600 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                                                    <FileText size={18} />
                                                </div>
                                                <span className="font-medium text-slate-800">{assignment.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{assignment.subject}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
                                            <Calendar size={14} className="text-gray-400" />
                                            {assignment.dueDate}
                                        </td>
                                        <td className="px-6 py-4" style={{ minWidth: '150px' }}>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-gray-500">{assignment.submitted}/{assignment.totalStudents}</span>
                                                <span className="font-bold text-slate-700">{progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                                <div
                                                    className="bg-primary-600 h-1.5 rounded-full transition-all duration-500"
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium border border-transparent ${getStatusColor(assignment.status)}`}>
                                                {assignment.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-gray-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Create Assignment Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={handleCloseModal}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl w-full max-w-lg shadow-xl relative z-10 overflow-hidden"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                <h3 className="text-lg font-bold text-slate-800">Create New Assignment</h3>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Assignment Title</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Final Project Submission"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <select
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        >
                                            <option>Computer Science</option>
                                            <option>Database Systems</option>
                                            <option>Web Development</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            value={dueDate}
                                            onChange={(e) => setDueDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Enter assignment details..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Attach File</label>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <div
                                        onClick={handleFileClick}
                                        className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer group"
                                    >
                                        <UploadCloud className="mx-auto h-8 w-8 text-gray-400 group-hover:text-primary-500 transition-colors" />
                                        <p className="mt-1 text-sm text-gray-500">
                                            {selectedFile ? (
                                                <span className="text-primary-600 font-medium">{selectedFile.name}</span>
                                            ) : (
                                                "Click to upload or drag and drop"
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="late"
                                            className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 border-gray-300"
                                            checked={allowLate}
                                            onChange={(e) => setAllowLate(e.target.checked)}
                                        />
                                        <label htmlFor="late" className="text-sm text-gray-600">Allow late submissions</label>
                                    </div>
                                    <div className="w-32">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Total Marks</label>
                                        <input
                                            type="number"
                                            placeholder="100"
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                                            value={totalMarks}
                                            onChange={(e) => setTotalMarks(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-100 flex gap-3 justify-end bg-gray-50">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateAssignment}
                                    className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 shadow-md shadow-primary-600/20 transition-all"
                                >
                                    Create Assignment
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Assignments;
