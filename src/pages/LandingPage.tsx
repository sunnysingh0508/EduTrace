import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DashboardShowcase from '../components/DashboardShowcase';
import TargetAudience from '../components/TargetAudience';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <Features />
            <HowItWorks />
            <DashboardShowcase />
            <TargetAudience />
            <CTA />
            <Footer />
        </>
    );
};

export default LandingPage;
