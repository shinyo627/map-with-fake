import faker from 'faker';
import { Mappable } from './CustomMap'

// Future instances of User now has to satisfy Mappable interface properties
export class User implements Mappable{
 name: string;
 location: {
   lat: number,
   lng: number
 };
 color: string = 'red'

 constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
 }

 markerContent():string {
  return `
  <h1>User Name is: ${this.name}</h1>
  `
 }
}

const user = new User()