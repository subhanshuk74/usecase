import { Component } from '@angular/core';
import { DataComponent } from '../data/data.component';
import jsonData from '../boxData.json';
import { FilterService } from '../filter.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-box-assignment',
  standalone: true,
  imports: [DataComponent,MatSelectModule],
  templateUrl: './box-assignment.component.html',
  styleUrl: './box-assignment.component.scss'
})
export class BoxAssignmentComponent {
  users: any[] = jsonData.users;
  parentData = jsonData.users;
  dataSource = new MatTableDataSource(jsonData.users);
  filterForm: FormGroup;
  constructor(public filterService: FilterService) {}

  filterData() {
    this.filterService.getUnassignedBoxes();
  }

  createForm() {
    this.filterForm = new FormGroup({
      district: new FormControl(''),
      customer: new FormControl(''),
      status: new FormControl(''),
      SKPorder: new FormControl(''),
      boxno: new FormControl(''),
      boxrecieveddate: new FormControl('')
    })
  }

  filterTable(){
    let filter = users.filter(item => {
      if(item.district ===this.filterForm.get('district').value ){
        return item;
      }
    })

    filter = filter.filter(item => {
      if(item.customer ===this.filterForm.get('customer').value ){
        return item;
      }
    })
    this.parentData = filter;
  }
}