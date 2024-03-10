import { Directive } from '@angular/core';

// element tag selector
// @Directive({
//   selector: 'input',
// })
// @Directive({
//   selector: 'app-list-b',
// })
// export class PostDirective {
//   constructor() {
//     alert('element tag selector called');
//   }
// }

// attribute selector
// @Directive({
//   selector: '[type]',
// })
// export class PostDirective {
//   constructor() {
//     alert('attribute type selector called');
//   }
// }

//  attribute value selector
@Directive({
  selector: '[type=checkbox]',
})
export class PostDirective {
  constructor() {
    console.log('attribute value selector called');
  }
}
