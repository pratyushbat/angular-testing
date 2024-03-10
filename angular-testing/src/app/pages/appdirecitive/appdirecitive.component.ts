import { Component } from '@angular/core';
import { FileChangedEvent } from 'src/app/directives/file-input.directive';

@Component({
  selector: 'app-appdirecitive',
  templateUrl: './appdirecitive.component.html',
  styleUrls: ['./appdirecitive.component.scss'],
})
export class AppdirecitiveComponent {
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
}
