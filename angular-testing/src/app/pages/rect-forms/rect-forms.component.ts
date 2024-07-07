import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-rect-forms',
  templateUrl: './rect-forms.component.html',
  styleUrls: ['./rect-forms.component.scss']
})
export class RectFormsComponent {
  @ViewChild(FormGroupDirective) private formDir !: FormGroupDirective;
  cvForm!: FormGroup;
  private initialFormValue: any;

  constructor(public fBuilder: FormBuilder) {


    this.cvForm = this.fBuilder.group({
      email: ['AAA', Validators.required],
      password: ['sss'],
      confirm_password: ['adasd'],
      rating: [0],
      skill_name: [''],
      zipCode: [''],
      address: [''],
      deliveryAddress: new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl(''),
      })
    }, { validators: this.checkPasswords })
  }

  callInitialValuea() { this.initialFormValue = this.cvForm.value; }
  checkPasswords(group: FormGroup) {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirm_password')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }
  onSubmit(e: Event) {
    console.log('this.cvForm.value: ', this.cvForm.value);
    this.initialFormValue = this.cvForm.value;
    this.formDir.resetForm(this.cvForm.value);
    // this.formDir.resetForm();
  }

  onReset(e: Event) {
    e.preventDefault();
    this.formDir.resetForm(this.initialFormValue);
    console.log('this.cvForm.value: ', this.cvForm.value);
  }
}
