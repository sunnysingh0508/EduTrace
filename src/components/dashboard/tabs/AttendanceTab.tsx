import { useState, useEffect } from 'react';
import { QrCode, RefreshCw, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AttendanceTab = () => {
    // Generate a random string to simulate a unique session token
    const generateToken = () => Math.random().toString(36).substring(2, 15);
    const generatePin = () => Math.floor(1000 + Math.random() * 9000).toString();

    const [qrToken, setQrToken] = useState(generateToken());
    const [pin, setPin] = useState(generatePin());
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setQrToken(generateToken()); // Refresh QR
                    setPin(generatePin()); // Refresh PIN
                    return 10; // Reset timer
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Using a reliable public API for QR code generation for the prototype
    // In a real app, this would likely be generated backend-side or using a local library like 'qrcode.react'
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrToken)}`;

    return (
        <div className="max-w-2xl mx-auto py-10">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
                    <QrCode className="text-primary-600" size={28} />
                    Scan to Mark Attendance
                </h2>
                <p className="text-gray-500 mt-2">
                    Students can scan this QR code with their EduTrace app to mark their attendance instantly.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center gap-8 md:items-start">
                    {/* QR Code Card */}
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 relative">
                        {/* Animated Border/Glow effect to indicate active state */}
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                            className="absolute inset-0 rounded-3xl border-2 border-primary-500 opacity-50 pointer-events-none"
                        />

                        <div className="w-64 h-64 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden relative">
                            {/* QR Image */}
                            <img
                                src={qrUrl}
                                alt="Attendance QR Code"
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />

                            {/* Overlay text for visual clarity (optional) */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                                    <img src="/logo_placeholder.png" onError={(e) => e.currentTarget.style.display = 'none'} alt="" className="w-6 h-6" />
                                    <span className="text-primary-600 font-bold text-xs">EDU</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                                <Clock size={16} />
                                <span>Refreshes in <span className="font-bold text-primary-600 w-4 inline-block text-center">{timeLeft}</span>s</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                <RefreshCw size={12} className={timeLeft < 3 ? 'animate-spin' : ''} />
                                <span>Auto-updating</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1 w-full bg-gray-100 mt-4 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary-500"
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                                key={qrToken} // Key change forces re-render of animation
                            />
                        </div>
                    </div>

                    {/* PIN Code Fallback */}
                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full min-h-[300px] min-w-[200px]">
                        <h3 className="text-gray-500 font-medium mb-4 text-center">Or enter PIN</h3>
                        <div className="bg-gray-100 p-4 rounded-2xl mb-2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={pin}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-5xl font-mono font-bold text-slate-800 tracking-widest"
                                >
                                    {pin}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center max-w-[150px]">
                            Enter this code if scanning fails. Refreshes every 10s.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center bg-primary-50 text-primary-800 px-6 py-4 rounded-xl text-sm max-w-md border border-primary-100">
                    <strong>Note:</strong> This code is dynamically generated and changes every 10 seconds for security. Proxies or screenshots will expire.
                </div>
            </div>
        </div>
    );
};

export default AttendanceTab;
