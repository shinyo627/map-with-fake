import faker from 'faker'

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.latitude())
    }
  }
}