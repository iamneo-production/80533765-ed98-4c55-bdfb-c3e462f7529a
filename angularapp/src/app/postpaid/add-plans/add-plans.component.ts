import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { planDescriptionValidator } from 'src/app/plan-validation';

@Component({
  selector: 'app-add-plans',
  templateUrl: './add-plans.component.html',
  styleUrls: ['./add-plans.component.css']
})
export class AddPlansComponent implements OnInit {

  postpaidform:FormGroup;
  errors: any;
  constructor(private service:SharedService,private formBuilder: FormBuilder) { 
    this.postpaidform = this.formBuilder.group({
      planName: ['', [Validators.required,Validators.minLength(3)]],
      planPrice: ['',[Validators.required,this.numberOnlyValidator(10, 10000)]],
      planType:['Postpaid',[Validators.required]],
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
  return this.postpaidform.controls;
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
      this.planType=this.plans.planType || 'Postpaid';
      this.planOffers=this.plans.planOffers;
      this.planValidity=this.plans.planValidity;
      this.planDescription=this.plans.planDescription;
  }
 

  onSubmit(){
    if (this.postpaidform.valid) {
      // Form submission logic here
      console.log(this.postpaidform.value);
  }
     else {
      // Mark form controls as touched to display validation errors
      this.markFormControlsAsTouched();
    }
  }
  markFormControlsAsTouched() {
    Object.keys(this.postpaidform.controls).forEach((controlName) =>
      this.postpaidform.controls[controlName].markAsTouched()
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
