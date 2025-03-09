import Obj from "@helpers/Obj";

export default class RegisterUserDTO<T> {
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;

  constructor(data: T) {
    this.name = Obj.get(data, "name");
    this.email = Obj.get(data, "email");
    this.password = Obj.get(data, "password");
  }

  static fromReq(data: any) {
    return new RegisterUserDTO(data);
  }
}
