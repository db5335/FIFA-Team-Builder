export class Goalkeeper {
    name: string;
    rating: number;
    position: string = 'GK';
  
    constructor(name: string, rating: number) {
      this.name = name;
      this.rating = rating;
    }
}
