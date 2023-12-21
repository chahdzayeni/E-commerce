export class Categorie {
    id?: string;
    nom?: string;
    image?: string;
    constructor(args: Categorie = {}) {
    this.id = args.id;
    this.nom = args.nom;
    }
}
