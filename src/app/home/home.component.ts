import { FormModel } from 'src/app/models/formModel.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public elementRegistration: FormModel[] = [];
  public showModal = false;
  public showModalError = false;

  constructor() {}

  ngOnInit(): void {}

  addDataTable(value: FormModel) {
    if (!this.elementRegistration.some((item) => item.name === value.name || item.telephone === value.telephone)) {
      this.elementRegistration.push(value);
      this.showModal = true;
    } else {
      this.showModalError = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
