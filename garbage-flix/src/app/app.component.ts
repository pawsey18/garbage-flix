import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: 'Garbge Flix' | undefined;
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

  multiplyNumber(n: number) {
    return n * 2;
  }

  handleRating(rate: number) {
    alert(`the user selected ${rate}`);
  }
}
