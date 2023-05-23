export default class Users {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: { lat: string; lng: string };
    },
    public phone: string,
    public website: string,
    public company: { name: string; catchPhrase: string; bs: string }
  ) {}
}
