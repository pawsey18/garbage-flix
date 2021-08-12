import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageBase64: string | undefined;

  @Input()
  urlCurrentImage: any;
  @Output()
  onImageSelected = new EventEmitter<File>();

  change(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.value[0];
      toBase64(file).then((value: any) => (this.imageBase64 = value));
      this.onImageSelected.emit(file);
      // this.urlCurrentImage = null;
    }
  }
}
