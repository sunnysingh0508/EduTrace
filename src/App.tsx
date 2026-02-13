import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
const TeacherDashboard = lazy(() => import('./pages/TeacherDashboard'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<TeacherDashboard />} />
            <Route path="attendance" element={<div className="p-6">Attendance Module (Coming Soon)</div>} />
            <Route path="curriculum" element={<div className="p-6">Curriculum Module (Coming Soon)</div>} />
            <Route path="reports" element={<div className="p-6">Reports Module (Coming Soon)</div>} />
            <Route path="settings" element={<div className="p-6">Settings Module (Coming Soon)</div>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
