import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-kg-notify',
  templateUrl: './kg-notify.component.html',
  styleUrls: ['./kg-notify.component.css']
})
export class KgNotifyComponent implements OnInit, OnChanges {

  public notifyMessage: string;
  public isOpen = true;
  public appNotify: string;
  @Input() message;
  @Input() update;

  constructor() {  }

  ngOnChanges() {
    this.notifyMessage = this.message;
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      setTimeout(() => { this.isOpen = false; }, 5000);
    }
  }

  ngOnInit() { }

  closeNotify(): void {
    this.isOpen = !this.isOpen;
  }

}
