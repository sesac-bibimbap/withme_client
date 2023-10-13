export interface AuthType {
  email?: string;
  password?: string;
  passwordCheck?: string;
  personalInfo?: string;
  remember?: boolean;
}

export interface RegisterResponse {
  status: number;
  data: {
    message: string;
  };
}
