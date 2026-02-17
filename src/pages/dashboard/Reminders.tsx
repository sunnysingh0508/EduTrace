
import { useState } from 'react';
import {
    Bell,
    Calendar,
    Clock,
    Plus,
    Search,
    Trash2,
    AlertCircle,
    X,
    Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, isPast, isToday, parseISO } from 'date-fns';

// Dummy Data
const initialReminders = [
    {
        id: 1,
        title: "Grade Data Structures Output",
        category: "Assignment",
        date: "2026-02-14",
        time: "14:00",
        description: "Review and grade the final project submissions for CS101.",
        priority: "High",
        completed: false,
    },
    {
        id: 2,
        title: "Department Meeting",
        category: "Meeting",
        date: "2026-02-15",
        time: "10:00",
        description: "Weekly sync with the computer science department faculty.",
        priority: "Medium",
        completed: false,
    },
    {
        id: 3,
        title: "Prepare Mid-term Exam",
        category: "Exam",
        date: "2026-02-20",
        time: "09:00",
        description: "Finalize questions for the upcoming Database Systems mid-term.",
        priority: "High",
        completed: false,
    },
    {
        id: 4,
        title: "Update Course Syllabus",
        category: "General",
        date: "2026-02-13",
        time: "16:00",
        description: "Update the syllabus for Web Development based on student feedback.",
        priority: "Low",
        completed: true,
    },
];

const Reminders = () => {
    const [reminders, setReminders] = useState(initialReminders);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [filterPriority, setFilterPriority] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All'); // All, Upcoming, Overdue, Completed

    // Form State
    const [newReminder, setNewReminder] = useState({
        title: '',
        category: 'General',
        date: '',
        time: '',
        description: '',
        priority: 'Medium',
    });

    // Helper functions for styles
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Assignment': return 'bg-blue-100 text-blue-600';
            case 'Exam': return 'bg-purple-100 text-purple-600';
            case 'Meeting': return 'bg-emerald-100 text-emerald-600';
            case 'General': return 'bg-gray-100 text-gray-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-600';
            case 'Medium': return 'bg-yellow-100 text-yellow-600';
            case 'Low': return 'bg-green-100 text-green-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    // Actions
    const handleCreateWrapper = () => {
        if (!newReminder.title || !newReminder.date) return;

        const reminder = {
            id: reminders.length + 1,
            ...newReminder,
            completed: false,
        };

        setReminders([reminder, ...reminders]);
        setIsModalOpen(false);
        setNewReminder({
            title: '',
            category: 'General',
            date: '',
            time: '',
            description: '',
            priority: 'Medium',
        });
    };

    const handleToggleStatus = (id: number) => {
        setReminders(reminders.map(r =>
            r.id === id ? { ...r, completed: !r.completed } : r
        ));
    };

    const handleDelete = (id: number) => {
        setReminders(reminders.filter(r => r.id !== id));
    };

    // Filtering Logic
    const filteredReminders = reminders.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filterCategory === 'All' || r.category === filterCategory;
        const matchesPriority = filterPriority === 'All' || r.priority === filterPriority;

        let matchesStatus = true;
        if (filterStatus === 'Completed') matchesStatus = r.completed;
        else if (filterStatus === 'Overdue') matchesStatus = !r.completed && isPast(parseISO(`${r.date}T${r.time || '23:59'}`)) && !isToday(parseISO(r.date));
        else if (filterStatus === 'Upcoming') matchesStatus = !r.completed && !isPast(parseISO(`${r.date}T${r.time || '00:00'}`));

        return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
    });

    // Stats
    const totalReminders = reminders.length;
    const upcomingReminders = reminders.filter(r => !r.completed && !isPast(parseISO(r.date))).length;
    const overdueReminders = reminders.filter(r => !r.completed && isPast(parseISO(r.date)) && !isToday(parseISO(r.date))).length;
    const dueTodayCount = reminders.filter(r => !r.completed && isToday(parseISO(r.date))).length;

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Reminders Manager</h1>
                    <p className="text-sm text-gray-500">Manage important academic notifications</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary-600 text-white rounded-xl px-5 py-2.5 hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/20 flex items-center gap-2 font-medium"
                >
                    <Plus size={20} />
                    Create Reminder
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    onClick={() => setFilterStatus('All')}
                    className={`bg-white rounded-2xl p-4 shadow-md border cursor-pointer transition-all ${filterStatus === 'All' ? 'border-primary-500 ring-2 ring-primary-100' : 'border-gray-100 hover:border-primary-200'}`}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
                            <Bell size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Reminders</p>
                            <p className="text-2xl font-bold text-slate-800">{totalReminders}</p>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setFilterStatus('Upcoming')}
                    className={`bg-white rounded-2xl p-4 shadow-md border cursor-pointer transition-all ${filterStatus === 'Upcoming' ? 'border-emerald-500 ring-2 ring-emerald-100' : 'border-gray-100 hover:border-emerald-200'}`}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Upcoming</p>
                            <p className="text-2xl font-bold text-slate-800">{upcomingReminders}</p>
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
                            <p className="text-sm text-gray-500 font-medium">Overdue</p>
                            <p className="text-2xl font-bold text-slate-800">{overdueReminders}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart Alert Strip */}
            {dueTodayCount > 0 && (
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 flex items-center gap-3 text-yellow-800 shadow-sm animate-in fade-in slide-in-from-top-2">
                    <Clock size={20} className="text-yellow-600" />
                    <span className="font-medium text-sm">Action Required: You have {dueTodayCount} reminders due today.</span>
                </div>
            )}

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search reminders..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        className="px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-600"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="Assignment">Assignment</option>
                        <option value="Exam">Exam</option>
                        <option value="Meeting">Meeting</option>
                        <option value="General">General</option>
                    </select>
                    <select
                        className="px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-600"
                        value={filterPriority}
                        onChange={(e) => setFilterPriority(e.target.value)}
                    >
                        <option value="All">All Priorities</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>

            {/* Reminders List */}
            <div className="space-y-4">
                {filteredReminders.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-gray-500">No reminders found.</p>
                    </div>
                ) : (
                    filteredReminders.map((reminder) => {
                        const isOverdue = !reminder.completed && isPast(parseISO(reminder.date)) && !isToday(parseISO(reminder.date));

                        return (
                            <motion.div
                                key={reminder.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className={`bg-white rounded-2xl p-5 shadow-sm border transition-all hover:shadow-md flex flex-col sm:flex-row gap-4 sm:items-center justify-between group
                                    ${isOverdue ? 'border-l-4 border-l-red-500 border-t-gray-100 border-r-gray-100 border-b-gray-100 bg-red-50/10' : 'border-gray-100'}
                                    ${reminder.completed ? 'opacity-60 bg-gray-50' : ''}
                                `}
                            >
                                <div className="flex items-start gap-4 flex-1">
                                    <div
                                        onClick={() => handleToggleStatus(reminder.id)}
                                        className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center transition-colors
                                            ${reminder.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-primary-500'}
                                        `}
                                    >
                                        {reminder.completed && <Check size={14} className="text-white" />}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className={`font-bold text-slate-800 ${reminder.completed ? 'line-through text-gray-500' : ''}`}>
                                                {reminder.title}
                                            </h3>
                                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(reminder.category)}`}>
                                                {reminder.category}
                                            </span>
                                            {isOverdue && (
                                                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-600 flex items-center gap-1">
                                                    <AlertCircle size={10} /> Overdue
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">{reminder.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {format(parseISO(reminder.date), 'MMM d, yyyy')}
                                            </span>
                                            {reminder.time && (
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {reminder.time}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pl-10 sm:pl-0">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(reminder.priority)}`}>
                                        {reminder.priority}
                                    </span>
                                    <button
                                        onClick={() => handleDelete(reminder.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50 opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })
                )}
            </div>

            {/* Create Reminder Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl w-full max-w-lg shadow-xl relative z-10 overflow-hidden"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                <h3 className="text-lg font-bold text-slate-800">Create New Reminder</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Reminder Title</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="e.g., Submit Grades"
                                        value={newReminder.title}
                                        onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                        <select
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                                            value={newReminder.category}
                                            onChange={(e) => setNewReminder({ ...newReminder, category: e.target.value })}
                                        >
                                            <option>Assignment</option>
                                            <option>Exam</option>
                                            <option>Meeting</option>
                                            <option>General</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                                        <select
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                                            value={newReminder.priority}
                                            onChange={(e) => setNewReminder({ ...newReminder, priority: e.target.value })}
                                        >
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            value={newReminder.date}
                                            onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                        <input
                                            type="time"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            value={newReminder.time}
                                            onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                                        placeholder="Add details..."
                                        value={newReminder.description}
                                        onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-100 flex gap-3 justify-end bg-gray-50">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateWrapper}
                                    className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 shadow-md shadow-primary-600/20 transition-all"
                                >
                                    Create Reminder
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Reminders;
