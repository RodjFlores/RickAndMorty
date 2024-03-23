import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

export interface RickAndMortyApiResponse {
  info: {
    count: number,
    next: string | null,
    pages: number,
    prev: string | null
  },
  result: Object[]
}

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  private baseUrl = 'https://rickandmortyapi.com/api/'
  constructor(
    private http: HttpClient

  ) { }

  /**
   * 
   * @returns An observable of characters with paging info
   */
  public getCharacters(page = 1): Observable<any> {
    return this.http.get(
      `${this.baseUrl}character`,
      {
        params: {
          page: page
        }
      }).pipe(
        map((response: any) => ({
          items: response.results,
          page: page,
          hasMorePages: page === 42 ? false : true
        })),
        catchError(this.handleError)
      );
  }

    /**
   * 
   * @returns An observable of characters with paging info
   */
    public getCharactersByMultiIds(idArray:number[]): Observable<any> {
      return this.http.get(
        `${this.baseUrl}character/${idArray}`).pipe(
          map((response: any) => ({
            items: response,
            page: 1,
            hasMorePages: false
          })),
          catchError(this.handleError)
        );
    }

  /**
  * 
  * @returns A Charater's details
  */
  public getCharacter(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}character/${id}`).pipe(
        catchError(this.handleError)
      );
  }

  /**
   * 
   * @param page 
   * @returns An observable of episodes with paging info
   */
  public getEpisodes(page = 1){
    return this.http.get(
      `${this.baseUrl}episode`,
      {
        params: {
          page: page
        }
      }).pipe(
        map((response: any) => ({
          items: response.results,
          page: page,
          hasMorePages: page === 3 ? false : true
        })),
        catchError(this.handleError)
      );
  }

  /**
  * 
  * @returns A Charater's details
  */
    public getEpisode(id: string): Observable<any> {
      return this.http.get(
        `${this.baseUrl}episode/${id}`).pipe(
          map((res:any) => {
            const charIds = res.characters.map((c:string) => {
              return c.split('/').pop()
            })
            return {...res, characters: charIds}
          }),
          catchError(this.handleError)
        );
    }

  /**
   * Standard Error handler for http requests
   * @param error Error from Http Request
   * @returns Observable
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
