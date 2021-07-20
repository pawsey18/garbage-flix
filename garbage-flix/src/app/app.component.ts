import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [
        {
          title: 'Spider-Man',
          releaseDate: new Date(),
          price: 1400.0,
        },

        {
          title: 'Spider-Man',
          releaseDate: new Date(),
          price: 1400.0,
        },
      ];
    }, 1000);
  }

  title = 'oops';

  multiplyNumber(n: number) {
    return n * 2;
  }
}
