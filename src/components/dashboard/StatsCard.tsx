import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    color: string;
    delay?: number;
}

const StatsCard = ({ label, value, icon: Icon, color, delay = 0 }: StatsCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">{label}</h3>
                    <div className="text-3xl font-bold text-slate-800">{value}</div>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>
        </motion.div>
    );
};

export default StatsCard;
