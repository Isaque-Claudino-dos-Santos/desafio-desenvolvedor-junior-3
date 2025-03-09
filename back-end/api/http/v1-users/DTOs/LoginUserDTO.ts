import Obj from "@helpers/Obj";

export default class LoginUserDTO<T> {
  public readonly email: string;
  public readonly password: string;

  constructor(data: T) {
    this.email = Obj.get(data, "email");
    this.password = Obj.get(data, "password");
  }

  static fromReq<T>(data: T) {
    return new LoginUserDTO(data);
  }
}
