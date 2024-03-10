import { Component, ViewChild } from '@angular/core';
import {
  FileChangedEvent,
  FileInputDirective,
} from 'src/app/directives/file-input.directive';

@Component({
  selector: 'app-appdirecitive',
  templateUrl: './appdirecitive.component.html',
  styleUrls: ['./appdirecitive.component.scss'],
})
export class AppdirecitiveComponent {
  @ViewChild(FileInputDirective) inputDirective!: FileInputDirective;

  imageUrl!: string | undefined;

  onFileChange(ev: FileChangedEvent) {
    console.log(ev);
    this.imageUrl = ev.url as string;
  }

  onFileinputError(ev: string) {
    console.log(ev);
    alert(ev);
    this.imageUrl = undefined;
  }

  onValueTrim(isTrimmed: boolean): void {
    console.log('Value trimmed', isTrimmed);
  }

  onCaseConvertion(isConverted: boolean): void {
    console.log('Case converted', isConverted);
  }
}
