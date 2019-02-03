import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(recvalue: any){
    console.log(recvalue);

}
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-employee-list',
//   template: `
  
// <div class="container">
// <h2>User Data</h2>
// <form  #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)">
// <div class="form-group">
//   <label>Name</label>
//   <input type="text" minlength="4" #nameref="ngModel" name="name"  required class="form-control" ngModel>
//   <div *ngIf="nameref.errors && (nameref.dirty || nameref.touched)" class="alert alert-danger">
//   <div [hidden]="!nameref.errors.required">
//     <b>Please enter a name</b>
//   </div>
//   <div [hidden]="!nameref.errors.minlength">
//     <b>Please enter minimum 4 chars</b>
//   </div>
// </div>
// </div>
// <div class="form-group">
//   <label>Email</label>
//     <input type="email" name="email" class="form-control" ngModel>
//   </div>

// <div ngModelGroup="address">
// <div class="form-group">
//   <label>Street</label>
//   <input type="text" class="form-control" name="street" ngModel>
// </div>
// <div class="form-group">
// <label>City</label>
// <input type="text" class="form-control" name="city" ngModel>
// </div>
// </div>
//   <div class="form-group">
//     <label>PostalCode</label>
// <input type="text" #refPincode="ngModel" pattern="^[1-9][0-9]{4}$"
// name="postalcode" ngModel class="form-control">
// <div *ngIf="refPincode.errors &&(refPincode.dirty||refPincode.touched)">
//   <div [hidden]="!refPincode.errors.pattern">
//     please enter a five number
//   </div>
// </div>
// </div>
//     <button [disabled]="!userForm.form.valid" type="submit" class="btn btn-primary">Sign up</button>
// </form>
// </div>
//   `,
//   styles: []
// })
// export class EmployeeListComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

//   onSubmit(recvalue: any){
//     console.log(recvalue);

// }}
