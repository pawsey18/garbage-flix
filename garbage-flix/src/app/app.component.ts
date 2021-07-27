import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: 'Garbge Flix' | undefined;
  trendingMovies:
    | { title: string; releaseDate: Date; price: number }[]
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
      },
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.0,
      },
      {
        title: 'Freddy Vs Jason',
        releaseDate: new Date(),
        price: 1400.0,
      },
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.0,
      },
      {
        title: 'Freddy Vs Jason',
        releaseDate: new Date(),
        price: 1400.0,
      },
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.0,
      },
      {
        title: 'Freddy Vs Jason',
        releaseDate: new Date(),
        price: 1400.0,
      },
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.0,
      },
    ];

    this.horrorMovies = [];
  }

  multiplyNumber(n: number) {
    return n * 2;
  }
}
