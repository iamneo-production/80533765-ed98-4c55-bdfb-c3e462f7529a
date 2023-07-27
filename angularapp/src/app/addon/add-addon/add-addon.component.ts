import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddonDescriptionValidator } from 'src/app/plan-validation';

@Component({
  selector: 'app-add-addon',
  templateUrl: './add-addon.component.html',
  styleUrls: ['./add-addon.component.css']
})
export class AddAddonComponent implements OnInit {

  addonform:FormGroup;
  errors: any;

  constructor(private service:SharedService,private formBuilder: FormBuilder) { 
  this.addonform = this.formBuilder.group({
    addonName: ['', [Validators.required,Validators.minLength(3)]],
    addonPrice: ['',[Validators.required,this.numberOnlyValidator(10, 10000)]],
    addonType:['',[Validators.required,Validators.minLength(3)]],
    addonValidity:['',[Validators.required]],
    addonDetails:['',[Validators.required,Validators.minLength(3),AddonDescriptionValidator()]]
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
    return this.addonform.controls;
  }

  @Input() addons:any;
  addonId:string="";
  addonName:string="";
  addonPrice:string=""
  addonType:string="Addon";
  addonValidity:string="till the existing pack";
  addonDetails:string="";

  ngOnInit():void {
      this.addonId=this.addons.addonId;
      this.addonName=this.addons.addonName;
      this.addonPrice=this.addons.addonPrice;
      this.addonDetails=this.addons.addonDetails;
  }

  onSubmit(){
    if (this.addonform.valid) {
      // Form submission logic here
      console.log(this.addonform.value);
      error: (err) => {
        alert(err?.error.message);
      }
    } else {
      // Mark form controls as touched to display validation errors
      this.markFormControlTouched();
    }
  }
  markFormControlTouched() {
    Object.keys(this.addonform.controls).forEach((controlName) =>
      this.addonform.controls[controlName].markAsTouched()
    );
  }
  addPlan(){
    var val = {
      addonId:this.addonId,
      addonName:this.addonName,
      addonPrice:this.addonPrice,
      addonDetails:this.addonDetails};
      this.service.addAddon(val).subscribe((res:any)=>{alert(res.message);},
      error => {
        console.log(error);
        this.errors = error
        alert(JSON.stringify(error.error.message));
    });
  }
} 

