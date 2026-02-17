import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import DashboardLayout from './layouts/DashboardLayout';
import TeacherClasses from './pages/dashboard/TeacherClasses';
import ClassDetails from './pages/dashboard/ClassDetails';
import Assignments from './pages/dashboard/Assignments';
import Reminders from './pages/dashboard/Reminders';
import Profile from './pages/dashboard/Profile';
import StudentLayout from './layouts/StudentLayout';
import StudentScan from './pages/student/StudentScan';

function App() {
  return (
    <Router>
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
          <Route path="classes" element={<TeacherClasses />} />
          <Route path="classes/:id" element={<ClassDetails />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route path="scan" element={<StudentScan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
