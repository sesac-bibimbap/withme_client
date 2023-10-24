interface AuthType {
  email?: string;
  password?: string;
  passwordCheck?: string;
  personalInfo?: string;
  remember?: boolean;
}

// Notifications start
interface StudyAttendResponse {
  type: keyof typeof NOTIFICATION_TYPES;
  action: keyof typeof NOTIFICATION_ACTIONS;
  comment: keyof typeof NOTIFICATION_COMMENTS;
  contents: Contents;
  toUserId: string;
  fromUser: any; // FIXME: 수정필요
  studyName: string;
  studyId: string;
  time: Date;
  status: boolean;
  color: string;
}

interface Contents {
  [type: string]: string;
}
interface NotificationItemProps {
  item: StudyAttendResponse;
}
interface RequestData {
  fromUser: any; // FIXME: 수정필요
  toUserId: string;
  studyId: string;
  studyName: string;
}

interface RejectRequestData extends RequestData {
  rejectReason: string;
}

const enum NOTIFICATION_TYPES {
  STUDY = '스터디',
  INQUIRY = '문의',
}

const enum NOTIFICATION_ACTIONS {
  STUDY_REQUEST = 'STUDY_REQUEST',
  STUDY_ACCEPT = 'STUDY_ACCEPT',
  STUDY_REJECT = 'STUDY_REJECT',
  INQUIRY_REGISTER = 'INQUIRY_REGISTER',
  INQUIRY_RESPONSE = 'INQUIRY_RESPONSE',
}

const enum NOTIFICATION_COMMENTS {
  STUDY_REQUEST = '가입신청이 있습니다.',
  STUDY_ACCEPT = '가입신청이 수락되었습니다.',
  STUDY_REJECT = '가입신청이 거부되었습니다.',
  INQUIRY_REGISTER = '문의사항이 등록되었습니다.',
  INQUIRY_RESPONSE = '문의사항에 답변이 등록되었습니다.',
}

type RejectReason = {
  value: string;
};

type SelectRejectReason = {
  selectRejectReasonChange: (value: RejectReason) => void;
};

// 지니 옵셔널 추가
type TechStack = {
  id: number;
  stackName?: string;
  stackImg?: string;
};

type Recruit = {
  title?: stirng;
  recruitPlaceholder?: string;
};

interface CreateStudyDataType {
  name: string;
  attendantsLimit?: number;
  title: string;
  date: Array;
  recruitPlaceholder: string;
  content: string;
}

interface CreateStudyType {
  name: string;
  attendantsLimit?: number;
  recruit?: Recruit;
  startDate?: Date;
  endDate?: Date;
  content?: string;
  techStacks?: TechStack[];
}

type EmailData = { email: string };

type EmailTokenData = {
  email: string;
  token: string;
};

type navigatedDataType = { statusCode: number; email: string };

type VerifyInputType = (count: number) => {
  prevInputRef: React.RefObject<HTMLInputElement> | null;
  currentInputRef: React.RefObject<HTMLInputElement> | null;
  nextInputRef: React.RefObject<HTMLInputElement> | null;
}[];

//Study
interface Bookmark {
  name?: string;
  id?: number;
  techStacks?: TechStack[];
}

interface Study extends ISuperDate {
  id?: number;
  name?: string;
  content?: string;
  attendantsLimit?: number;
  startDate?: Date;
  endDate?: Date;
  owner: User;
  inquiries: Inquiry[];
  techStacks: TechStack[];
  participants: User[];
  recruit?: Recruit;
}

interface ISuperDate {
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

interface User extends ISuperDate {
  id?: number;
  email: string;
  password?: string;
  emailVerified?: string;
  profile: Profile;
  bookmarkedStudies?: Study[];
  participatingStudies?: Study[];
  job?: FirstLogin;
  devCareer?: FirstLogin;
  techStacks?: TechStack[];
}

interface Profile extends ISuperDate {
  id?: number;
  nickname?: string;
  profileImg?: string;
  gender?: boolean;
}

interface FirstLogin extends ISuperDate {
  id?: number;
  category?: string;
}

interface Inquiry extends ISuperDate {
  id?: number;
  title?: string;
  contents?: string;
  inquiryResponse: inquiryRes;
}

type inquiryRes = {
  contents?: string;
};

interface TechStack extends ISuperDate {
  id?: number;
  stackName?: string;
  stackImg?: string;
}

interface Studies {
  data: Study[];
  searchFilter: string;
}
