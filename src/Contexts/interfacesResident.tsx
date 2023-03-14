export interface iContextProps {
  children: React.ReactNode;
}

export interface iResidentContext {
  messages: iMessages[];
  setMessages: React.Dispatch<React.SetStateAction<iMessages[]>>;
  improvements: iImprovement[] | undefined;
  maintenance: iMaintenance[] | undefined;
  cashs: iCashs[] | [];
  commentsApi: (id: number) => Promise<void>;
  comments: iComments[] | undefined;
  logout: () => void;
  addComments: (dataComents: iAddComments) => Promise<void>;
  userLogin: iUser;
  setComments: React.Dispatch<React.SetStateAction<iComments[]>>;
  messageApi: () => Promise<void>;
  setCashs: React.Dispatch<React.SetStateAction<iCashs[]>>;

  improvementsApi: () => void;
  setImprovements: React.Dispatch<React.SetStateAction<iImprovement[]>>;

  maintenanceApi: () => Promise<void>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}

export interface iUser {
  email: string;
  is_admin: boolean;
  name: string;
  condId: number;
  id: number;
}

export interface iMessages {
  userId: number;
  condId: number;
  title: string;
  descripiton: string;
  id: number;
  condID?:number;
}
export interface iMaintenance {
  userId: number;
  cond_id: number;
  name: string;
  service: string;
  contact: string;
  id: number;
}
export interface iImprovement {
  userId: number;
  condId: number;
  title: string;
  description: string;
  id: number;
}

export interface iCashs {
  userId: number;
  cond_id: number;
  title: string;
  price: number;
  type: string;
  id: number;
}
export interface iAddComments {
  userId: number;
  messageId: number;
  comment: string;
}
export interface iComments {
  userId: number;
  messageId: number;
  comment: string;
  id: number;
}
export interface iCardImprovement {
  title: string;
  description: string;
  id: number;
  key?: number;
}
export interface iCardCash {
  title: string;
  price: number;

  id: number;
}
export interface iCardResident {
  name: string;
  email: string;
}
