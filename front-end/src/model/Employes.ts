import { AbsenceConges } from "./AbsenceConges";

export class Employes
{
    id !: number;
    nom !: string;
    prenom!: string;
    adresse!: string;
    email!: string;
    dateNaissance!: string;
    telephone!: string;
    sexe!: string;
    dateEmbauche!: string;
    numImmatriculation!: string;
    salaire!: number;
    deppartement!: string;
    poste!: string;
    absenceConges!: string[];
    documents!: string[];
}
