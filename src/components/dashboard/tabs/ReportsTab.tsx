import { TrendingUp, Users, BookOpen, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock Data for Charts
const attendanceData = [
    { name: 'Week 1', attendance: 85 },
    { name: 'Week 2', attendance: 88 },
    { name: 'Week 3', attendance: 92 },
    { name: 'Week 4', attendance: 80 },
    { name: 'Week 5', attendance: 85 },
    { name: 'Week 6', attendance: 95 },
];

const curriculumData = [
    { name: 'Unit 1', completed: 100 },
    { name: 'Unit 2', completed: 80 },
    { name: 'Unit 3', completed: 40 },
    { name: 'Unit 4', completed: 0 },
];

const lowAttendanceStudents = [
    { id: 1, name: 'Alex Johnson', attendance: 65, avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=random' },
    { id: 2, name: 'Sam Smith', attendance: 58, avatar: 'https://ui-avatars.com/api/?name=Sam+Smith&background=random' },
];

const ReportsTab = () => {
    return (
        <div className="space-y-6 pb-20">
            {/* 1. Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Avg. Attendance</p>
                        <h3 className="text-2xl font-bold text-slate-800">87.5%</h3>
                        <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                            +2.4% <span className="text-gray-400">vs last month</span>
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Syllabus Covered</p>
                        <h3 className="text-2xl font-bold text-slate-800">45%</h3>
                        <p className="text-xs text-gray-400 font-medium">
                            On track for semester
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Students</p>
                        <h3 className="text-2xl font-bold text-slate-800">42</h3>
                        <p className="text-xs text-gray-400 font-medium">
                            Active in this class
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 2. Attendance Trend Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-slate-800">Attendance Trend</h3>
                        <select className="text-sm border-gray-200 rounded-lg text-gray-500 focus:ring-primary-500">
                            <option>Last 6 Weeks</option>
                            <option>Last Semester</option>
                        </select>
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={attendanceData}>
                                <defs>
                                    <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#e11d48" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="attendance"
                                    stroke="#e11d48"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorAttendance)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 3. Students Attention Needed */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <AlertCircle className="text-red-500" size={20} />
                        <h3 className="font-bold text-slate-800">Attention Needed</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Students with attendance below 75% needs intervention.</p>

                    <div className="space-y-4">
                        {lowAttendanceStudents.map((student) => (
                            <div key={student.id} className="flex items-center justify-between p-3 bg-red-50/50 rounded-xl border border-red-100">
                                <div className="flex items-center gap-3">
                                    <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-800">{student.name}</h4>
                                        <p className="text-xs text-red-500 font-medium">Low Attendance</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-lg font-bold text-slate-800">{student.attendance}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2.5 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-xl font-medium transition-colors">
                        View All Students
                    </button>
                </div>
            </div>

            {/* 4. Curriculum Progress */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-slate-800 mb-6">Curriculum Progress by Unit</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={curriculumData} layout="vertical" barSize={20}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f3f4f6" />
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                axisLine={false}
                                tickLine={false}
                                width={100}
                                tick={{ fill: '#4b5563', fontSize: 13, fontWeight: 500 }}
                            />
                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px' }} />
                            <Bar dataKey="completed" fill="#8b5cf6" radius={4} background={{ fill: '#f3f4f6', radius: 4 }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ReportsTab;
