import { Component } from '@angular/core';

interface TableRow {
  id: number;
  project: string;
  task: string;
  team: string;
  location: string;
  yesNo: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent{
  
  
  table: TableRow[] = [
    {
      id: 1,
      project: 'Monster energy launch',
      task: 'task',
      team: 'Sales',
      location: 'Uxbridge',
      yesNo: 'No',
    },
    {
      id: 2,
      project: 'Promo Event',
      task: 'task',
      team: 'Promo',
      location: 'Uxbridge2',
      yesNo: 'Yes',
    },
    {
      id: 3,
      project: 'UFC Fight promo',
      task: 'task',
      team: 'Promo',
      location: 'Uxbridge3',
      yesNo: 'No',
    },
    {
      id: 4,
      project: 'UFC Fight promo',
      task: 'task',
      team: 'Promo',
      location: 'Uxbridge3',
      yesNo: 'No',
    },
    {
  id: 5,
  project: 'Monster Truck Tour',
  task: 'task',
  team: 'Sales',
  location: 'Birmingham',
  yesNo: 'No'
},
{
  id: 6,
  project: 'Formula 1 Promotion',
  task: 'task',
  team: 'Marketing',
  location: 'Silverstone',
  yesNo: 'Yes'
},
{
  id: 7,
  project: 'Extreme Sports Event',
  task: 'task',
  team: 'Promo',
  location: 'Manchester',
  yesNo: 'No'
},
{
  id: 8,
  project: 'New Product Launch',
  task: 'task',
  team: 'Sales',
  location: 'Leeds',
  yesNo: 'Yes'
},
{
  id: 9,
  project: 'Social Media Campaign',
  task: 'task',
  team: 'Marketing',
  location: 'London',
  yesNo: 'Yes'
},
{
  id: 10,
  project: 'Gaming Tournament',
  task: 'task',
  team: 'Promo',
  location: 'Bristol',
  yesNo: 'No'
},
  ];

  filteredTable: TableRow[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.filteredTable = this.table;
  }

  onSearch(term: string) {
    this.searchTerm = term.trim().toLowerCase();

    if (!this.searchTerm) {
      this.filteredTable = this.table;
      return;
    }

    this.filteredTable = this.table.filter(row =>
      row.project.toLowerCase().includes(this.searchTerm) ||
      row.task.toLowerCase().includes(this.searchTerm) ||
      row.team.toLowerCase().includes(this.searchTerm) ||
      row.location.toLowerCase().includes(this.searchTerm) ||
      row.yesNo.toLowerCase().includes(this.searchTerm)
    );
  }
}
