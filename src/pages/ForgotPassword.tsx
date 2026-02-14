import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Forgot Password?</h2>
                <p className="text-gray-500 text-sm">Enter your email and we'll send reset instructions.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                console.log('Forgot password request');
            }}>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="email"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                            placeholder="you@edutrace.com"
                        />
                    </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-3 rounded-xl font-bold hover:from-primary-700 hover:to-primary-600 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary-600/20">
                    Send Reset Link
                </button>
            </form>

            <div className="text-center mt-6">
                <Link to="/login" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-slate-800 transition-colors">
                    <ArrowLeft size={16} />
                    Back to Login
                </Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
