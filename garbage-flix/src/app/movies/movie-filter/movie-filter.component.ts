import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  movies = [
    {
      title: 'Freddy Vs Jason',
      poster:
        'https://m.media-amazon.com/images/M/MV5BODNlNWVjOTMtZjVjYy00MzRjLTg2MmQtNTM3MWVmZjFjYzgwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Wild Hogs',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZWZlMzQ5NmItNjBmMS00NDgyLThiNDYtZWU2MzA3YjZmOGU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    },
    {
      title: 'Wrong Turn',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2Y5ZWE2MTMtODE3ZC00NWQ4LWJkNzctNGY4Njg5NDY5MzNlXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
    },
  ];

  originalMovies = this.movies;

  genres = [
    {
      id: 1,
      name: 'Drama',
    },
    {
      id: 2,
      name: 'Horror',
    },
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    });

    this.form.valueChanges.subscribe((values) => {
      this.movies = this.originalMovies;
      this.filtherMovies(values);
    });
  }

  filtherMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        (movie) => movie.title.indexOf(values.title) !== -1
      );
    }
  }

  clearForm() {this.form.reset()}
}
