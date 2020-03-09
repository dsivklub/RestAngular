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

export interface ImageBack {
  id_foto: string;
  src: string;
  id: string;
}

export interface UserLikes {
  id: string;
  likes: Array<number>;
}
