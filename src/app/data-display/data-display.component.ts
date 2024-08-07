import { Component, inject, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ThemeService } from '../services/theme.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [ButtonModule, TableModule,ToolbarModule,InputTextModule,InputSwitchModule, FormsModule,ToggleButtonModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css',
})
export class DataDisplayComponent implements OnInit {
  private displayService = inject(DisplayService);
  checked:boolean = true;
  data: any[] = [];
  selectedTheme: string = 'dark';
  themeService : ThemeService = inject(ThemeService);

  ngOnInit(): void {
    this.loadDisplay();
    this.themeService.setTheme(this.selectedTheme);
  }
  

  onThemeChange(theme:string) {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);

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




