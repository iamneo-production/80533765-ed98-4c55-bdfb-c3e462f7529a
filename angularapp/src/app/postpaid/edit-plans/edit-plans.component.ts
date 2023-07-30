import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { planDescriptionValidator } from 'src/app/plan-validation';

@Component({
  selector: 'app-edit-plans',
  templateUrl: './edit-plans.component.html',
  styleUrls: ['./edit-plans.component.css']
})
export class EditPlansComponent implements OnInit {

  editpostpaidform:FormGroup;
  errors: any;

  constructor(private service:SharedService,private formBuilder: FormBuilder) { 
  this.editpostpaidform = this.formBuilder.group({
    planName: ['', [Validators.required,Validators.minLength(3)]],
    planPrice: ['',[Validators.required,this.numberOnlyValidator(10, 10000)]],
    planType:['PostPaid',[Validators.required]],
    planOffers:['', [Validators.required, Validators.minLength(3)]],
    planValidity:['',[Validators.required,this.numberOnlyValidator(1, 365)]],
    planDescription:['',[Validators.required,Validators.minLength(3),planDescriptionValidator()]]
  });
};

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
  return this.editpostpaidform.controls;
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
      this.planPrice=this.plans.planPrice;
      this.planType=this.plans.planType || 'PostPaid';
      this.planOffers=this.plans.planOffers;
      this.planValidity=this.plans.planValidity;
      this.planDescription=this.plans.planDescription;
  }

  onSubmit(){
    if (this.editpostpaidform.valid) {
      // Form submission logic here
      console.log(this.editpostpaidform.value);
      error: (err) => {
        alert(err?.error.message);
      }
    } else {
      // Mark form controls as touched to display validation errors
      this.markFormControlTouched();
    }
  }
  markFormControlTouched() {
    Object.keys(this.editpostpaidform.controls).forEach((controlName) =>
      this.editpostpaidform.controls[controlName].markAsTouched()
    );
  }
  updatePlan()
  {
    var val = {
      planId:this.planId,
      planName:this.planName,
      planPrice:this.planPrice,
      planType:this.planType,
      planOffers:this.planOffers,
      planValidity:this.planValidity,
      planDescription:this.planDescription};
    this.service.updatePlan(val).subscribe((res:any)=>{alert(res.message);},
    error => {
      console.log(error);
      this.errors = error
      alert(JSON.stringify(error.error.message));
  });
}
} 
