export interface ImageData {
  src?: string;
  alt?: string;
  classes?: string;
  fn?: () => void;
}

type Movements = {
  type: string;
  amount: number;
  sendTo: string;
  id: string;
  img: string;
  date: string;
};

export interface UserData {
  name?: string;
  email?: string;
  avatar?: string;
  transactions?: Movements[];
  id?: string;
}
