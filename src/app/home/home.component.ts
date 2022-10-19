import { FormModel } from 'src/app/models/formModel.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public elementRegistration: FormModel[] = [];
  public showModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  addDataTable(value: FormModel) {
    this.elementRegistration.push(value);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
