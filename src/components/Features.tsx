import { Shield, Smartphone, PieChart, Thermometer, Activity, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Secure QR Rotation",
        description: "QR codes regenerate every 5 seconds to prevent snapshot sharing.",
        color: "bg-primary-100 text-primary-600"
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Proxy Detection Engine",
        description: "Advanced algorithms detect suspicious attendance patterns.",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: <PieChart className="w-6 h-6" />,
        title: "Attendance Analytics",
        description: "Visual reports on student regularity and class strength.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: <Thermometer className="w-6 h-6" />,
        title: "Syllabus Heatmap",
        description: "Track topic completion status across all subjects effectively.",
        color: "bg-orange-100 text-orange-600"
    },
    {
        icon: <Activity className="w-6 h-6" />,
        title: "Academic Health Score",
        description: "AI-driven score to measure student academic engagement.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Automated Reports",
        description: "Generate weekly/monthly PDF reports with a single click.",
        color: "bg-cyan-100 text-cyan-600"
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Powerful Features Designed for <span className="text-primary-600">Modern Classrooms</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to manage attendance, curriculum, and academic insights in one place.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${feature.color}`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
