import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // trendingMovies:
  //   | { title: string; releaseDate: Date; price: number }[]
  //   | undefined;
  // horrorMovies: { title: string; releaseDate: Date; price: number }[] = [];
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
    ];

    this.horrorMovies = [
      {
        title: 'Killer Clown',
        releaseDate: new Date(),
        price: 5,
      },
      {
        title: 'I Know What You Did Last Summer',
        releaseDate: new Date(),
        price: 59,
      },
    ];
  }


  multiplyNumber(n: number) {
    return n * 2;
  }
}
