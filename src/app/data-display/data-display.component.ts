import { Component, inject, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css',
})
export class DataDisplayComponent implements OnInit {
  private displayService = inject(DisplayService);
  data: any[] = [];

  ngOnInit(): void {
    this.loadDisplay();
  }

  loadDisplay() {
    this.displayService.getdisplays().subscribe({
      next: (displays: any) => {
        this.data = displays;
        console.log('Data Fetched Successfully');
      },
      error: (error) => console.log('Error fetching display:', error),
    });
  }
}
