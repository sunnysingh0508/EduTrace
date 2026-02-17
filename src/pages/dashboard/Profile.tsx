import {
    User,
    Mail,
    Phone,
    Building,
    Briefcase,
    Camera,
    CheckCircle,
    AlertCircle,
    Clock,
    Lock,
    Bell,
    Shield,
    Activity,
    FileText
} from 'lucide-react';

const Profile = () => {
    return (
        <div className="p-6 space-y-6 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Profile Settings</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your account information and preferences</p>
                </div>
                <button
                    onClick={() => document.getElementById('personal-info')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-primary-600 text-white rounded-xl px-5 py-2 hover:bg-primary-700 transition flex items-center gap-2 font-medium shadow-sm shadow-primary-600/20"
                >
                    <User className="w-4 h-4" />
                    Edit Profile
                </button>
            </div>

            {/* Section 1: Profile Overview Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-8 transition-colors">
                {/* Avatar */}
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-md overflow-hidden">
                        <span className="text-3xl font-bold text-gray-400 dark:text-slate-500">JD</span>
                        {/* <img src="/path/to/avatar.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition transform hover:scale-105">
                        <Camera className="w-4 h-4" />
                    </button>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">John Doe</h2>
                        <div className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full text-xs font-semibold border border-blue-100 dark:border-blue-900/30">
                            <CheckCircle className="w-3 h-3" />
                            Verified Educator
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-100 dark:border-slate-700">
                            <Briefcase className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
                            Senior Mathematics Teacher
                        </span>
                        <span className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-100 dark:border-slate-700">
                            <Building className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
                            Springfield High School
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-1 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <Mail className="w-3.5 h-3.5" />
                            john.doe@edu.trace
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <Phone className="w-3.5 h-3.5" />
                            +1 (555) 123-4567
                        </span>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-6 border-t md:border-t-0 md:border-l border-gray-100 dark:border-slate-700 pt-6 md:pt-0 md:pl-8">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">12</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Classes</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">450</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Students</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">8</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Years Exp.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Forms */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Section 2: Personal Information */}
                    <div id="personal-info" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                            <User className="w-5 h-5 text-primary-600" />
                            <h3 className="font-semibold text-slate-800">Personal Information</h3>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        defaultValue="John Doe"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue="john.doe@edu.trace"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        defaultValue="+1 (555) 123-4567"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-700">Institution</label>
                                    <input
                                        type="text"
                                        defaultValue="Springfield High School"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2 space-y-1.5">
                                    <label className="text-sm font-medium text-slate-700">Department</label>
                                    <input
                                        type="text"
                                        defaultValue="Mathematics Department"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex items-center gap-3">
                                <button className="bg-primary-600 text-white rounded-xl px-6 py-2.5 hover:bg-primary-700 transition font-medium shadow-sm shadow-primary-600/20">
                                    Save Changes
                                </button>
                                <button className="bg-white border border-gray-200 text-slate-600 rounded-xl px-6 py-2.5 hover:bg-gray-50 transition font-medium">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Change Password */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary-600" />
                            <h3 className="font-semibold text-slate-800">Security</h3>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-slate-700">Current Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-slate-700">New Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-slate-700">Confirm New Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Password Strength Indicator */}
                                    <div className="space-y-2 pt-1">
                                        <div className="flex justify-between text-xs text-slate-500">
                                            <span>Password Strength</span>
                                            <span className="text-green-600 font-medium">Good</span>
                                        </div>
                                        <div className="flex gap-1 h-1.5">
                                            <div className="flex-1 bg-green-500 rounded-full"></div>
                                            <div className="flex-1 bg-green-500 rounded-full"></div>
                                            <div className="flex-1 bg-green-500 rounded-full"></div>
                                            <div className="flex-1 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <button className="bg-white border border-gray-200 text-slate-600 rounded-xl px-6 py-2.5 hover:bg-gray-50 transition font-medium w-full md:w-auto">
                                            Update Password
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-5 space-y-3 h-fit">
                                    <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Password Requirements
                                    </h4>
                                    <ul className="space-y-2 text-sm text-blue-800/80 pl-1">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                            At least 10 characters long
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                            Include at least one uppercase letter
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                            Include at least one number
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                            Include at least one special character
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Preferences & Activity */}
                <div className="space-y-6">

                    {/* Section 4: Notification Preferences */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                            <Bell className="w-5 h-5 text-primary-600" />
                            <h3 className="font-semibold text-slate-800">Notifications</h3>
                        </div>

                        <div className="p-6 space-y-5">
                            {[
                                { label: 'Email Notifications', desc: 'Receive updates via email', default: true },
                                { label: 'Attendance Alerts', desc: 'Get notified when students miss class', default: true },
                                { label: 'Assignment Reminders', desc: 'Reminders for upcoming due dates', default: false },
                                { label: 'Weekly Summary Report', desc: 'Overview of your weekly activity', default: true },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-slate-800">{item.label}</p>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked={item.default} />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 5: Activity Summary */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-primary-600" />
                            <h3 className="font-semibold text-slate-800">Recent Activity</h3>
                        </div>

                        <div className="p-6">
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:w-0.5 before:-translate-x-1/2 before:bg-gray-100 before:h-full">

                                {[
                                    { title: 'Class Created', desc: 'Created "Advanced Physics - A"', time: '2 hours ago', icon: Building, color: 'text-blue-600 bg-blue-100' },
                                    { title: 'Attendance Marked', desc: 'Marked attendance for "Math 101"', time: 'Yesterday', icon: CheckCircle, color: 'text-green-600 bg-green-100' },
                                    { title: 'Assignment Posted', desc: 'New assignment for "Chemistry"', time: '2 days ago', icon: FileText, color: 'text-purple-600 bg-purple-100' },
                                    { title: 'Password Changed', desc: 'Account security updated', time: '1 week ago', icon: Lock, color: 'text-amber-600 bg-amber-100' },
                                ].map((activity, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        <div className={`absolute left-0 w-5 h-5 -translate-x-1/2 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${activity.color} z-10 box-content`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-sm font-semibold text-slate-800">{activity.title}</p>
                                            <p className="text-xs text-slate-500">{activity.desc}</p>
                                            <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1 mt-1">
                                                <Clock className="w-3 h-3" />
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
