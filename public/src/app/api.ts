export interface User {
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

export interface UsersGroupFromBack {
  id: number;
  user: User;
}
