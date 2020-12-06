import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  hide = true;

col=true;
clickBat(){
  this.col=false;
}
clickCut(){
  this.col=true;
}
  student=[
    {
      name:'vikas',
      age:20,
      course:'b.tech',
      branch:'cse',
      address:"dudahi"
    },
    {
      name:'puma',
      age:20,
      course:'bba',
      branch:'cse',
      address:"lohapipar"
    },
    {
      name:'mona',
      age:20,
      course:'iti',
      branch:'filter',
      address:"babubarhi"
    },
    {
      name:'sam',
      age:22,
      course:'Matric',
      branch:'science',
      address:"rajnagar"
    }
  ]

  ngOnInit(): void {
  }

}
