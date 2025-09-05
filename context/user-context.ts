import { create } from 'zustand';

export interface User {
  userId: number | string;
  role: string | string[];
  email: string;
  username: string;
  avatar: string;
}

export interface UserContext {
  user: User | null;
  setEmail?: (email: string) => void;
  setUsername?: (username: string) => void;
  setAvatar?: (avatar: string) => void;
}

export const userContext = create<UserContext>((set) => ({
  user: null,
  setEmail: (email: string) =>
    set((state) => ({ user: { ...state.user, email } as User })),
  setUsername: (username: string) =>
    set((state) => ({ user: { ...state.user, username } as User })),
  setAvatar: (avatar: string) =>
    set((state) => ({ user: { ...state.user, avatar } as User })),
}));
