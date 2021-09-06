import { Component, Input } from "@angular/core";

// @Component({
//   selector:'app-property-card',
//   template:`<h1>test form PropertyCardComponent</h1>`,
//   styles:['h1 {font-weight: normal;}']
// })
@Component({
  selector:'app-property-card',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {

  // Property:any= {
  //   "Id":1,
  //   "Name":"Test1",
  //   "Type":"House",
  //   "Price":12000
  // }
  @Input() Property:any
}
