import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">

                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                        Ready to Transform Your Classroom?
                    </h2>
                    <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
                        Join 500+ institutions using EduTrace to save time, eliminate proxies, and improve academic outcomes.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                            Start Free Trial
                        </button>
                        <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
                            Book a Demo
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
