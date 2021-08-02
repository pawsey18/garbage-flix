import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  formBuilder: any;

  constructor(private router: Router, formBuilder: FormBuilder) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
    });
  }

  saveChanges() {
    this.router.navigate(['/genres']);
  }
}
