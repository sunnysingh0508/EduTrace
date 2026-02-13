import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10" />
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-radial from-blue-100/50 to-transparent blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                            New: Smart Syllabus Tracking
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
                            Smart Attendance. <br />
                            <span className="text-blue-600">Verified Presence.</span> <br />
                            Real Academic Insights.
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                            EduTrace ensures secure attendance tracking and transparent curriculum progress for modern institutions. Eliminate proxy attendance today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 group">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all">
                                <PlayCircle className="w-5 h-5 text-gray-500" />
                                View Demo
                            </a>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                                        {/* Placeholder for user avatars */}
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <p>Trusted by 50+ Institutions</p>
                        </div>
                    </motion.div>

                    {/* Right Column: Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 w-full h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="pt-8 bg-slate-50 min-h-[400px] flex items-center justify-center text-gray-400">
                                {/* Placeholder for dashboard image */}
                                <div className="text-center p-8">
                                    <p className="mb-2">Dashboard Preview</p>
                                    <div className="w-64 h-32 bg-gray-200 rounded-lg mx-auto"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                                    98%
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Attendance Rate</p>
                                    <p className="text-sm font-bold text-slate-800">Excellent</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <span className="text-xl">🛡️</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Proxy Detection</p>
                                    <p className="text-sm font-bold text-slate-800">Active</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
