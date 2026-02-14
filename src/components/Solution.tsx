import { QrCode, MapPin, ChartBar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
    {
        icon: <QrCode className="w-6 h-6 text-primary-600" />,
        title: "Dynamic QR Verification",
        description: "Secure, time-bound QR codes that prevent sharing and proxy marking."
    },
    {
        icon: <MapPin className="w-6 h-6 text-emerald-600" />,
        title: "Geo-Based Validation",
        description: "Ensure students are actually in the classroom with GPS geofencing."
    },
    {
        icon: <ChartBar className="w-6 h-6 text-indigo-600" />,
        title: "Real-Time Dashboard",
        description: "Instant attendance analytics for teachers and administrators."
    },
    {
        icon: <BookOpen className="w-6 h-6 text-orange-600" />,
        title: "Curriculum Tracking",
        description: "Monitor syllabus completion against academic schedules."
    }
];

const Solution = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text and List */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            Complete Control Over <br />
                            <span className="text-primary-600">Attendance & Academics</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            EduTrace replaces outdated manual processes with an intelligent, automated system that works on any device.
                        </p>

                        <div className="space-y-6">
                            {solutions.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-100">
                            <div className="bg-slate-50 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                                {/* Placeholder for dashboard preview */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl mx-auto flex items-center justify-center mb-4">
                                        <QrCode className="w-10 h-10" />
                                    </div>
                                    <p className="font-medium text-slate-600">Secure QR Rendering...</p>
                                </div>

                                {/* Decorative UI elements mimicking a dashboard */}
                                <div className="absolute top-4 left-4 right-4 h-4 bg-white rounded-full opacity-50"></div>
                                <div className="absolute top-12 left-4 w-1/3 h-32 bg-white rounded-lg opacity-60"></div>
                                <div className="absolute top-12 right-4 w-1/2 h-32 bg-primary-50 rounded-lg opacity-80 border border-primary-100"></div>
                                <div className="absolute bottom-4 left-4 right-4 h-24 bg-white rounded-lg opacity-70"></div>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-600/5 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-600/5 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Solution;
