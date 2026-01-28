import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Users from './pages/admin/Users';
import Semesters from './pages/admin/Semesters';
import Courses from './pages/admin/Courses';
import Sections from './pages/admin/Sections';
import Buildings from './pages/admin/Buildings';
import Rooms from './pages/admin/Rooms';
import OfferedCourses from './pages/admin/OfferedCourses';
import { ROUTES } from './utils/constants';
import { UserRole } from './types';

const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles?: UserRole[] }> = ({
  children,
}) => {
  // TEMPORARY: Disabled authentication - allow all routes
  return <>{children}</>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN.USERS}
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN.SEMESTERS}
        element={
          <ProtectedRoute>
            <Semesters />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN.COURSES}
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN.SECTIONS}
        element={
          <ProtectedRoute>
            <Sections />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN.BUILDINGS}
        element={
          <ProtectedRoute>
            <Buildings />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN.ROOMS}
        element={
          <ProtectedRoute>
            <Rooms />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN.OFFERED_COURSES}
        element={
          <ProtectedRoute>
            <OfferedCourses />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
