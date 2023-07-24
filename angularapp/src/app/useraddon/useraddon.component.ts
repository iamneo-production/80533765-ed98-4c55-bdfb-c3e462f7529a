import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-useraddon',
  templateUrl: './useraddon.component.html',
  styleUrls: ['./useraddon.component.css']
})
export class UseraddonComponent implements OnInit {

  ModalTitle: string="";
  ActivateRechargePlanComp: boolean=false;
  

  constructor(private service:SharedService) {}

  PrePlansList:any=[];
  recharge:any;
  selectedAddonNumber: number = 0;
  averageRatings: { [key: number]: number } = {};

  ngOnInit(): void {
      this.refreshPrePlanList();
  }

  refreshPrePlanList()
  {
    this.service.getaddOns().subscribe(data=>{this.PrePlansList=data;
      this.calculateAverageRatings();
    });
  }
  calculateAverageRatings() {
    for (const plan of this.PrePlansList) {
      this.service.getAverageRatingByAddonId(plan.addonId).subscribe(
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

  navigate(addonId:number)
  {
    this.recharge={
      rechargeId:0,
      rechargeType:"",
      email:"",
      username:"",
      rechargeplan:"",
      rechargenumber:"",
      rechargeprice:"",
    }
    this.ModalTitle="Add Recharge";
    this.ActivateRechargePlanComp=true;
    this.selectedAddonNumber = addonId;
  }
  closeClick() {
    this.ActivateRechargePlanComp=false;
    this.refreshPrePlanList();
    }
}



