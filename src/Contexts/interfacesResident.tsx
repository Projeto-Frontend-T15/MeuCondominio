export interface iContextProps {
  children: React.ReactNode;
}

export interface iResidentContext {
  messages: iMessages[];
  setMessages: React.Dispatch<React.SetStateAction<iMessages[]>>;
  improvements: iImprovement[] | undefined;
  maintenance: iMaintenance[] | undefined;
  cashs: iCashs[] | undefined;
  commentsApi: (id: number) => Promise<void>;
  comments: iComments[] | undefined;
  logout: () => void;
  addComments: (dataComents: iAddComments) => Promise<void>;
  userLogin: iUser;
  setComments: React.Dispatch<React.SetStateAction<iComments[]>>;
  messageApi: () => Promise<void>;
  setCashs: React.Dispatch<React.SetStateAction<iCashs[]>>;
  maintenanceApi: () => Promise<void>;
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
  commen: string;
}
export interface iComments {
  userId: number;
  messageId: number;
  comment: string;
  id: number;
}
