import { ActivatedRoute } from '@angular/router';
import { IProperty } from './../IProperty.interface';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  // constructor(private http:HttpClient) {  }
  SellRent = 1;
  constructor(private route: ActivatedRoute,private housingService: HousingService) {}
  properties: Array<IProperty>;
  //properties: any;
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
       this.SellRent=2;// if 2 URL is rent-property else url is on Base
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      // (data) => (this.properties = data),
      (data) => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString())
      },
      (error) => {
        console.log('http error:');
        console.log(error);
      }
    );
    //this.http.get('data/properties.json');
    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.properties=data;
    //     // console.log(data)
    //   }
    // )
  }
  //   properties:Array<any>=[
  //     {
  //     "Id":1,
  //     "Name":"Test1",
  //     "Type":"House",
  //     "Price":12000
  //   },
  //   {
  //     "Id":2,
  //     "Name":"Test2",
  //     "Type":"House2",
  //     "Price":42000
  //   },
  //   {
  //     "Id":3,
  //     "Name":"Test3",
  //     "Type":"House3",
  //     "Price":16000
  //   },
  //   {
  //     "Id":4,
  //     "Name":"Test4",
  //     "Type":"House4",
  //     "Price":18000
  //   }
  // ]

  // ngOnInit(): void {

  // }
}
