import { motion } from 'framer-motion';

const subjects = [
    { name: 'Data Structures', progress: 75, color: 'bg-blue-600' },
    { name: 'DBMS', progress: 60, color: 'bg-yellow-500' },
    { name: 'Operating Systems', progress: 40, color: 'bg-red-500' },
    { name: 'Web Development', progress: 90, color: 'bg-emerald-500' },
];

const SyllabusProgress = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
        >
            <h3 className="text-lg font-bold text-slate-800 mb-6">Syllabus Progress</h3>

            <div className="space-y-6">
                {subjects.map((subject, index) => (
                    <div key={subject.name}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-700">{subject.name}</span>
                            <span className="text-sm font-bold text-slate-900">{subject.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${subject.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                className={`h-full rounded-full ${subject.color}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SyllabusProgress;
