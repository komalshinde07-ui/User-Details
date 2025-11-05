import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
private baseUrl = 'http://localhost:8080/employees';
  constructor(private http: HttpClient) { }

   // 🔹 GET - fetch all employees
  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // 🔹 POST - add new employee
  addEmployee(employeeData: any): Observable<any> {
    return this.http.post(this.baseUrl, employeeData);
  }

  // 🔹 PUT - update existing employee
  updateEmployee(id: number, employeeData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, employeeData);
  }

  // 🔹 DELETE - delete employee
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
