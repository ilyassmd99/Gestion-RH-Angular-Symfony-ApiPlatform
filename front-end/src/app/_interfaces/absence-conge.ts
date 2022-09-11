export interface IAbsenceConge {
   id: number,
   dateDebut: string,
   duree: number,
   jour: string
}

export interface ISingleAbsenceConge{
  data: IAbsenceConge
}
export interface IDataAbsenceConge{
  data: IAbsenceConge[]
}
