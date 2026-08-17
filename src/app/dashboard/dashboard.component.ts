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
export class DashboardComponent {
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
      task: 'task2',
      team: 'Promo',
      location: 'Uxbridge2',
      yesNo: 'Yes',
    },
    {
      id: 3,
      project: 'UFC Fight promo',
      task: 'task3',
      team: 'Promo',
      location: 'Uxbridge3',
      yesNo: 'No',
    },
  ];
}
