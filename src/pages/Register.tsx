import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [role, setRole] = useState('student');

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h2>
                <p className="text-gray-500">Get started with secure academic tracking</p>
            </div>

            {/* Role Selection */}
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
                {['student', 'teacher'].map((r) => (
                    <button
                        key={r}
                        onClick={() => setRole(r)}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-all ${role === r
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-500 hover:text-slate-800'
                            }`}
                    >
                        {r}
                    </button>
                ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                console.log('Register attempt:', { role });
            }}>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="email"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="you@edutrace.com"
                        />
                    </div>
                </div>

                {(role === 'teacher') && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Institution Name</label>
                        <div className="relative mb-4">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                placeholder="University / College Name"
                            />
                        </div>
                    </motion.div>
                )}

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="password"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="password"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-600/20 mt-2">
                    Create Account
                </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;
