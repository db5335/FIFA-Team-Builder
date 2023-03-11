export class Player {
  
    constructor(
        public id: number,
        public name: string,
        public rating: number,
        public position: string,
        public lw: number,
        public st: number,
        public rw: number,
        public lf: number,
        public cf: number,
        public rf: number,
        public cam: number,
        public lm: number,
        public cm: number,
        public rm: number,
        public cdm: number,
        public lwb: number,
        public rwb: number,
        public lb: number,
        public cb: number,
        public rb: number,
        public gk: number
    ) {
      (this as any)[position.toLowerCase()] = rating;
    }
}
