import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form!: FormGroup;

  @Output() eventSubmit = new EventEmitter();

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm() {
    this.form = this.formbuilder.group({
      name: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  submit() {
    let formData = this.form.getRawValue();
    formData.id = Math.floor(
      Date.now() * Math.random() * Math.random() * Math.random()
    );

    this.eventSubmit.emit(formData);
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }
}
