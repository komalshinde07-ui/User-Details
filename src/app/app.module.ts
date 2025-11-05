import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddUserComponent } from './add-user/add-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddUserComponent,
    LoginComponent,
    RegisterComponent,
    // ModifyUserComponent removed (file not present)
  ],
  imports: [
      
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatTooltipModule,
    ReactiveFormsModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatButtonModule,
MatIconModule,

    // Material modules
  
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule, 
    HttpClientModule,
 FormsModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
