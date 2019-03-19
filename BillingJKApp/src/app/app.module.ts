import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatPaginator, MatSort,MatFormFieldModule, MatTableDataSource,MatPaginatorModule, MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './billing/header/header.component';
import { LeftNavigationComponent } from './billing/left-navigation/left-navigation.component';
import { FooterComponent } from './billing/footer/footer.component';
import { AddCategoryComponent } from './billing/main-screen/add-category/add-category.component';
import { DialogFormComponent } from './billing/main-screen/dialog-form/dialog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavigationComponent,
    FooterComponent,
    AddCategoryComponent,
    DialogFormComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,  
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent],
})
export class AppModule { }
