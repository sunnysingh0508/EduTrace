import { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <div className="bg-primary-600 p-2 rounded-lg">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-slate-800 tracking-tight">EduTrace</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">How it Works</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Testimonials</a>
                        <Link to="/login" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Log In</Link>
                        <Link to="/register" className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-2.5 rounded-xl font-medium hover:from-primary-700 hover:to-primary-600 transition-all shadow-lg shadow-primary-600/20">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-slate-800 transition-colors">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-4">
                            <a href="#features" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary-600 font-medium py-2">Features</a>
                            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary-600 font-medium py-2">How it Works</a>
                            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary-600 font-medium py-2">Testimonials</a>
                            <div className="pt-4 flex flex-col gap-3">
                                <Link to="/login" className="block w-full text-center text-gray-600 hover:text-primary-600 font-medium py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">Log In</Link>
                                <Link to="/register" className="block w-full text-center bg-primary-600 text-white py-3 rounded-xl font-medium hover:bg-primary-700 shadow-lg shadow-primary-600/20">Get Started</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
