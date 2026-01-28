import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginCredentials, AuthContextType, UserRole, UserStatus } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// TEMPORARY: Mock user for development without backend
const mockUser: User = {
  id: '1',
  email: 'admin@admin.edu',
  role: UserRole.ADMIN,
  status: UserStatus.ACTIVE,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(mockUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TEMPORARY: Skip auth check, set mock user immediately
    setUser(mockUser);
    setLoading(false);
  }, []);

  const login = async (_credentials: LoginCredentials) => {
    // TEMPORARY: Skip API call, just set mock user
    setUser(mockUser);
  };

  const logout = async () => {
    // TEMPORARY: Skip API call, just clear user
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
