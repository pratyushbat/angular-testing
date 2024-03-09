import {
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ListtempComponent } from '../pages/listtemp/listtemp.component';

// @Directive({selector:"input"})
// @Directive({selector:"[type]"})
// @Directive({selector:"[type=file]"})
// @Directive({selector:".form-c"})
// @Directive({selector:"input:not(.form-c)"})
// @Directive({selector:"[type=text]"})
// AND
// @Directive({    selector:"input.form-c[type=file]"})
// or
// @Directive({    selector:"input[type=file],.form-c"})
@Directive({ selector: '[fileInput]' })
export class FileInputDirective {
  inputRef!: HTMLInputElement;
  value?: File;
  fileName?: string;
  fileUrl?: string;
  isImage: boolean = false;
  constructor(private elemRef: ElementRef, public vcref: ViewContainerRef) {
    this.inputRef = this.elemRef.nativeElement;
    console.log(
      'File Input Directive Applied on input tag',
      this.inputRef,
      this.vcref
    );
    this.orderPizza(this.pizzaReady);
    console.log('call customer');
    console.log(
      'promise solves above problem of callback hell where we have to do one thing  after other'
    );
    this.callWeatherDataAwayFromHere();

    this.inputRef.addEventListener('change', () => {
      // const file = this.inputRef.files?.item(0);
      // if (!file) return;
      // const fr = new FileReader();
      // fr.readAsDataURL(file);
      // fr.onload = () => {
      //   console.log(fr.result);
      // };
      this.onFileInputChange();
    });
  }
  async callWeatherDataAwayFromHere() {
    // let weather = await this.getWeather();
    // or
    let weather = this.getWeather();
    console.log('promise receiver');
    console.log(weather);
    // weather.then(
    //   (data) => console.log('first param :: yippie', data),
    //   (err) => console.log('second param :: err', err)
    // );
    // this.getWeather().then(this.onSuccess, this.onError);
    this.getWeather()
      .then(this.getWeatherIcon)
      .then(this.onSuccess, this.onError);
  }

  getWeather() {
    console.log(
      'phases of promise -peending: waiting,resovled: successful,rejected:its done but couldn accomplish'
    );
    // promise maker
    console.log('promise maker');
    return new Promise((resolve, reject) => {
      console.log('inside promise weather');
      // setTimeout(() => reject('open end failed'), 4000);
      setTimeout(() => resolve('clouds'), 4000);
    });
  }

  getWeatherIcon(weather: any) {
    console.log('received weather from above');
    return new Promise((resolve, reject) => {
      console.log('inside weather icon');
      // setTimeout(() => reject('open end failed'), 4000);
      switch (weather) {
        case 'sunny':
          setTimeout(() => resolve('🌞'), 1000);
          break;
        case 'cloudy':
          setTimeout(() => resolve('👋'), 1000);
          break;
        default:
          reject('NO ICON FOUND');
      }
    });
  }

  onSuccess(data: any) {
    console.log('success param :: data', data);
  }

  onError(data: any) {
    console.log('errro param :: err', data);
  }

  // getWeather() {
  // setTimeout(() => {
  //   return 'cloudy';
  // }, 4000);
  // callback function (resolve, reject) => {}
  // }

  private async onFileInputChange() {
    const file = this.inputRef.files?.item(0);
    console.log(file);
    if (!file) return;
    this.value = file;
    this.fileName = file.name;
    this.isImage = !!file.type.match(/image(\/jpe?g | png | bmp | gif)?/);
    //  1st way
    this.fileUrl = this.isImage ? await this.converToUrl(file) : undefined;
    //  2nd way
    // this.converToUrl(file).then(
    //   (data) => (this.fileUrl = this.isImage ? data : undefined)
    // );
    console.log(this);
  }
  converToUrl(file: File) {
    return new Promise<string>((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        console.log(fr.result);
        resolve(fr.result as string);
      };
    });
  }

  orderPizza(callbackparam: any) {
    setTimeout(() => {
      const pizza = 'peproni pizzas ';
      callbackparam(pizza);
    }, 3000);
  }

  pizzaReady(pizza: any) {
    console.log(`Eat the ${pizza}`);
  }
}
