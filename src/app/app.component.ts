import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
// import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataDisplayComponent,CommonModule,AddBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-frontend';
}
