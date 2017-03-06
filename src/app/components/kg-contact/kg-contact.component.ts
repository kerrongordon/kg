import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators,  } from '@angular/forms';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-contact',
  templateUrl: './kg-contact.component.html',
  styleUrls: ['./kg-contact.component.css'],
  providers: [KgDataService]
})
export class KgContactComponent implements OnInit, OnChanges {

  public contactForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    message: [null, Validators.required]
  });

  private sendEmail: any;
  message: string;
  update = true;

  private condition: string;

  constructor(public fb: FormBuilder, private _kgDataService: KgDataService) { }

  ngOnInit() {
    window.addEventListener('load', () => {
      window.addEventListener('offline', () => {
        const condition = navigator.onLine ? 'Live' : 'You Are Currently offline';
        this.message = condition;
        this.update = !this.update;
      });
    });
  }

  ngOnChanges() {
    console.log('updating');
  }

  onValid() {
    if (
      this.contactForm.value.name === null ||
      this.contactForm.value.email === null ||
      this.contactForm.value.message === null
      ) {
        this.message = 'Please Fill Out This Form Completely';
        this.update = !this.update;
        return true;
      }
  }

  onSubmit(value: any): void {
    if (!this.onValid()) {
      this.sendEmail = this._kgDataService.postEmail(this.contactForm.value).subscribe(
        data => {
          this.message = 'Email Has Been Sent';
          this.update = !this.update;
          this.contactForm.reset();
          return true;
        },
        error => {
          this.message = 'Error in Sending Email';
          this.update = !this.update;
        }
      );
    }
  }


}
