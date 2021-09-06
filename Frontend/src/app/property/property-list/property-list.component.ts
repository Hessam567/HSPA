import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private http:HttpClient) {  }
  // properties:Array<any>;
  properties:any;
  ngOnInit(): void {
    this.http.get('data/properties.json');
    this.http.get('data/properties.json').subscribe(

      data=>{
        this.properties=data;
        // console.log(data)
      }
    )
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
