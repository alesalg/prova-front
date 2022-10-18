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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() ELEMENT_DATA!: FormModel[];

  public showModalDelete: boolean = false;

  displayedColumns: string[] = ['name', 'telephone', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  public inputSearch!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formCreate();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
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
    const index = this.ELEMENT_DATA.findIndex((e) => {
      return e.id === id;
    });
    this.ELEMENT_DATA.splice(index, 1);
    this.filterTable();
    this.closeModal();
  }

  filterTable() {
    if (this.inputSearch.get('filter')?.value) {
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.filter = this.inputSearch
        .get('filter')
        ?.value.trim()
        .toLowerCase();
      this.dataSource.sort = this.sort;
    } else {
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    }
  }

  closeModal() {
    this.showModalDelete = false;
  }
}