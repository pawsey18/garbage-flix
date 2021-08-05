import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

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
      upcomingRleases: false,
      inTheaters: false,
    });
  }
}
