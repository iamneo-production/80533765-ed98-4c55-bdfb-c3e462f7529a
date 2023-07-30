import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  rechargeid:number;
  IdsList:any;
  addonId: number;
  planId:number;
  rating: number = 0;
  comment: string = '';

  
  constructor(private service:SharedService,private route: ActivatedRoute,private rout:Router) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.addonId = +params.addonId;
      console.log('Received Addon ID:', this.addonId);
      this.planId=+params.planId;
      console.log("Received planId",this.planId);
    });
    this.refreshPlanList();
  }
  refreshPlanList()
  {
    this.service.getLargeId().subscribe((id: number) => {
      this.rechargeid = id;
      this.getRechargeId();
    });  
  }
  getRechargeId() {
    this.service.getRechargeDetailsId(this.rechargeid).subscribe((details: any) => {
      this.IdsList = details;
    });
  }
  onStarClick(star: number) {
    this.rating = star;
  }

  submitFeedback():void {
    const feedback = {
      rating: this.rating,
      comment: this.comment
    };

    if (this.planId) {
      this.service.createPlanReview(this.planId, feedback).subscribe(
        response => {alert("Review added");
          // Handle success
          console.log('Plan review submitted:', response);
        },
        error => {
          // Handle error
          console.error('Failed to submit plan review:', error);
        }
      );
    } else if (this.addonId) {
      this.service.createAddonReview(this.addonId, feedback).subscribe(
        response => {alert("Review added");
          // Handle success
          console.log('Addon review submitted:', response);
        },
        error => {
          // Handle error
          console.error('Failed to submit addon review:', error);
        }
      );
    }
    this.rout.navigate(['/popularplans']);
  }
}



