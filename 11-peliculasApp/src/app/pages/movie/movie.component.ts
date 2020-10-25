import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieDetails } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie : MovieDetails;
  public cast : Cast[] = [];

  constructor( private activatedRoute : ActivatedRoute, 
              private moviesService : MoviesService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    combineLatest([
      this.moviesService.getMovieDetails(id),
      this.moviesService.getCast(id)
    ]).subscribe(([movie, cast]) => {
      if(!movie){
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
      this.cast = cast.filter(actor => actor.profile_path !== null);
    });
    
    /*
    .subscribe(movie => {
      if(!movie){
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
    });
    .subscribe(cast => {
      console.log(cast);
      this.cast = cast.filter(actor => actor.profile_path !== null);
    });
*/

    
  }
  
  onReturn(){
    this.location.back();

  }

}
