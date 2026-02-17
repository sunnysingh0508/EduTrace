import { useState } from 'react';
import {
    User,
    Lock,
    Bell,
    Settings as SettingsIcon,
    Shield,
    BookOpen,
    Save,
    Smartphone,
    Monitor,
    LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Settings = () => {
    const { setTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('account');
    const [isLoading, setIsLoading] = useState(false);

    // Dummy Data State
    const [account, setAccount] = useState({
        fullName: 'John Doe',
        email: 'john.doe@edutrace.com',
        phone: '+1 (555) 123-4567',
        institution: 'Tech Valley University',
        department: 'Computer Science'
    });

    const [attendance, setAttendance] = useState({
        threshold: 75,
        geoLocation: true,
        qrRotation: true,
        faceVerification: false,
        autoMarkAbsent: 15
    });

    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        assignments: true,
        weeklyReports: true,
        attendanceAlerts: true
    });

    const [system, setSystem] = useState({
        theme: 'light',
        language: 'en',
        timezone: 'UTC-5',
        dateFormat: 'MM/DD/YYYY',
        autoLogout: 30
    });

    const tabs = [
        { id: 'account', label: 'Account', icon: User },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'attendance', label: 'Attendance Rules', icon: Shield },
        { id: 'classes', label: 'Class Preferences', icon: BookOpen },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'system', label: 'System', icon: SettingsIcon },
    ];

    const handleSave = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={account.fullName}
                                    onChange={(e) => setAccount({ ...account, fullName: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    value={account.email}
                                    onChange={(e) => setAccount({ ...account, email: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    value={account.phone}
                                    onChange={(e) => setAccount({ ...account, phone: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Institution</label>
                                <input
                                    type="text"
                                    value={account.institution}
                                    disabled
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-800/50 text-gray-500 dark:text-slate-500 cursor-not-allowed"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Department</label>
                                <input
                                    type="text"
                                    value={account.department}
                                    onChange={(e) => setAccount({ ...account, department: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                );

            case 'security':
                return (
                    <div className="space-y-8">
                        {/* Password Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Change Password</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Current Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div></div>
                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">New Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Confirm New Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 dark:border-slate-800 pt-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Two-Factor Authentication</h3>
                            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl">
                                        <Smartphone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-slate-100">Authenticator App</p>
                                        <p className="text-sm text-gray-500 dark:text-slate-400">Secure your account with 2FA.</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 dark:peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 dark:border-slate-800 pt-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Active Sessions</h3>
                            <div className="p-4 border border-gray-200 dark:border-slate-700 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 rounded-xl">
                                        <Monitor size={24} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-slate-100">Windows PC - Chrome</p>
                                        <p className="text-sm text-gray-500 dark:text-slate-400">New York, USA • Active now</p>
                                    </div>
                                </div>
                                <button className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 font-medium text-sm flex items-center gap-1">
                                    <LogOut size={16} />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'attendance':
                return (
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Attendance Thresholds</h3>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">Minimum Required Attendance</span>
                                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{attendance.threshold}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="100"
                                    value={attendance.threshold}
                                    onChange={(e) => setAttendance({ ...attendance, threshold: parseInt(e.target.value) })}
                                    className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                />
                                <p className="text-xs text-gray-500 dark:text-slate-500 mt-2">Students below this threshold will be flagged as at-risk.</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 dark:border-slate-800 pt-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Verification Methods</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 dark:text-slate-300">Geo-Location Verification</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={attendance.geoLocation}
                                            onChange={(e) => setAttendance({ ...attendance, geoLocation: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 dark:peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 dark:text-slate-300">Dynamic QR Rotation</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={attendance.qrRotation}
                                            onChange={(e) => setAttendance({ ...attendance, qrRotation: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 dark:peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 dark:text-slate-300">Face Verification</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={attendance.faceVerification}
                                            onChange={(e) => setAttendance({ ...attendance, faceVerification: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 dark:peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'classes':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Default Semester</label>
                                <select className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-colors">
                                    <option>Spring 2026</option>
                                    <option>Fall 2025</option>
                                    <option>Summer 2026</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Default Class Duration</label>
                                <select className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-colors">
                                    <option>60 Minutes</option>
                                    <option>90 Minutes</option>
                                    <option>120 Minutes</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-slate-800">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 dark:text-slate-300">Allow Late Attendance Marking</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 dark:peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 dark:text-slate-300">Show Student At-Risk Alerts</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 dark:peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                );

            case 'notifications':
                return (
                    <div className="space-y-4">
                        {[
                            { id: 'email', label: 'Email Notifications' },
                            { id: 'sms', label: 'SMS Alerts' },
                            { id: 'assignments', label: 'Assignment Reminders' },
                            { id: 'weeklyReports', label: 'Weekly Performance Reports' },
                            { id: 'attendanceAlerts', label: 'Attendance Threshold Alerts' },
                        ].map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-xl transition-colors">
                                <span className="font-medium text-slate-700 dark:text-slate-200">{item.label}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notifications[item.id as keyof typeof notifications]}
                                        onChange={(e) => setNotifications({ ...notifications, [item.id]: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 dark:peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                );

            case 'system':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Theme</label>
                                <select
                                    value={system.theme}
                                    onChange={(e) => {
                                        const newTheme = e.target.value as 'light' | 'dark' | 'system';
                                        setSystem({ ...system, theme: newTheme });
                                        setTheme(newTheme);
                                    }}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-colors"
                                >
                                    <option value="light">Light Mode</option>
                                    <option value="dark">Dark Mode</option>
                                    <option value="system">System Default</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Language</label>
                                <select
                                    value={system.language}
                                    onChange={(e) => setSystem({ ...system, language: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-colors"
                                >
                                    <option value="en">English (US)</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="hi">Hindi</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Timezone</label>
                                <select
                                    value={system.timezone}
                                    onChange={(e) => setSystem({ ...system, timezone: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-colors"
                                >
                                    <option value="UTC-5">Eastern Time (US & Canada)</option>
                                    <option value="UTC-8">Pacific Time (US & Canada)</option>
                                    <option value="UTC+0">GMT</option>
                                    <option value="UTC+5:30">IST (India)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Date Format</label>
                                <select
                                    value={system.dateFormat}
                                    onChange={(e) => setSystem({ ...system, dateFormat: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-colors"
                                >
                                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                </select>
                            </div>
                        </div>
                    </div>
                );

            default:
                return <div>Select a setting to configure.</div>;
        }
    };

    return (
        <div className="p-6 space-y-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Settings</h1>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Manage your account and system preferences</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium border border-emerald-100 dark:border-emerald-900/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        System Active
                    </span>
                    <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="bg-primary-600 text-white rounded-xl px-5 py-2.5 hover:bg-primary-700 transition-all shadow-md shadow-primary-600/20 flex items-center gap-2 font-medium disabled:opacity-70"
                    >
                        {isLoading ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            >
                                <SettingsIcon size={18} />
                            </motion.div>
                        ) : (
                            <Save size={18} />
                        )}
                        {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Sidebar - Tabs */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden sticky top-24 transition-colors">
                        <div className="p-4 border-b border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
                            <h2 className="font-semibold text-gray-700 dark:text-slate-200">Preferences</h2>
                        </div>
                        <nav className="p-2 space-y-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeTab === tab.id
                                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 shadow-sm'
                                        : 'text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                                        }`}
                                >
                                    <tab.icon size={18} className={activeTab === tab.id ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-slate-500'} />
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div layoutId="active-indicator" className="ml-auto">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                                        </motion.div>
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-3">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-gray-200 dark:border-slate-800 p-6 md:p-8 transition-colors"
                    >
                        <div className="mb-6 pb-4 border-b border-gray-100 dark:border-slate-800 flex items-center gap-3">
                            <div className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg text-gray-600 dark:text-slate-400">
                                {tabs.find(t => t.id === activeTab)?.icon && (() => {
                                    const Icon = tabs.find(t => t.id === activeTab)?.icon;
                                    return Icon ? <Icon size={24} /> : null;
                                })()}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{tabs.find(t => t.id === activeTab)?.label}</h2>
                                <p className="text-sm text-gray-500 dark:text-slate-400">Manage your {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} settings</p>
                            </div>
                        </div>

                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
