
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-show-addon',
  templateUrl: './show-addon.component.html',
  styleUrls: ['./show-addon.component.css']
})
export class ShowAddonComponent implements OnInit {
  constructor(private service:SharedService,private router: Router) {}

  AddOnsList:any=[];
  ModalTitle:string="";
  ActivateEditAddonsComp: boolean=false;
  ActivateAddEditAddonsComp: boolean=false;
  addons:any;

  ngOnInit(): void {
      this.refreshPlanList();
  }

  addClick()
  {
    this.addons={
      addonId:0,
      addonName:"",
      addonType:"",
      addonPrice:"",
      addonValidity:"",
      addonDescription:""
    }
    this.ModalTitle="Add AddOn";
    this.ActivateAddEditAddonsComp=true;
  }
  editClick(item: any)
  {
    this.addons=item;
    this.ModalTitle="Edit AddOn";
    this.ActivateEditAddonsComp=true;

  }

  deleteClick(item:any)
  {
    if(confirm('Are you sure?')){
      this.service.deleteAddOnPlan(item.addonId).subscribe((data:any)=>{
         alert(data.message);
         this.refreshPlanList();
        },
        error=>{console.log(error.message)});
    }
  }
  closeClick()
  {
    this.ActivateEditAddonsComp=false;
    this.ActivateAddEditAddonsComp=false;
    this.refreshPlanList();
  }

  refreshPlanList()
  {
    this.service.getaddOns().subscribe(data=>{this.AddOnsList=data;});
  }

}


