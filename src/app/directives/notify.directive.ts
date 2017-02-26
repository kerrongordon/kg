import { Directive, Attribute } from '@angular/core';

@Directive({
  selector: '[appNotify]'
})
export class NotifyDirective {

  constructor(att: Attribute) { }


}
