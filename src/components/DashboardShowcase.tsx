import { motion } from 'framer-motion';
import { CheckCircle, TriangleAlert, TrendingUp } from 'lucide-react';

const DashboardShowcase = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Real-Time Insights at a Glance
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive analytics that help you make data-driven academic decisions.
                    </p>
                </div>

                <div className="relative">
                    {/* Main Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl shadow-2xl overflow-hidden border border-gray-200 bg-white"
                    >
                        {/* Mockup Header */}
                        <div className="bg-white border-b border-gray-100 p-4 flex items-center gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="px-4 py-1 bg-gray-100 rounded-md text-xs text-gray-500 flex-1 max-w-sm">edutrace.app/dashboard</div>
                        </div>

                        {/* Mockup Content Area */}
                        <div className="p-8 bg-slate-50 min-h-[500px] grid lg:grid-cols-4 gap-6">
                            {/* Sidebar */}
                            <div className="hidden lg:block col-span-1 bg-white rounded-xl border border-gray-100 p-4 space-y-4">
                                <div className="h-8 w-3/4 bg-gray-100 rounded mb-8"></div>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="h-10 w-full bg-gray-50 rounded hover:bg-primary-50 transition-colors"></div>
                                ))}
                            </div>

                            {/* Main Content */}
                            <div className="col-span-1 lg:col-span-3 space-y-6">
                                {/* Top Stats */}
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><CheckCircle size={20} /></div>
                                            <span className="text-green-500 text-xs font-bold">+4.5%</span>
                                        </div>
                                        <div className="text-2xl font-bold text-slate-800">92.8%</div>
                                        <div className="text-xs text-gray-500">Avg. Attendance</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-red-50 rounded-lg text-red-600"><TriangleAlert size={20} /></div>
                                            <span className="text-red-500 text-xs font-bold">-12%</span>
                                        </div>
                                        <div className="text-2xl font-bold text-slate-800">14</div>
                                        <div className="text-xs text-gray-500">Missed Classes</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><TrendingUp size={20} /></div>
                                            <span className="text-primary-500 text-xs font-bold">On Track</span>
                                        </div>
                                        <div className="text-2xl font-bold text-slate-800">85%</div>
                                        <div className="text-xs text-gray-500">Syllabus Completion</div>
                                    </div>
                                </div>

                                {/* Chart Area Placeholder */}
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-64 flex items-center justify-center">
                                    <div className="text-center text-gray-400">
                                        <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-20" />
                                        <p>Analytics Visualization Area</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Feature Tags */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-1/2 -right-4 lg:-right-12 bg-white px-5 py-3 rounded-xl shadow-lg border border-gray-100 z-10 hidden md:block"
                    >
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <p className="font-semibold text-slate-800 text-sm">Risk Alert: Low Attendance</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default DashboardShowcase;
