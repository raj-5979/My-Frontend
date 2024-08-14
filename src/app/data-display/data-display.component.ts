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
// import { Book } from '../interfaces/book';
@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    ToolbarModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    ToggleButtonModule,
  ],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css',
})
export class DataDisplayComponent implements OnInit {
  private displayService = inject(DisplayService);
  checked: boolean = true;
  // productDialog: boolean = false;
  // submitted: boolean = false;
  data: any[] = [];
  book = {
    BookID: '',
    BookName: '',
    Author: '',
    price: '',
  };
  // books: Book[] = [];
  selectedTheme: string = 'dark';
  themeService: ThemeService = inject(ThemeService);
  router: any;

  ngOnInit(): void {
    this.loadDisplay();
    this.themeService.setTheme(this.selectedTheme);
  }

  onThemeChange(theme: string) {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }

  loadDisplay() {
    this.displayService.getBook().subscribe({
      next: (displays: any) => {
        this.data = displays;
        console.log('Data Fetched Successfully');
      },
      error: (error) => console.log('Error fetching display:', error),
    });
  }

  deleteDisplay(BookID: number) {
    this.displayService.deleteBook(BookID).subscribe(() => {
      this.loadDisplay(); // Refresh the book list after deleting
      console.log('Data deleted successfully');
    });
  }

  // editDisplay(bookID: number, book: any) {
  //   this.displayService.editBook(bookID, book).subscribe(() => {
  //     this.loadDisplay();
  //     console.log('Data updated successfully');
  //   });
  // }
}
