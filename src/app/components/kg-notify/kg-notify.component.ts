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
  private time;
  @Input() message;
  @Input() update;

  constructor() {  }

  ngOnChanges() {
    this.notifyMessage = this.message;
    this.isOpen = !this.isOpen;
    this.timeOut();
  }

  ngOnInit() { }

  timeOut() {
    if (this.isOpen) {
      this.time = setTimeout(() => {
        this.isOpen = false;
        clearTimeout(this.time);
      }, 5000);
    }
  }

  closeNotify(): void {
    this.isOpen = !this.isOpen;
    clearTimeout(this.time);
  }

}
