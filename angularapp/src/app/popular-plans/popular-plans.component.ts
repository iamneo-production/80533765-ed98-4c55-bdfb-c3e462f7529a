import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-popular-plans',
  templateUrl: './popular-plans.component.html',
  styleUrls: ['./popular-plans.component.css']
})
export class PopularPlansComponent implements OnInit {
  ModalTitle: string="";
  ActivateRechargePlanComp: boolean=false;
  

  constructor(private service:SharedService) {}

  PrePlansList:any=[];
  recharge:any;
  selectedPlanNumber: number = 0;
  averageRatings: { [key: number]: number } = {};


  ngOnInit(): void {
      this.refreshPrePlanList();
  }

  refreshPrePlanList() {
    this.service.getAllPlanList().subscribe(data => {
      this.PrePlansList = data;
      this.calculateAverageRatings();
    });
  }
  
  calculateAverageRatings() {
    for (const plan of this.PrePlansList) {
      this.service.getAverageRatingByPlanId(plan.planId).subscribe(
        (rating) => {
          plan.averageRating = rating;
          plan.stars = Array(Math.floor(rating)).fill(0);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
   navigate(planId:number)
  {
    this.recharge={
      RechargeId:0,
      RechargeType:"",
      Email:"",
      UName:"",
      RechargePlan:"",
      Mobile:"",
      RechargePrice:"",
    }
    this.ModalTitle="Add Recharge";
    this.ActivateRechargePlanComp=true;
    this.selectedPlanNumber = planId;
    
  }
  closeClick() {
    this.ActivateRechargePlanComp=false;
    this.refreshPrePlanList();
    }

}
