export class Produit {
    id?: number;
    nom?: string;
    image?: string;
    prix?: string;
    description?: string;
    categId: string;

    constructor(args: {
        id?: number;
        nom?: string;
        image?: string;
        prix?: string;
        description?: string;
        categId: string;
    }) {
        this.id = args.id;
        this.nom = args.nom;
        this.image = args.image;
        this.prix = args.prix;
        this.description = args.description;
        this.categId = args.categId;
    }
}

