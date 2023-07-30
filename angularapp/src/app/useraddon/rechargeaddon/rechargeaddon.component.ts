import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rechargeaddon',
  templateUrl: './rechargeaddon.component.html',
  styleUrls: ['./rechargeaddon.component.css']
})
export class RechargeaddonComponent implements OnInit {
    rechargeform:FormGroup;
   
    planDetails: any;
  
    constructor(private service:SharedService,private router:Router,private formBuilder: FormBuilder) { 
      this.rechargeform= this.formBuilder.group({
        RechargeType: ['Addon', [Validators.required]],
        Email: ['',[Validators.required,Validators.email]],
        UName:['',[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]],
        Mobile:['',[Validators.required,Validators.pattern('^(?!([0-9])\\1{9}$)[0-9]{10}$')]],
      });
    }
    
    @Input() recharge:any;
    @Input() addonId:number;
    RechargeId:string="";
    RechargeType:string="";
    Email:string="";
    UName:string=""
    RechargePlan:string="";
    Mobile:string="";
    RechargePrice:string="";
    
    ngOnInit(): void {
        this.RechargeId=this.recharge.RechargeId;
        this.RechargeType=this.recharge.RechargeType;
        this.Email=this.recharge.Email;
        this.UName=this.recharge.UName;
        this.RechargePlan=this.recharge.RechargePlan;
        this.Mobile=this.recharge.Mobile;
        this.RechargePrice=this.recharge.RechargePrice;
        console.log(this.addonId);
        this.getAddonDetails();
        }
  
    addRecharge(){
      var val = {
        RechargeId:this.RechargeId,
        RechargeType:this.RechargeType,
        Email:this.Email,
        UName:this.UName,
        RechargePlan:this.planDetails?.addonName,
        Mobile:this.Mobile,
        RechargePrice:this.planDetails?.addonPrice};
    this.service.addRecharge(val).subscribe(res=>{alert(res.toString());});
    
    }
  
    get f()
    {
      return this.rechargeform.controls;
    }
    onSubmit(){
      if (this.rechargeform.valid) {
        // Form submission logic here
        console.log(this.rechargeform.value);
        this.router.navigate(['/notification'],{ queryParams: { addonId: this.addonId }}) .then(() => {
          window.location.reload();
        });
    }
      
    }
    markFormControlTouched() {
      Object.keys(this.rechargeform.controls).forEach((controlName) =>
        this.rechargeform.controls[controlName].markAsTouched()
      );
    }
    
    numberOnlyValidator(min: number, max: number) {
      return (control) => {
        const value = control.value;
        const regex = /^[0-9]*$/;
  
        if (regex.test(value)) {
          const numericValue = Number(value);
  
          if (numericValue >= min && numericValue <= max) {
            return null; // Valid
          }
          
        }
        return { invalidNumber: true }; // Invalid
      };
    }
  
    getAddonDetails() {
      this.service.getAddonDetailsById(this.addonId).subscribe((details: any) => {
        this.planDetails = details;
      });
    }
    
    
  }
  
  

