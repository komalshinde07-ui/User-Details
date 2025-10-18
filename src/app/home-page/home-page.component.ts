import { ViewChild, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';


export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const USER_DATA: User[] = [
  { id: 1, name: 'Komal Shinde', email: 'komal@gmail.com', role: 'SQL DBA' },
  { id: 2, name: 'Nilesh Khamkar', email: 'nil@gmail.com', role: 'Developer' },
  { id: 3, name: 'Sneha Deshmukh', email: 'sneha@gmail.com', role: 'Tester' },
  { id: 4, name: 'Amit More', email: 'amit@gmail.com', role: 'DBA' },
  { id: 5, name: 'Priya Jadhav', email: 'priya@gmail.com', role: 'Analyst' },
  { id: 6, name: 'Vikas Pawar', email: 'vikas@gmail.com', role: 'Support' }
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None   // ✅ disables encapsulation
})
export class HomePageComponent {
  // 'sr' is a display-only sequential number (row index + 1). Internal `id` is kept but not displayed.
  displayedColumns: string[] = ['sr', 'name', 'email', 'role','Action'];
  dataSource = new MatTableDataSource<User>(USER_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddUserDialog(){
    console.log("add")
     const dialogRef = this.dialog.open(AddUserComponent, {
      panelClass:  'responsive-dialog',
      
disableClose: true,  
    });
    // When the dialog closes, it may return the new user object.
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Ensure id is a number (form returns strings). If id is missing (add flow), generate next id.
        const providedId = result.id;
        const idNum = providedId ? (typeof providedId === 'number' ? providedId : Number(providedId)) : null;
        const nextId = idNum ?? (Math.max(...this.dataSource.data.map(d => d.id), 0) + 1);
        const newUser: User = {
          id: nextId,
          name: result.name,
          email: result.email,
          role: result.role,
        };
        // Append to the existing data and update the dataSource
        const data = this.dataSource.data.slice();
        data.push(newUser);
        this.dataSource.data = data;
        // If paginator exists, go to last page to show the new row
        if (this.paginator) {
          const lastPageIndex = Math.floor((this.dataSource.data.length - 1) / this.paginator.pageSize);
          this.paginator.pageIndex = lastPageIndex;
        }
      }
    });
  }

  onEdit(user: User) {
    // Open the same AddUserComponent but pass the user as dialog data for editing
    const dialogRef = this.dialog.open(AddUserComponent, {
      panelClass: 'responsive-dialog',
      data: user,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedUser: User = {
          id: result.id ? (typeof result.id === 'number' ? result.id : Number(result.id)) : user.id,
          name: result.name,
          email: result.email,
          role: result.role,
        };
        // Replace the user in the dataSource
        const data = this.dataSource.data.slice();
        const idx = data.findIndex(d => d.id === updatedUser.id);
        if (idx > -1) {
          data[idx] = updatedUser;
        } else {
          data.push(updatedUser);
        }
        this.dataSource.data = data;
      }

    });

  }

  onDelete(user: User) {
    const confirmed = confirm(`Are you sure you want to delete ${user.name}?`);
    if (!confirmed) {
      return;
    }
    const data = this.dataSource.data.slice();
    const idx = data.findIndex(d => d.id === user.id);
    if (idx > -1) {
      data.splice(idx, 1);
      // Keep internal IDs stable; do not renumber. Just update the dataSource.
      this.dataSource.data = data;
    }
  }
}
