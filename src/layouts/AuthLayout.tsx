import { Outlet } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Left Side - Promotional Content (Desktop Only) */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden items-center justify-center p-12">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                </div>

                <div className="relative z-10 text-white max-w-lg">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-3xl font-bold tracking-tight">EduTrace</span>
                    </div>

                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                        Secure Presence. <br />
                        <span className="text-blue-200">Smarter Classrooms.</span>
                    </h1>

                    <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                        Join thousands of educational institutions transforming their attendance management with AI-driven insights and real-time tracking.
                    </p>

                    <div className="flex gap-4">
                        <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                            <p className="text-2xl font-bold">99.9%</p>
                            <p className="text-sm text-blue-200">Uptime Reliability</p>
                        </div>
                        <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                            <p className="text-2xl font-bold">50k+</p>
                            <p className="text-sm text-blue-200">Active Students</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Auth Forms */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <Outlet />
                </motion.div>
            </div>
        </div>
    );
};

export default AuthLayout;
