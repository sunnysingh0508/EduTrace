import { useState } from 'react';
import { ShieldCheck, Mail, Lock, CheckSquare, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4">
                    <ShieldCheck size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h2>
                <p className="text-gray-500">Login to access your dashboard</p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                console.log('Login attempt:', { rememberMe });
            }}>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="email"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="you@edutrace.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="password"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => setRememberMe(!rememberMe)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-slate-800"
                    >
                        {rememberMe ? <CheckSquare className="w-4 h-4 text-blue-600" /> : <Square className="w-4 h-4" />}
                        Remember me
                    </button>
                    <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Forgot Password?
                    </Link>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-600/20">
                    Login Account
                </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-8">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;
