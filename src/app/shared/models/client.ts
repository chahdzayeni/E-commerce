export class Client {
    id?: string;
    nom?: string;
    email?: string;
    avatar?: string;
   
    constructor(args: Client = {}) {
    this.id = args.id;
    this.nom = args.nom;
    this.email = args.email;
    this.avatar = args.avatar;
    }
}
