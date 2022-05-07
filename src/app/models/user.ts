import {Role} from "./role";

export class user{
  id?: number;
  firstName?:string;
  lastName?:string;
  email?:string;
  password?:string;
  mobile?:string;
  createdDate?: Date;
  birthdate?:Date;
  picture?:string;
  age?:number;
  appUserRole?:Role;
  conf_password?:string;
}
