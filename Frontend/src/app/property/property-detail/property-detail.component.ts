import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.propertyId = this.route.snapshot.params['id'];
    //returns value as a string

    // this.propertyId = Number( this.route.snapshot.params['id']);

    this.propertyId = +this.route.snapshot.params['id'];
    //+ convert it to a number

    //must add to navigate to manually address added
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
      ////////////////
    );
  }

  onSelectNext() {
    this.propertyId += 1;

    //if want to navigate to relative address
    // this.router.navigate(['property-detail', this.propertyId],{relativeTo:this.route});
    
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
