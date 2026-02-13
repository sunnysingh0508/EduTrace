import { BookOpen, AlertCircle, CheckCircle } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import AttendanceChart from '../components/dashboard/AttendanceChart';
import SyllabusProgress from '../components/dashboard/SyllabusProgress';

const TeacherDashboard = () => {
    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    label="Attendance %"
                    value="82%"
                    icon={CheckCircle}
                    color="bg-blue-600"
                    delay={0}
                />
                <StatsCard
                    label="Total Classes"
                    value="120"
                    icon={BookOpen}
                    color="bg-purple-600"
                    delay={0.1}
                />
                <StatsCard
                    label="Missed Classes"
                    value="8"
                    icon={AlertCircle}
                    color="bg-red-500"
                    delay={0.2}
                />
                <StatsCard
                    label="Syllabus Done"
                    value="70%"
                    icon={BookOpen}
                    color="bg-emerald-500"
                    delay={0.3}
                />
            </div>

            {/* Smart Alert (Bonus) */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 text-red-700 text-sm font-medium">
                <AlertCircle size={20} />
                <span>Alert: 3 students are at risk of low attendance below 75%.</span>
            </div>

            {/* Charts & Progress Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <AttendanceChart />
                </div>
                <div className="lg:col-span-1">
                    <SyllabusProgress />
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
