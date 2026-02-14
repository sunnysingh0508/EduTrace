import { UserX, FileWarning, CircleHelp } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
    {
        icon: <UserX className="w-7 h-7 text-red-500" />,
        title: "Proxy Attendance Issues",
        description: "Students mark attendance for absent friends, compromising data integrity."
    },
    {
        icon: <FileWarning className="w-7 h-7 text-orange-500" />,
        title: "Manual Paperwork Overload",
        description: "Teachers waste valuable class time managing physical registers and entry sheets."
    },
    {
        icon: <CircleHelp className="w-7 h-7 text-primary-500" />,
        title: "No Curriculum Transparency",
        description: "Lack of real-time tracking leads to syllabus lags and last-minute rushing."
    }
];

const Problem = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Traditional Attendance Systems Are <span className="text-red-500">Outdated</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Institutions struggle with manual tracking, leading to inefficiencies and lack of accountability.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>

                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 relative z-10">
                                {problem.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3">{problem.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Problem;
