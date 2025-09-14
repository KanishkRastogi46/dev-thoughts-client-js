import { create } from 'zustand';

export interface User {
  userId: number | string;
  profileId: number | string;
  name: string;
  role: string | string[];
  email: string;
  username: string;
  avatar: string;
}

export interface UserContext {
  user: User | null;
  setUserId?: (userId: number | string) => void;
  setProfileId?: (profileId: number | string) => void;
  setRole?: (role: string | string[]) => void;
  setEmail?: (email: string) => void;
  setName?: (name: string) => void;
  setUsername?: (username: string) => void;
  setAvatar?: (avatar: string) => void;
}

export const userContext = create<UserContext>((set) => ({
  user: null,
  setUserId: (userId: number | string) =>
    set((state) => ({ user: { ...state.user, userId } as User })),
  setProfileId: (profileId: number | string) =>
    set((state) => ({ user: { ...state.user, profileId } as User })),
  setRole: (role: string | string[]) =>
    set((state) => ({ user: { ...state.user, role } as User })),
  setEmail: (email: string) =>
    set((state) => ({ user: { ...state.user, email } as User })),
  setName: (name: string) =>
    set((state) => ({ user: { ...state.user, name } as User })),
  setUsername: (username: string) =>
    set((state) => ({ user: { ...state.user, username } as User })),
  setAvatar: (avatar: string) =>
    set((state) => ({ user: { ...state.user, avatar } as User })),
}));
