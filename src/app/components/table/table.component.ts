import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormModel } from 'src/app/models/formModel.models';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() elementRegistration!: FormModel[];

  public showModalDelete: boolean = false;

  displayedColumns: string[] = ['name', 'telephone', 'action'];
  dataSource = new MatTableDataSource(this.elementRegistration);

  @ViewChild(MatSort) sort!: MatSort;

  public inputSearch!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formCreate();
    this.dataSource = new MatTableDataSource(this.elementRegistration);
  }

  formCreate() {
    this.inputSearch = this.formBuilder.group({
      filter: [''],
    });
    this.inputSearch.get('filter')?.valueChanges.subscribe((x) => {
      this.dataSource.filter = x.trim();
    });
  }

  ngAfterViewChecked(): void {
    this.filterTable();
  }

  ngAfterViewInit(): void {
    this.filterTable();
  }

  removeData(id: number) {
    const index = this.elementRegistration.findIndex((value) => {
      return value.id === id;
    });
    this.elementRegistration.splice(index, 1);
    this.filterTable();
    this.closeModal();
  }

  filterTable() {
    if (this.inputSearch.get('filter')?.value) {
      this.dataSource = new MatTableDataSource(this.elementRegistration);
      this.dataSource.filter = this.inputSearch
        .get('filter')
        ?.value.trim()
        .toLowerCase();
      this.dataSource.sort = this.sort;
    } else {
      this.dataSource = new MatTableDataSource(this.elementRegistration);
      this.dataSource.sort = this.sort;
    }
  }

  closeModal() {
    this.showModalDelete = false;
  }
}
