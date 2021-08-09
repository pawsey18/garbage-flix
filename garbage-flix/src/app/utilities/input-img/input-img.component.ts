import { Component, OnInit } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  change(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.value;
      console.log(file);
    }
  }
}
