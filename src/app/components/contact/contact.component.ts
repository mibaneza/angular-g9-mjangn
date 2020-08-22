import { Component, OnInit } from '@angular/core';
import { DataDbService } from "../../service/data-db.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public titulo = 'Contacta me ';
  public active = 'active';
  public size = 'headerG';

  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  contactForm: FormGroup;
  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
  }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5)/*, Validators.email*/
        , Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(5)
        , Validators.maxLength(100)]),

    })
  }

  ngOnInit() { }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
    } 
  }

}
