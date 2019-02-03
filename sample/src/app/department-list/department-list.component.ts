import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  </head>
  <body>
  
  <div class="container">
    <h2>List Group With Badges</h2>
    <ul class="list-group">
      <li class="list-group-item">Protection Plans <span class="badge"></span></li>
      <li class="list-group-item">Life Insurance Plans <span class="badge"></span></li>
      <li class="list-group-item">Retiremnet Plans <span class="badge"></span></li>
      <li class="list-group-item">Unit Linked Plans <span class="badge"></span></li>
      <li class="list-group-item">Child Plans <span class="badge"></span></li>
      <li class="list-group-item">Health Plans <span class="badge"></span></li>
      </ul>
  </div>
  <img src="assets/image2.jpg" class="img-rounded" width="304" height="136"> 

  </body>
  </html>
  
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
