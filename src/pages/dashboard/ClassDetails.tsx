import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { classesData } from '../../data/mockData';
import CurriculumTab from '../../components/dashboard/tabs/CurriculumTab';
import AttendanceTab from '../../components/dashboard/tabs/AttendanceTab';
import ReportsTab from '../../components/dashboard/tabs/ReportsTab';
import { BookOpen, CheckCircle, BarChart, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

type Tab = {
    id: 'curriculum' | 'attendance' | 'reports';
    label: string;
    icon: React.ElementType;
};

const ClassDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const classId = Number(id);
    const classInfo = classesData.find(c => c.id === classId);

    const [activeTab, setActiveTab] = useState<'curriculum' | 'attendance' | 'reports'>('attendance');

    if (!classInfo) {
        return <div className="p-8 text-center text-gray-500">Class not found.</div>;
    }

    const tabs: Tab[] = [
        { id: 'curriculum', label: 'Set Curriculum', icon: BookOpen },
        { id: 'attendance', label: 'Mark Attendance', icon: CheckCircle },
        { id: 'reports', label: 'Reports', icon: BarChart },
    ];

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header / Back Button */}
            <button
                onClick={() => navigate('/dashboard/classes')}
                className="flex items-center gap-2 text-gray-500 hover:text-slate-800 transition-colors mb-6"
            >
                <ArrowLeft size={18} />
                Back to Classes
            </button>

            {/* Class Title Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-slate-800">{classInfo.name}</h1>
                    <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-bold border border-primary-100">
                        {classInfo.semester}
                    </span>
                </div>
                <p className="text-gray-500 font-medium">
                    {classInfo.subject} • {classInfo.section}
                </p>
            </div>

            {/* Sub-Navigation (Segmented Control) */}
            <div className="bg-gray-100 rounded-xl p-1 flex gap-2 mb-8 overflow-x-auto">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-1 justify-center ${isActive
                                ? 'bg-white text-primary-600 shadow-sm'
                                : 'text-gray-600 hover:bg-white/50'
                                }`}
                        >
                            <Icon size={16} className={isActive ? 'text-primary-600' : 'text-gray-400'} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Content Area Placeholder */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[400px]"
            >
                {activeTab === 'curriculum' && (
                    <CurriculumTab />
                )}
                {activeTab === 'attendance' && (
                    <AttendanceTab />
                )}
                {activeTab === 'reports' && (
                    <ReportsTab />
                )}
            </motion.div>
        </div>
    );
};

export default ClassDetails;
