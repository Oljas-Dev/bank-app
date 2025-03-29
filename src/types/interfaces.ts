export interface ImageData {
  src?: string;
  alt?: string;
  classes?: string;
  fn?: () => void;
}

// type MovObject = {
//   type: string;
//   amount: number;
//   sendTo: string;
//   id: string;
//   img: string;
//   message: string;
//   date: string;
// };

export type dataTest = Record<
  string,
  number | string | string[] | number[] | boolean | object[]
>;

export type Movements = dataTest;

export interface UserData {
  name: string;
  email: string;
  avatar: string;
  transactions: object[];
  id: string;
  password: string;
  current: boolean;
}

export interface TransferUiProps {
  form: boolean;
  setForm: () => void;
}

export interface SendingProps {
  user?: UserData;
}
