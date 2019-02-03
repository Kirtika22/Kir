import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  template: `
  <head>
  <style>
  .left {
    position: absolute;
    left: 0px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
  }
  </style>
  </head>
  <body>
  
  <div class="left">
    <p>More than providing peace of mind your family and yourself, life insurance can be one of the best investment decisions you have ever made. With stringent regulatory conditions to safeguard policyholders, traditional life insurance policies carry minimum investment risk and provide long-term insurance benefits.
    Most life insurance policies include retirement income on maturity. Another advantage of life insurance is that the coverage amount can be increased over time. So, while presently, you can afford only a low insurance premium with your current salary, over time with increasing income through promotions or new income sources, you can increase your insurance cover by paying slightly higher premiums for your life insurance policy and provide a better life cover for your family even when you are not around.
    While choosing a life insurance policy, it is generally advisable to look at various products that different organizations provide. Many insurance companies offer an array of insurance plans that best suit the needs of the entire family.
    </p>
  </div>
  
  <head>
  <style>
  img {
    display: block;
    margin-left: auto;
    margin-right: 0px;
  }
  </style>
  </head>
  <body>
  
  
  <img src="assets/iamge4.jpg" style="width:40%">
  
  </body>

  
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
