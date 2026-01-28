import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { ROUTES } from '../utils/constants';
import { Link } from 'react-router-dom';

// Icon components using SVG
const Icon = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${className}`}>
    {children}
  </div>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const CogIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const DashboardCard = ({ 
  to, 
  title, 
  description, 
  icon, 
  gradient 
}: { 
  to: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  gradient: string;
}) => (
  <Link
    to={to}
    className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50"
  >
    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: gradient }} />
    <div className="relative p-6">
      <div className="mb-4">
        <Icon className={`${gradient.includes('blue') ? 'bg-blue-500/20 text-blue-400' : gradient.includes('purple') ? 'bg-purple-500/20 text-purple-400' : gradient.includes('green') ? 'bg-green-500/20 text-green-400' : gradient.includes('orange') ? 'bg-orange-500/20 text-orange-400' : gradient.includes('pink') ? 'bg-pink-500/20 text-pink-400' : 'bg-indigo-500/20 text-indigo-400'} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </Icon>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-white/90 transition-colors duration-300">
        {description}
      </p>
      <div className="mt-4 flex items-center text-sm font-semibold text-gray-500 group-hover:text-white transition-colors duration-300">
        <span>Explore</span>
        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </Link>
);

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = ROUTES.LOGIN;
  };

  const getDashboardContent = () => {
    // Ensure user has a role, defaulting to ADMIN if missing
    const currentUser = user ? {
      ...user,
      role: user.role || UserRole.ADMIN,
    } : {
      id: '1',
      email: 'admin@admin.edu',
      role: UserRole.ADMIN,
    };
    
    if (!currentUser || !currentUser.role) return null;

    switch (currentUser.role) {
      case UserRole.STUDENT:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard
              to={ROUTES.STUDENT.ENROLLMENT}
              title="Course Enrollment"
              description="Enroll in courses for the current semester"
              icon={<BookIcon />}
              gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />
            <DashboardCard
              to={ROUTES.STUDENT.SCHEDULE}
              title="Class Schedule"
              description="View your class schedule"
              icon={<CalendarIcon />}
              gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            />
            <DashboardCard
              to={ROUTES.STUDENT.GRADES}
              title="Grades"
              description="View your academic grades"
              icon={<ChartIcon />}
              gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            />
            <DashboardCard
              to={ROUTES.STUDENT.NOTICES}
              title="Notices & Events"
              description="View notices and upcoming events"
              icon={<BellIcon />}
              gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
            />
          </div>
        );
      case UserRole.FACULTY:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard
              to={ROUTES.FACULTY.STUDENTS}
              title="Student Management"
              description="View and manage student information"
              icon={<UsersIcon />}
              gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />
            <DashboardCard
              to={ROUTES.FACULTY.GRADES}
              title="Grade Management"
              description="Manage student grades"
              icon={<ChartIcon />}
              gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            />
            <DashboardCard
              to={ROUTES.FACULTY.COURSES}
              title="My Courses"
              description="View assigned courses"
              icon={<BookIcon />}
              gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            />
          </div>
        );
      case UserRole.ADMIN:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard
              to={ROUTES.ADMIN.USERS}
              title="User Management"
              description="Manage users and accounts"
              icon={<UsersIcon />}
              gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />
            <DashboardCard
              to={ROUTES.ADMIN.SEMESTERS}
              title="Semester Management"
              description="Manage academic semesters"
              icon={<CalendarIcon />}
              gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            />
            <DashboardCard
              to={ROUTES.ADMIN.COURSES}
              title="Course Management"
              description="Manage course catalog"
              icon={<BookIcon />}
              gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            />
            <DashboardCard
              to={ROUTES.ADMIN.SECTIONS}
              title="Section Management"
              description="Manage course sections"
              icon={<CogIcon />}
              gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
            />
            <DashboardCard
              to={ROUTES.ADMIN.BUILDINGS}
              title="Building Management"
              description="Manage buildings"
              icon={<BuildingIcon />}
              gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
            />
            <DashboardCard
              to={ROUTES.ADMIN.ROOMS}
              title="Room Management"
              description="Manage rooms"
              icon={<BuildingIcon />}
              gradient="linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
            />
            <DashboardCard
              to={ROUTES.ADMIN.OFFERED_COURSES}
              title="Offered Courses"
              description="Manage offered courses"
              icon={<BookIcon />}
              gradient="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const currentUser = user || {
    id: '1',
    email: 'admin@admin.edu',
    role: UserRole.ADMIN,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      {/* Modern Navigation */}
      <nav className="bg-gray-800/80 backdrop-blur-lg shadow-lg border-b border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">PH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  PH University
                </h1>
                <p className="text-xs text-gray-400">Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-700/50 rounded-full border border-gray-600/50">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {currentUser.email?.charAt(0).toUpperCase() || 'A'}
                  </span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-100">{currentUser.email || 'admin@admin.edu'}</p>
                  <p className="text-xs text-gray-400">{currentUser.role || 'ADMIN'}</p>
                </div>
              </div>
              <Link
                to={ROUTES.PROFILE}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-indigo-400 hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-100 mb-2">
            Welcome back, <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {currentUser.email?.split('@')[0] || 'Admin'}
            </span>!
          </h1>
          <p className="text-gray-400 text-lg">Manage your university operations from one place</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Users</p>
                <p className="text-3xl font-bold text-gray-100">1,234</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                <UsersIcon />
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Active Courses</p>
                <p className="text-3xl font-bold text-gray-100">156</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                <BookIcon />
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">This Semester</p>
                <p className="text-3xl font-bold text-gray-100">Fall 2024</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400">
                <CalendarIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Quick Access</h2>
          {getDashboardContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
