import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  public employees = [
    {"id": 1, "name": "Kitty", "age": 18},
    {"id": 2, "name": "Natsu", "age": 19},
    {"id": 3, "name": "Alan", "age": 20},
    {"id": 4, "name": "Dami", "age": 30}
  ];

  constructor() { }

  getEmployee() {
    return this.employees;
  }
}

