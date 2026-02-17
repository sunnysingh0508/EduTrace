import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CreateClassModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateClassModal = ({ isOpen, onClose }: CreateClassModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden transition-colors"
                        >
                            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-slate-800">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Create New Class</h3>
                                <button onClick={onClose} className="text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Class Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Data Structures"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject Code</label>
                                        <input
                                            type="text"
                                            placeholder="CS-301"
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Section</label>
                                        <input
                                            type="text"
                                            placeholder="3A"
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Semester</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 outline-none transition-all bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                                            <option>Sem 1</option>
                                            <option>Sem 2</option>
                                            <option>Sem 3</option>
                                            <option>Sem 4</option>
                                            <option>Sem 5</option>
                                            <option>Sem 6</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Total Students</label>
                                        <input
                                            type="number"
                                            placeholder="60"
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-100 dark:border-slate-800 flex gap-3 bg-gray-50 dark:bg-slate-900/50">
                                <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-white dark:hover:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-600 transition-all">
                                    Cancel
                                </button>
                                <button className="flex-1 px-4 py-2.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
                                    Create Class
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CreateClassModal;
