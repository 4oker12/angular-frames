import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataServiceService} from '../data-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private router: Router,
    private service: DataServiceService,
    private formbuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.firstFormGroup = this.formbuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formbuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  }


