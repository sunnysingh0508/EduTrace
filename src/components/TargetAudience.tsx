import { GraduationCap, School, BookOpen, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const audiences = [
    {
        icon: <GraduationCap className="w-8 h-8 text-primary-600" />,
        title: "Colleges",
        description: "Manage large campuses with department-wise tracking."
    },
    {
        icon: <School className="w-8 h-8 text-emerald-600" />,
        title: "Universities",
        description: "Multi-campus attendance synchronization made easy."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-orange-600" />,
        title: "Schools",
        description: "Ensure student safety and automated parent alerts."
    },
    {
        icon: <UserCheck className="w-8 h-8 text-purple-600" />,
        title: "Coaching Institutes",
        description: "Track batch-wise attendance for better efficiency."
    }
];

const TargetAudience = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Trusted by Education Leaders
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tailored solutions for every type of educational institution.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group"
                        >
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TargetAudience;
