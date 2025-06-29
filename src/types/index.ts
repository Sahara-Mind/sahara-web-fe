// Session Type
export interface SessionType {
  ClientID: number;
  clientName: string;
  sessionDate: string;
  therapyType: string;
  status: string;
}

// Therapist Data Type
export interface TherapistDataType {
  id: string;
  name: string;
  avatar: string;
  email: string;
  specialization: string;
  phone: number;
  status: string;
  stats?: StatsType;
  sessions?: SessionType[];
}

// Defining the session type
export interface ClientDataType {
  ClientID: number;
  clientName: string;
  sessionDate: string;
  therapyType: string;
  status: string;
}

// Stat Types
export interface StatsType {
  totalSessions: number;
  upcomingSessions: number;
  clients: number;
  cancellations: number;
  missedSessions: number;
  refunds: number;
}

export interface StatItem {
  label: string;
  value: number | string;
  isCurrency?: boolean;
  icon: React.ReactNode;
}