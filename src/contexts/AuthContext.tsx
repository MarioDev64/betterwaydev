import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAsync } from '../hooks/useAsync';

type UserType = 'member1' | 'member2';

type User = {
  id: string;
  username: string;
  type: UserType;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
  loginError: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers: (User & { password: string })[] = [
  { id: '1', username: 'user1', password: 'password1', type: 'member1' },
  { id: '2', username: 'user2', password: 'password2', type: 'member2' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const { execute: executeLogin, status: loginStatus } = useAsync<User | null>(async (username: string, password: string) => {
    const foundUser = mockUsers.find(u => u.username === username && u.password === password);
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      await SecureStore.setItemAsync('user', JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    }
    throw new Error('Invalid username or password');
  });

  const { execute: executeLogout, status: logoutStatus } = useAsync<void>(async () => {
    await SecureStore.deleteItemAsync('user');
  });

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving stored user:', error);
      }
    };

    checkUserSession();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      setLoginError(null);
      const loggedInUser = await executeLogin(username, password);
      if (loggedInUser) {
        setUser(loggedInUser);
        return true;
      }
      return false;
    } catch (error) {
      setLoginError((error as Error).message);
      return false;
    }
  };

  const logout = async () => {
    await executeLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoading: loginStatus === 'pending' || logoutStatus === 'pending',
      loginError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};