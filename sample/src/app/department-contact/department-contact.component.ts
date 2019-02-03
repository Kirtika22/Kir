// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-department-contact',
//   template: `
//     <p>
//       department-contact works!
//     </p>
//   `,
//   styleUrls: ['./department-contact.component.css']
// })
// export class DepartmentContactComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// department-contact.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-contact',
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
  <p>Reliance Nippon Life Insurance Company (RNLI) 
  is one of the life insurance companies in India. 
  The firm offers life insurance products targeted 
  at individuals and groups, catering to four 
  distinct segments: protection, children, retirement
  and investment plans.
  
  As of 31 March 2013, the Total Premium (net of re-insurance) 
  was Rs. 40.15 billion, whereas new business premium stood 
  at Rs. 13.77 billion. The company achieved a profit of Rs. 3.80 billion. 
  The company sold 760,000 policies during 2012–13 with total managed funds 
  valuing to Rs. 181.89 billion, through a wide network of distribution 
  with 1,230 offices and over 124,000 advisors.
  Reliance Nippon Life Insurance is a part of Reliance Capital of the
  Reliance Anil Dhirubhai Ambani Group.
  Rated amongst the Top 3 Most Trusted Service Brands in the Insurance Category</p>
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


<img src="assets/image3.jpg" style="width:40%">

</body>



    
  `,
  styles: []
})
export class DepartmentContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
