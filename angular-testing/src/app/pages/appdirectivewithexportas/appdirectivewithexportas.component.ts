import { Component } from '@angular/core';
import { FileChangedEvent } from 'src/app/directives/file-input.directive';

@Component({
  selector: 'app-appdirectivewithexportas',
  templateUrl: './appdirectivewithexportas.component.html',
  styleUrls: ['./appdirectivewithexportas.component.scss'],
})
export class AppdirectivewithexportasComponent {
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
