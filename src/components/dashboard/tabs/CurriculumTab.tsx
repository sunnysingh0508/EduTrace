import { useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronRight, BookOpen, Layers, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface Subtopic {
    id: string;
    title: string;
    description: string;
}

interface Topic {
    id: string;
    title: string;
    description: string;
    subtopics: Subtopic[];
    isExpanded?: boolean; // UI state for locally expanding/collapsing
}

interface Unit {
    id: string;
    title: string;
    description: string;
    topics: Topic[];
    isExpanded?: boolean; // UI state
}

const CurriculumTab = () => {
    // --- State ---
    const [units, setUnits] = useState<Unit[]>([]);

    // Temporary state for new inputs to avoid cluttering the main state until saved
    const [newUnitTitle, setNewUnitTitle] = useState('');
    const [newUnitDesc, setNewUnitDesc] = useState('');
    const [isAddingUnit, setIsAddingUnit] = useState(false);

    // Track which unit is currently adding a topic
    const [addingTopicToUnitId, setAddingTopicToUnitId] = useState<string | null>(null);
    const [newTopicTitle, setNewTopicTitle] = useState('');
    const [newTopicDesc, setNewTopicDesc] = useState('');

    // Track which topic is currently adding a subtopic
    const [addingSubtopicToTopicId, setAddingSubtopicToTopicId] = useState<string | null>(null);
    const [newSubtopicTitle, setNewSubtopicTitle] = useState('');
    const [newSubtopicDesc, setNewSubtopicDesc] = useState('');

    // --- Handlers: Units ---
    const handleAddUnit = () => {
        if (!newUnitTitle.trim()) return;
        const newUnit: Unit = {
            id: Date.now().toString(),
            title: newUnitTitle,
            description: newUnitDesc,
            topics: [],
            isExpanded: true
        };
        setUnits([...units, newUnit]);
        setNewUnitTitle('');
        setNewUnitDesc('');
        setIsAddingUnit(false);
    };

    const handleDeleteUnit = (unitId: string) => {
        if (window.confirm('Are you sure you want to delete this unit?')) {
            setUnits(units.filter(u => u.id !== unitId));
        }
    };

    const toggleUnitExpand = (unitId: string) => {
        setUnits(units.map(u => u.id === unitId ? { ...u, isExpanded: !u.isExpanded } : u));
    };

    // --- Handlers: Topics ---
    const handleAddTopic = (unitId: string) => {
        if (!newTopicTitle.trim()) return;
        const newTopic: Topic = {
            id: Date.now().toString(),
            title: newTopicTitle,
            description: newTopicDesc,
            subtopics: [],
            isExpanded: true
        };

        setUnits(units.map(u => {
            if (u.id === unitId) {
                return { ...u, topics: [...u.topics, newTopic] };
            }
            return u;
        }));

        setNewTopicTitle('');
        setNewTopicDesc('');
        setAddingTopicToUnitId(null);
    };

    const handleDeleteTopic = (unitId: string, topicId: string) => {
        setUnits(units.map(u => {
            if (u.id === unitId) {
                return { ...u, topics: u.topics.filter(t => t.id !== topicId) };
            }
            return u;
        }));
    };

    const toggleTopicExpand = (unitId: string, topicId: string) => {
        setUnits(units.map(u => {
            if (u.id === unitId) {
                return {
                    ...u,
                    topics: u.topics.map(t => t.id === topicId ? { ...t, isExpanded: !t.isExpanded } : t)
                };
            }
            return u;
        }));
    };


    // --- Handlers: Subtopics ---
    const handleAddSubtopic = (unitId: string, topicId: string) => {
        if (!newSubtopicTitle.trim()) return;
        const newSubtopic: Subtopic = {
            id: Date.now().toString(),
            title: newSubtopicTitle,
            description: newSubtopicDesc,
        };

        setUnits(units.map(u => {
            if (u.id === unitId) {
                return {
                    ...u,
                    topics: u.topics.map(t => {
                        if (t.id === topicId) {
                            return { ...t, subtopics: [...t.subtopics, newSubtopic] };
                        }
                        return t;
                    })
                };
            }
            return u;
        }));

        setNewSubtopicTitle('');
        setNewSubtopicDesc('');
        setAddingSubtopicToTopicId(null);
    };

    const handleDeleteSubtopic = (unitId: string, topicId: string, subtopicId: string) => {
        setUnits(units.map(u => {
            if (u.id === unitId) {
                return {
                    ...u,
                    topics: u.topics.map(t => {
                        if (t.id === topicId) {
                            return { ...t, subtopics: t.subtopics.filter(st => st.id !== subtopicId) };
                        }
                        return t;
                    })
                };
            }
            return u;
        }));
    };


    // --- Render Helpers ---
    // Reusable input form for consistency
    const RenderInputForm = ({
        titlePlaceholder,
        descPlaceholder,
        titleValue,
        setTitle,
        descValue,
        setDesc,
        onSave,
        onCancel
    }: any) => (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-3">
                <input
                    type="text"
                    placeholder={titlePlaceholder}
                    value={titleValue}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400 text-sm font-medium"
                    autoFocus
                />
                <textarea
                    placeholder={descPlaceholder}
                    value={descValue}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400 text-sm h-20 resize-none"
                />
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={onCancel}
                        className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSave}
                        disabled={!titleValue.trim()}
                        className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <BookOpen className="text-primary-600" size={24} />
                        Curriculum Setup
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">Design the course structure, units, and topics.</p>
                </div>
                {!isAddingUnit && (
                    <button
                        onClick={() => setIsAddingUnit(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm text-sm font-medium"
                    >
                        <Plus size={16} />
                        Add Unit
                    </button>
                )}
            </div>

            {/* Add Unit Form */}
            {isAddingUnit && (
                <div className="mb-8">
                    <RenderInputForm
                        titlePlaceholder="Unit Title (e.g., Introduction to Physics)"
                        descPlaceholder="Brief description of this unit..."
                        titleValue={newUnitTitle}
                        setTitle={setNewUnitTitle}
                        descValue={newUnitDesc}
                        setDesc={setNewUnitDesc}
                        onSave={handleAddUnit}
                        onCancel={() => setIsAddingUnit(false)}
                    />
                </div>
            )}

            {/* Empty State */}
            {units.length === 0 && !isAddingUnit && (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                    <Layers className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                    <h3 className="text-lg font-medium text-gray-900">No curriculum units yet</h3>
                    <p className="text-gray-500 mb-6">Get started by creating your first learning unit.</p>
                    <button
                        onClick={() => setIsAddingUnit(true)}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Create First Unit
                    </button>
                </div>
            )}

            {/* Units List */}
            <div className="space-y-4">
                <AnimatePresence>
                    {units.map((unit) => (
                        <motion.div
                            key={unit.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                        >
                            {/* Unit Header */}
                            <div className="bg-gray-50/50 p-4 flex items-start gap-3 group">
                                <button
                                    onClick={() => toggleUnitExpand(unit.id)}
                                    className="pt-1 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {unit.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                </button>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-slate-800">{unit.title}</h3>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleDeleteUnit(unit.id)}
                                                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete Unit"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    {unit.description && <p className="text-gray-500 text-sm mt-1">{unit.description}</p>}
                                </div>
                            </div>

                            {/* Unit Content (Topics) */}
                            {unit.isExpanded && (
                                <div className="p-4 border-t border-gray-100 bg-white">
                                    <div className="pl-6 border-l-2 border-gray-100 space-y-6">
                                        {/* Topics List */}
                                        {unit.topics.map((topic) => (
                                            <div key={topic.id} className="relative">
                                                {/* Topic Header */}
                                                <div className="flex items-start gap-3 group/topic mb-3">
                                                    <div className="absolute -left-[31px] top-2.5 w-4 h-4 rounded-full border-4 border-white bg-primary-100 ring-1 ring-primary-50"></div>
                                                    <button
                                                        onClick={() => toggleTopicExpand(unit.id, topic.id)}
                                                        className="pt-0.5 text-gray-400 hover:text-gray-600"
                                                    >
                                                        {topic.isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                                    </button>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <h4 className="font-semibold text-slate-700">{topic.title}</h4>
                                                            <button
                                                                onClick={() => handleDeleteTopic(unit.id, topic.id)}
                                                                className="opacity-0 group-hover/topic:opacity-100 p-1 text-gray-300 hover:text-red-500 transition-all"
                                                            >
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </div>
                                                        {topic.description && <p className="text-gray-500 text-sm">{topic.description}</p>}
                                                    </div>
                                                </div>

                                                {/* Subtopics List */}
                                                {topic.isExpanded && (
                                                    <div className="pl-8 mb-4 space-y-3">
                                                        {topic.subtopics.map((subtopic) => (
                                                            <div key={subtopic.id} className="bg-gray-50 p-3 rounded-lg border border-gray-100 group/sub">
                                                                <div className="flex justify-between items-start">
                                                                    <div className="flex items-start gap-2">
                                                                        <FileText size={14} className="mt-1 text-gray-400" />
                                                                        <div>
                                                                            <span className="text-sm font-medium text-slate-700 block">{subtopic.title}</span>
                                                                            {subtopic.description && <span className="text-xs text-gray-500 block mt-0.5">{subtopic.description}</span>}
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        onClick={() => handleDeleteSubtopic(unit.id, topic.id, subtopic.id)}
                                                                        className="opacity-0 group-hover/sub:opacity-100 text-gray-300 hover:text-red-500"
                                                                    >
                                                                        <Trash2 size={12} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}

                                                        {/* Add Subtopic Action */}
                                                        {addingSubtopicToTopicId === topic.id ? (
                                                            <div className="bg-white p-3 rounded-lg border border-primary-100 shadow-sm relative">
                                                                <div className="absolute -left-4 top-4 w-3 h-px bg-primary-200"></div>
                                                                <h5 className="text-xs font-bold text-primary-600 mb-2 uppercase tracking-wide">New Subtopic</h5>
                                                                <input
                                                                    className="w-full text-sm border-b border-gray-200 py-1 focus:outline-none focus:border-primary-400 mb-2"
                                                                    placeholder="Subtopic Title"
                                                                    value={newSubtopicTitle}
                                                                    onChange={(e) => setNewSubtopicTitle(e.target.value)}
                                                                    autoFocus
                                                                />
                                                                <input
                                                                    className="w-full text-xs text-gray-500 border-b border-gray-200 py-1 focus:outline-none focus:border-primary-400 mb-2"
                                                                    placeholder="Description (optional)"
                                                                    value={newSubtopicDesc}
                                                                    onChange={(e) => setNewSubtopicDesc(e.target.value)}
                                                                />
                                                                <div className="flex justify-end gap-2 mt-2">
                                                                    <button onClick={() => setAddingSubtopicToTopicId(null)} className="text-xs text-gray-400 hover:text-gray-600">Cancel</button>
                                                                    <button
                                                                        onClick={() => handleAddSubtopic(unit.id, topic.id)}
                                                                        className="text-xs bg-primary-600 text-white px-2 py-1 rounded hover:bg-primary-700"
                                                                    >
                                                                        Add Subtopic
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <button
                                                                onClick={() => setAddingSubtopicToTopicId(topic.id)}
                                                                className="flex items-center gap-2 text-xs text-primary-600 font-medium hover:text-primary-700 transition-colors py-1"
                                                            >
                                                                <Plus size={12} /> Add Subtopic
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add Topic Action */}
                                    {addingTopicToUnitId === unit.id ? (
                                        <div className="mt-4 ml-6">
                                            <RenderInputForm
                                                titlePlaceholder="Topic Title (e.g., Newton's Laws)"
                                                descPlaceholder="Topic description..."
                                                titleValue={newTopicTitle}
                                                setTitle={setNewTopicTitle}
                                                descValue={newTopicDesc}
                                                setDesc={setNewTopicDesc}
                                                onSave={() => handleAddTopic(unit.id)}
                                                onCancel={() => setAddingTopicToUnitId(null)}
                                            />
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setAddingTopicToUnitId(unit.id)}
                                            className="mt-4 ml-6 flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700 hover:bg-primary-50 px-3 py-2 rounded-lg transition-colors w-fit"
                                        >
                                            <Plus size={16} /> Add Topic
                                        </button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CurriculumTab;
