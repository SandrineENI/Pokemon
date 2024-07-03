export enum Type {
    plante,
    poison,
    feu,
    vol
}

export interface Pokemon 
{
    id: string,
    name: string,
    categorie: string,
    types: Type[],
    taille?: number,
    poids?: number,
}