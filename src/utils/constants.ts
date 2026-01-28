export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  STUDENT: {
    ENROLLMENT: '/student/enrollment',
    SCHEDULE: '/student/schedule',
    GRADES: '/student/grades',
    NOTICES: '/student/notices',
  },
  FACULTY: {
    STUDENTS: '/faculty/students',
    GRADES: '/faculty/grades',
    COURSES: '/faculty/courses',
  },
  ADMIN: {
    USERS: '/admin/users',
    SEMESTERS: '/admin/semesters',
    COURSES: '/admin/courses',
    SECTIONS: '/admin/sections',
    BUILDINGS: '/admin/buildings',
    ROOMS: '/admin/rooms',
    OFFERED_COURSES: '/admin/offered-courses',
  },
};
