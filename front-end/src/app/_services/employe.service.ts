import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, of, tap } from 'rxjs';
import { Employes } from 'src/model/Employes';
import { IApi } from '../_interfaces/api';
import { IDataEmploye, IEmploye, ISingleEmploye } from '../_interfaces/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
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

  url = 'http://localhost:8000/api/employes'
  list! : Employes[]
  private headers!: HttpHeaders;

  constructor(private http: HttpClient) {

  }

    getAllEmployes(): Observable<any>{
      return this.http.get(this.url)
    }
    getEmploye(id: number): Observable<any>{
      return this.http.get(this.url+'/'+id)
    }

    addEmploye(p: Employes): Observable<any> {
      return this.http.post<any>(this.url,p,{ headers: this.headers }).pipe(tap((newEmploye: Employes)=> console.log('employe added')),
      catchError(this.handleError<Employes>('create'))
      );
    }
    editEmploye(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.url}/${id}`,value);
    }
    deleteEmploye(employe: Employes | number):Observable<Employes> {
      const id = typeof employe === 'number' ? employe: employe.id;
      console.log(id);
      return this.http.delete<Employes>(`${this.url}/${id}`, { headers: this.headers }).pipe(tap(_ => console.log('Employe supprimé')),
        catchError(this.handleError<Employes>('supprimer'))
      );
    }
    createdata(info: Object): Observable<Object>{
      return this.http.post(this.url,info)
    }


}
