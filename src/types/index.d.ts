export interface AuthType {
  email?: string;
  password?: string;
  passwordCheck?: string;
  personalInfo?: string;
  remember?: boolean;
}

export interface createStudyType {
  studyName: string;
  people: number;
  date: Date;
  title: string;
  content: string;
  receiveMsg: string;
  techStacks: string[];
}
