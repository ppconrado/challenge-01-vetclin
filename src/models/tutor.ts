import { Pet } from "./pet";

export class Tutor {
  constructor(
    public id: string,
    public name: string,
    public phone: string,
    public email: string,
    public date_of_birth: string,
    public zip_code: string,
    public pets: Pet[]
  ) {}
}
