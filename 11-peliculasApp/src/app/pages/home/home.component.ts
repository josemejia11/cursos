import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if( pos > max){
      if(this.moviesService.loading){ return;}
      this.moviesService.getCartelera().subscribe(movies => {
        this.movies.push(...movies);
      });
      console.log('llamar servicio');
    }
    //console.log(pos , max);
  }

  constructor( private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getCartelera().subscribe(movies => {
      //console.log(res.results);
      this.movies = movies;
      this.moviesSlideshow = movies;
    })

  }

  ngOnDestroy(){
    this.moviesService.resetCarteleraPage();
  }

}
