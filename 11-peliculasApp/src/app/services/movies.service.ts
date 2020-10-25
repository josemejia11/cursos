import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap,map, catchError } from 'rxjs/operators';
import { CarteleraResponce, Movie } from '../interfaces/cartelera-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { MovieDetails } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  carteleraPage = 1;
  public loading = false;

  constructor( private http: HttpClient) { }

  get params(){
    return{
      api_key: '9e203aa6b6ae5eb6657aceefbafbf983',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movie[]>{
    if ( this.loading){
      return of([]);
    }
    this.loading = true;
    return this.http.get<CarteleraResponce>(`${this.baseUrl}/movie/now_playing`,{params: this.params})
                  .pipe(map((res) => res.results),tap( () => {
                    this.carteleraPage += 1;
                    this.loading = false;
                    })
                  );

  }

  searchMovie(texto : string): Observable<Movie[]> {
    const params = {...this.params, page: '1', query: texto}
    // https://api.themoviedb.org/3/search/movie?
    return this.http.get<CarteleraResponce>(`${this.baseUrl}/search/movie`, 
      {params}).pipe(map( res => res.results))
  }

  getMovieDetails(id : string){
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`, { params: this.params})
    .pipe( catchError(err => of(null)))
  }

  getCast(id : string): Observable<Cast[]>{
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, { params: this.params})
    .pipe(map( res => res.cast),
    catchError(err => of([])),);
  }
}
