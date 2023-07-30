import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { planDescriptionValidator } from 'src/app/plan-validation';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  prepaidform:FormGroup;
  errors: any;

  constructor(private service:SharedService,private formBuilder: FormBuilder) { 
    this.prepaidform = this.formBuilder.group({
      planName: ['', [Validators.required,Validators.minLength(3)]],
      planPrice: ['',[Validators.required,this.numberOnlyValidator(10, 10000)]],
      planType:['Prepaid',[Validators.required]],
      planOffers:['', [Validators.required, Validators.minLength(3)]],
      planValidity:['',[Validators.required,this.numberOnlyValidator(1, 365)]],
      planDescription:['',[Validators.required,Validators.minLength(3),planDescriptionValidator()]]
    });
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
  
  
 get f(){
  return this.prepaidform.controls;
}
 
 
  @Input() plans:any;
  planId:string="";
  planName:string="";
  planPrice:string=""
  planType:string="";
  planOffers:string="";
  planValidity:string="";
  planDescription:string="";

  ngOnInit():void {
      this.planId=this.plans.planId;
      this.planName=this.plans.planName;
      this.planPrice=this.plans.planPrice
      this.planType=this.plans.planType || 'Prepaid';
      this.planOffers=this.plans.planOffers;
      this.planValidity=this.plans.planValidity;
      this.planDescription=this.plans.planDescription;
  }
 

  onSubmit(){
    if (this.prepaidform.valid) {
      // Form submission logic here
      console.log("1");
      console.log(this.prepaidform.value);
      error:(err) => {
        console.log("1");
         alert(err?.error.Message);
      }

    } else {
      // Mark form controls as touched to display validation errors
      this.markFormControlsAsTouched();
    }
  }
  markFormControlsAsTouched() {
    Object.keys(this.prepaidform.controls).forEach((controlName) =>
      this.prepaidform.controls[controlName].markAsTouched()
    );
  }
  
  addPlan(){
    var val = {
      planId:this.planId,
     planName:this.planName,
     planPrice:this.planPrice,
     planType:this.planType,
     planOffers:this.planOffers,
     planValidity:this.planValidity,
     planDescription:this.planDescription};
      this.service.addPlan(val).subscribe((res:any)=>{alert(res.message);},
      error => {
        console.log(error);
        this.errors = error
        alert(JSON.stringify(error.error.message));
    });
  }
}