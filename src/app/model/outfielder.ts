export class Outfielder {
    name: string;
    rating: number;
    position: string;
  
    constructor(
        name: string,
        rating: number,
        position: string,
        private lw: number,
        private st: number,
        private rw: number,
        private lf: number,
        private cf: number,
        private rf: number,
        private cam: number,
        private lm: number,
        private cm: number,
        private rm: number,
        private cdm: number,
        private lwb: number,
        private rwb: number,
        private lb: number,
        private cb: number,
        private rb: number,
    ) {
      this.name = name;
      this.rating = rating;
      this.position = position;
      (this as any)[position.toLowerCase()] = rating;
    }
}
