export interface User {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  city: string;
  country: string;
  religion: string;
  sect: string;
  education: string;
  profession: string;
  height: string;
  maritalStatus: string;
  bio: string;
  avatar: string;
  photos: string[];
  isVerified: boolean;
  isPremium: boolean;
  isOnline: boolean;
  lastActive: string;
  interests: string[];
  familyValues: string;
  lookingFor: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: Message;
  unreadCount: number;
}

export interface ContactRequest {
  id: string;
  fromUser: User;
  toUserId: string;
  status: 'pending' | 'accepted' | 'rejected';
  sentAt: string;
}

export interface SearchFilters {
  ageMin: number;
  ageMax: number;
  gender: string;
  city: string;
  religion: string;
  education: string;
  maritalStatus: string;
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  premiumUsers: number;
  pendingVerifications: number;
  totalMessages: number;
  totalMatches: number;
  newUsersToday: number;
  revenue: number;
}

export interface Notification {
  id: string;
  type: 'match' | 'message' | 'interest' | 'view' | 'system';
  title: string;
  description: string;
  read: boolean;
  createdAt: string;
}
