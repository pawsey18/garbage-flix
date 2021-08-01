import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  trendingMovies:
    | { title: string; releaseDate: Date; price: number; poster: string }[]
    | undefined;
  horrorMovies:
    | { title: string; releaseDate: Date; price: number }[]
    | undefined;

  ngOnInit(): void {
    this.trendingMovies = [
      {
        title: 'Freddy Vs Jason',
        releaseDate: new Date(),
        price: 1400.0,
        poster:
          'https://m.media-amazon.com/images/M/MV5BODNlNWVjOTMtZjVjYy00MzRjLTg2MmQtNTM3MWVmZjFjYzgwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Wild Hogs',
        releaseDate: new Date(),
        price: 1400.0,
        poster:
          'https://m.media-amazon.com/images/M/MV5BZWZlMzQ5NmItNjBmMS00NDgyLThiNDYtZWU2MzA3YjZmOGU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      },
    ];

    this.horrorMovies = [];
  }
}
