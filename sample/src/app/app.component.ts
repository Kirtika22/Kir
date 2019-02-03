// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'sample';
// }
import { Component, OnInit } 
from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //title = 'Welcome to Angular 5 course';
  

constructor()
  {

  }

  
ngOnInit()
  {

  }
  
onSubmit(recvalue: any)
{
    console.log(recvalue);

}
}