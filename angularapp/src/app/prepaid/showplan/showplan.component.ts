import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showplan',
  templateUrl: './showplan.component.html',
  styleUrls: ['./showplan.component.css']
})
export class ShowplanComponent implements OnInit {

  constructor(private service:SharedService,private router: Router) {}

  PlansList:any=[];
  ModalTitle:string="";
  ActivateAddEditPlansComp: boolean=false;
  ActivateEditPlansComp: boolean=false;
  plans:any;

  ngOnInit(): void {
      this.refreshPlanList();
  }

  addClick()
  {
    this.plans={
      planId:0,
      planName:"",
      planType:"",
      planPrice:"",
      planOffers:"",
      planValidity:"",
      planDescription:""
    }
    this.ModalTitle="Add Plan";
    this.ActivateAddEditPlansComp=true;
  }

  editClick(item: any)
  {
    this.plans=item;
    this.ModalTitle="Edit Plan";
    this.ActivateEditPlansComp=true;

  }

  deleteClick(item:any)
  {
    if(confirm('Are you sure?')){
      this.service.deletePlan(item.planId).subscribe((data:any)=>{
        alert(data.message);
        this.refreshPlanList();
      },
      error=>{console.log(error.message)});
    }
  }
  closeClick()
  {
    this.ActivateAddEditPlansComp=false;
    this.ActivateEditPlansComp=false;
    this.refreshPlanList();
  }

  refreshPlanList()
  {
    this.service.getpPlanList().subscribe(data=>{this.PlansList=data;});
  }

}
