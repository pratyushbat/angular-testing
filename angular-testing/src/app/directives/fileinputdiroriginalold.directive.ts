import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
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
@Directive({ selector: '[appFileinputdiroriginalold]' })
export class FileinputdiroriginaloldDirective implements OnInit, OnChanges {
  private mime!: string;
  private allowedSize: string | number = 0;

  @Input()
  fileInput!: [string, number] | string;

  inputRef!: HTMLInputElement;
  value?: File;
  fileName?: string;
  fileUrl?: string;
  isImage: boolean = false;

  constructor(private elemRef: ElementRef, public vcref: ViewContainerRef) {
    this.inputRef = this.elemRef.nativeElement;
  }

  ngOnInit(): void {
    // console.log(
    //   'File Input Directive Applied on input tag',
    //   this.inputRef,
    //   this.vcref
    // );
    // this.orderPizza(this.pizzaReady);
    // console.log('call customer');
    // console.log(
    //   'promise solves above problem of callback hell where we have to do one thing  after other'
    // );
    // this.callWeatherDataAwayFromHere();

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

  ngOnChanges(changes: SimpleChanges): void {
    const fileInput = changes['fileInput'];
    if (!fileInput) return;

    const mimeorTuple = fileInput.currentValue;
    if (Array.isArray(mimeorTuple) && mimeorTuple.length === 2) {
      this.mime = mimeorTuple[0];
      this.allowedSize = mimeorTuple[1];
    } else if (typeof mimeorTuple === 'string' && mimeorTuple?.trim().length)
      this.mime = mimeorTuple;
  }

  async callWeatherDataAwayFromHere() {
    console.log(
      'Note: asyn await should be used togther except javascript modules & in chrome devtoools',
      'async await only effect the promise receiver not creator',
      'you can await any function that retuen promise',
      'any fun can be converted to async',
      'async function return a promise by default',
      'error handling with try catch   in async await'
    );

    try {
      let weather = await this.getWeather();
      console.log('after catch 1');
      console.log('weatherrr', weather);
    } catch (error) {
      console.log('res Something went wrong', error);
    }

    this.getWeather().then(this.onSuccess).catch(this.onError);
    console.log('after catch 2 -this will cause bugs');

    // const res = await fetch('https://api.weather.gov/points/30,35');
    // console.log('res', res);
    // const res2 = await res.json();
    // console.log('res2', res2);

    fetch('https://api.weather.gov/points/30,35')
      .then((data) => data.json())
      .then((res) => {
        console.log('res', res);
      });

    // or
    // let weather = this.getWeather();
    // console.log('promise receiver');
    // console.log(weather);
    // weather.then(
    //   (data) => console.log('first param :: yippie', data),
    //   (err) => console.log('second param :: err', err)
    // );
    // this.getWeather().then(this.onSuccess, this.onError);

    // this.getWeather()
    //   .then(this.getWeatherIcon)
    //   .then(this.onSuccess, this.onError);
    // or

    // this.getWeather()
    //   .then(this.getWeatherIcon)
    //   .then(this.onSuccess)
    //   .catch(this.onError);
  }

  getWeather() {
    console.log(
      'phases of promise -peending: waiting,resovled: successful,rejected:its done but couldn accomplish'
    );
    // promise maker
    console.log('promise maker');
    return new Promise((resolve, reject) => {
      console.log('inside promise weather');
      setTimeout(() => reject('open end failed'), 4000);
      // setTimeout(() => resolve('clouds'), 4000);
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
  onSuccessApi(data: any) {
    console.log('success param :: data', data.json());
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
    console.log(this.mime, this.allowedSize);
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
