import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  teacher_value=[];

  fetch(value){
    this.teacher_value=value;
  }

}
