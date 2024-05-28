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
  constructor(public filterService: FilterService) {}

  filterData() {
    this.filterService.getUnassignedBoxes();
  }
}