import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DataDisplayComponent } from './data-display/data-display.component';

export const routes: Routes = [
    { 'path': '', component: DataDisplayComponent },
    { 'path': 'add-book', component: AddBookComponent }
];
