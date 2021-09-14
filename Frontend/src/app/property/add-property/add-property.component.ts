import { IProperty } from './../IProperty.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyFormValue: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  //must read from db
  propertyTypes:Array<string> =["House","Apartment","Duplex"]
  furnishTypes:Array<string>=['Fully','Semi','Unfurnished']

  propertyView : IProperty={
    Id:null,Name:'',Price:null,SellRent:null,Type:null
  };
  constructor(private router: Router) {}

  ngOnInit() {
    //this.addPropertyFormValue.controls['Name'].setValue('test');
    setTimeout(() => {
      this.addPropertyFormValue.controls['Name'].setValue('test');
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm) {
    console.log(Form);
    console.log(this.addPropertyFormValue); //access form before submit
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
