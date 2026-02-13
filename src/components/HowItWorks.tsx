import { motion } from 'framer-motion';

const steps = [
    {
        number: "1",
        title: "Generate Secure QR",
        description: "Teachers project a dynamic, time-bound QR code on the screen."
    },
    {
        number: "2",
        title: "Verify Student Presence",
        description: "Students scan the code within seconds using the EduTrace app."
    },
    {
        number: "3",
        title: "Track & Analyze Data",
        description: "Instant attendance logs are updated on the dashboard with analytics."
    }
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-slate-900 text-white" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A simple 3-step process to modernize your classroom attendance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700 -z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 shadow-xl relative group">
                                <span className="text-3xl font-bold text-blue-500 group-hover:scale-110 transition-transform">{step.number}</span>
                                <div className="absolute inset-0 rounded-full border border-slate-700 group-hover:border-blue-500/50 transition-colors"></div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
