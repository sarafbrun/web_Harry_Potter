import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: any[];

  constructor(private moviesService: MoviesService) {
    this.movies = [];
  }

  async ngOnInit() {
    this.movies = await this.moviesService.getAllMovies()
  }



}
