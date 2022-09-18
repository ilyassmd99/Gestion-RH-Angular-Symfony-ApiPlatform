import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Documents } from 'src/model/Documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

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

  private headers!: HttpHeaders;
  url = 'http://localhost:8000/api/documents'
  list!: Documents[]

  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<any>{
    return this.http.get(this.url)
  }
  getDocument(id : number): Observable<any>{
    return this.http.get(this.url+'/'+id)
  }

  addDocument(d: Documents){
    return this.http.post<any>(this.url, d, {headers: this.headers}).pipe(tap(
      (newDocument: Documents)=> console.log('document added')),
    catchError(this.handleError<Documents>('create'))
    )
  }
  deleteDocument(doc: Documents | number):Observable<Documents>{
    const id = typeof doc === 'number' ? doc: doc.id;
    console.log(id);
    return this.http.delete<Documents>(this.url+'/'+id, { headers: this.headers }).pipe(tap(_ => console.log('Employe supprimé')),
     catchError(this.handleError<Documents>('supprimer'))
    );
  }
}
