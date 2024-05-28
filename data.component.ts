import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import jsonData from '../boxData.json';
import { FilterService } from '../filter.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    CommonModule,
    ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent implements OnInit{
  users: any[] = jsonData.users;
  pageNumber: number = 1;
  totalPages: number = 1;
  
  constructor(public filterService: FilterService) {}

  ngOnInit() {
    this.filterService.getBoxes(); // Assign the Observable returned by the service
  }
  

  selectAll() {
    this.users.forEach(user => user.selected = true);
  }

  toggleAllSelection(event: any) {
    const checked = event.checked;
    this.users.forEach(user => user.selected = checked);
  }

  goToFirstPage() {
    this.pageNumber = 1;
    this.loadPage(this.pageNumber);
  }

  goToPreviousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.loadPage(this.pageNumber);
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageNumber = page;
      this.loadPage(this.pageNumber);
    }
  }

  goToNextPage() {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
      this.loadPage(this.pageNumber);
    }
  }

  goToLastPage() {
    this.pageNumber = this.totalPages;
    this.loadPage(this.pageNumber);
  }

  refresh() {
    this.loadPage(this.pageNumber);
  }

  loadPage(page: number) {
    // Implement your logic to load the data for the given page
    console.log(`Loading data for page ${page}`);
  }
  

}