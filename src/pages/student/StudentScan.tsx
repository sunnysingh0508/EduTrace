import { useState } from 'react';
import { Camera, Zap, CheckCircle, XCircle, ArrowRight, Grid, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentScan = () => {
    const [mode, setMode] = useState<'scan' | 'pin'>('scan');
    const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('Align QR code within the frame');
    const [pin, setPin] = useState(['', '', '', '']);

    // Simulate the scanning process
    const handleSimulateScan = () => {
        if (scanState !== 'idle') return;

        setScanState('scanning');
        setStatusMessage('Scanning...');

        // Step 1: Simulate "Scanning" delay
        setTimeout(() => {
            setStatusMessage('Verifying token...');

            // Step 2: Simulate WebSocket / API verification delay
            setTimeout(() => {
                finishSimulation();
            }, 1500);
        }, 1500);
    };

    const handlePinSubmit = () => {
        if (pin.join('').length !== 4 || scanState !== 'idle') return;

        setScanState('scanning');
        setStatusMessage('Verifying PIN...');

        setTimeout(() => {
            finishSimulation();
        }, 2000);
    };

    const finishSimulation = () => {
        // Determine random success/fail for demo purposes (mainly success)
        const isSuccess = Math.random() > 0.1;

        if (isSuccess) {
            setScanState('success');
            setStatusMessage('Attendance Marked Successfully!');
            // Mock WebSocket send
            console.log('WS: Sending attendance data...');
        } else {
            setScanState('error');
            setStatusMessage('Invalid or Expired Token');
        }

        // Reset after a few seconds
        setTimeout(() => {
            setScanState('idle');
            setStatusMessage(mode === 'scan' ? 'Align QR code within the frame' : 'Enter 4-digit class PIN');
            setPin(['', '', '', '']);
        }, 3000);
    };

    const handlePinChange = (index: number, value: string) => {
        if (value.length > 1) return; // Only allow 1 digit
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        // Auto-focus next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`pin-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !pin[index] && index > 0) {
            const prevInput = document.getElementById(`pin-${index - 1}`);
            prevInput?.focus();
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-black text-white relative overflow-hidden flex flex-col">
            {/* Header Overlay */}
            <div className="pt-6 px-6 text-center z-20">
                <h2 className="text-lg font-medium opacity-90">Mark Attendance</h2>
                <p className="text-sm text-gray-400">Physics 101 • Prof. Sharma</p>

                {/* Mode Toggle */}
                <div className="flex justify-center mt-6">
                    <div className="bg-white/10 p-1 rounded-xl flex gap-1">
                        <button
                            onClick={() => { setMode('scan'); setStatusMessage('Align QR code within the frame'); }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${mode === 'scan' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <QrCode size={16} /> Scan
                        </button>
                        <button
                            onClick={() => { setMode('pin'); setStatusMessage('Enter 4-digit class PIN'); }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${mode === 'pin' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Grid size={16} /> PIN
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">

                {mode === 'scan' ? (
                    /* Scanner Frame */
                    <div className="relative w-72 h-72">
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-500 rounded-tl-xl"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-500 rounded-tr-xl"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-500 rounded-bl-xl"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-500 rounded-br-xl"></div>

                        {/* Scanning Laser Animation */}
                        {scanState === 'scanning' && (
                            <motion.div
                                initial={{ top: 0, opacity: 0 }}
                                animate={{ top: "100%", opacity: 1 }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                                className="absolute left-0 w-full h-1 bg-primary-500 shadow-[0_0_15px_rgba(225,29,72,0.8)]"
                            />
                        )}

                        {/* Camera Placeholder */}
                        <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                            {scanState === 'idle' ? <Camera size={48} className="text-white/20" /> : <div className="text-xs font-mono text-primary-400">Processing...</div>}
                        </div>
                    </div>
                ) : (
                    /* PIN Entry UI */
                    <div className="w-full max-w-xs">
                        <div className="flex gap-4 justify-center mb-8">
                            {pin.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`pin-${index}`}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handlePinChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-14 h-16 bg-white/10 border-2 border-white/20 rounded-xl text-center text-3xl font-bold text-white focus:border-primary-500 focus:bg-white/20 outline-none transition-all"
                                />
                            ))}
                        </div>
                        <p className="text-center text-gray-400 text-sm">Ask your teacher for the updated PIN</p>
                    </div>
                )}

                {/* Status/Success/Error Overlay */}
                <AnimatePresence>
                    {(scanState === 'success' || scanState === 'error') && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-30"
                        >
                            <div className={`p-4 rounded-full mb-4 shadow-xl ${scanState === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                                {scanState === 'success' ? <CheckCircle size={40} className="text-white" /> : <XCircle size={40} className="text-white" />}
                            </div>
                            <h3 className={`text-2xl font-bold mb-1 ${scanState === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                {scanState === 'success' ? 'Success!' : 'Failed'}
                            </h3>
                            <p className="text-gray-300">{statusMessage}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Status Text (Normal) */}
                {(scanState === 'idle' || scanState === 'scanning') && (
                    <div className="mt-8 text-center h-6">
                        <p className="text-base font-medium text-white">{statusMessage}</p>
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            <div className="bg-white/5 backdrop-blur-lg border-t border-white/10 p-6 pb-8">
                <button
                    onClick={mode === 'scan' ? handleSimulateScan : handlePinSubmit}
                    disabled={scanState !== 'idle' || (mode === 'pin' && pin.join('').length !== 4)}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${scanState !== 'idle' || (mode === 'pin' && pin.join('').length !== 4)
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-900/20'
                        }`}
                >
                    {scanState !== 'idle' ? (
                        <span>Processing...</span>
                    ) : (
                        <>
                            <Zap size={18} className="fill-white" />
                            {mode === 'scan' ? 'Simulate Scan' : 'Submit PIN'}
                        </>
                    )}
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">
                    <span>View Attendance History</span>
                    <ArrowRight size={12} />
                </div>
            </div>
        </div>
    );
};

export default StudentScan;
