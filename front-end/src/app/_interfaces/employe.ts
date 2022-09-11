export interface IEmploye {
  id: number,
  nom: string,
  prenom: string,
  adresse: string,
  email: string,
  dateNaissance: string,
  telephone: string,
  sexe: string,
  dateEmbauche: string,
  numImmatriculation: string,
  salaire: number,
  deppartement: string,
  poste: string,
}

export interface ISingleEmploye{
  data: IEmploye
}

export interface IDataEmploye{
  data: IEmploye[]
}
