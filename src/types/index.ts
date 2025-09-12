export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  image: string;
  bio?: string;
  type: 'keynote' | 'invited';
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  image?: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ConferenceDate {
  label: string;
  date: string;
}