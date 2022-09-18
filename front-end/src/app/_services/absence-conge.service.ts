import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { AbsenceConges } from 'src/model/AbsenceConges';
import { IAbsenceConge, IDataAbsenceConge, ISingleAbsenceConge } from '../_interfaces/absence-conge';


@Injectable({
  providedIn: 'root'
})
export class AbsenceCongeService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  url = 'http://localhost:8000/api/absence_conges'
  list ! : AbsenceConges[]
  private headers!: HttpHeaders;

  constructor(private http: HttpClient) { }

  getAllAbsenceConges(): Observable<any>{
    return this.http.get(this.url)
  }
  getAbsenceConge(id: number ): Observable<any>{
    return this.http.get(this.url+'/'+id)

  }
  addAbsenceConge(a: AbsenceConges){
    return this.http.post<any>(this.url, a, { headers: this.headers }).pipe(tap(
      (newAbsenceConge: AbsenceConges) => console.log('absence ou conge ajouté')),
      catchError(this.handleError<AbsenceConges>('ajouter')))
  }

  editAbsenceConge(id: number, value: any): Observable<Object>{
    return this.http.put(this.url+'/'+id,value);
  }

  deleteAbsenceConge(ab: AbsenceConges | number ): Observable<AbsenceConges> {
    const id = typeof ab === 'number' ? ab: ab.id;
    console.log(id);
    return this.http.delete<AbsenceConges>(`${this.url}/${id}`, { headers: this.headers }).pipe(tap(
      _ => console.log('absence ou conge supprimé')),
      catchError(this.handleError<AbsenceConges>('supprimer'))
      );
}
}
