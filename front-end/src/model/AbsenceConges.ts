import { Employes } from "./Employes";

export class AbsenceConges
{
  id! : number;
  dateDebut! : Date;
  jour! : Date;
  employe! : Employes;
  duree! : number;
}
