import {Component, NgZone, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent{

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],

    })
  }

  onSubmit() {
  }

  agregarUsuario() {
  }

}
