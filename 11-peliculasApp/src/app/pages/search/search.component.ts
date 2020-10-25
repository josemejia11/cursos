import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public texto: string = '';

  public movies: Movie[] = [];

  constructor( private activatedRoute : ActivatedRoute, private moviesService : MoviesService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.texto = params.texto;
      this.moviesService.searchMovie(params.texto).subscribe(movies => {
        this.movies = movies;
      })
    })
  }

}
