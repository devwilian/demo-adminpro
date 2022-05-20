export class Usuario{
    constructor(
        public nombres:string,
        public email:string,
        public apellidos?:string,
        public telefono?:string,
        public password?:string,
        public role?:string,
        public img?:string,
        public google?:boolean,
        public uid?:string
    ){}
}