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
  idFoto: string;
  src: string;
  id: string;
}

export interface UserLikes {
  id: string;
  likes: Array<number>;
}

export interface UserLikeFromBack {
  id: string;
  saveFoto: string;
}

export interface ImageBackLikes {
  idFoto: number;
  numberLikes: number;
}

export interface AvatarUser {
  id: string;
  avatar: string;
}

export interface InformationUser {
  id: string;
  userFotoInformation: string;
  userInformation: string;
}
