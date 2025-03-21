export interface ImageData {
  src?: string;
  alt?: string;
  classes?: string;
  fn?: () => void;
}

export type Movements = {
  type?: string;
  amount?: number;
  sendTo?: string;
  id?: string;
  img?: string;
  message?: string;
  date?: string;
};

export interface UserData {
  name?: string;
  email?: string;
  avatar?: string;
  transactions?: Movements[];
  balance?: number;
  id?: string;
}

export interface TransferUiProps {
  form: boolean;
  setForm: () => void;
}

export interface SendingProps {
  user?: UserData;
}
