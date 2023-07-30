import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  readonly APIUrl="https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api";

  baseurl = "https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Addons";
   
  constructor(private http:HttpClient){}
  getPlanList():Observable<any[]>{
    return this.http.get<any>('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/rechargeplan/postpaid');
  }

  addPlan(val:any){
      return this.http.post('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/rechargeplan',val);
  }
  updatePlan(val:any){
      return this.http.put('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/rechargeplan',val);
  }
  deletePlan(val:any){
      return this.http.delete('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io//api/rechargeplan/'+val);
  }

  signup(userobj:any)
  {
     return this.http.post<any>('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/user/signup',userobj)
  }

  login(loginobj:any)
  {
    return this.http.post<any>('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/admin/login',loginobj)
  }

  getpPlanList():Observable<any[]>{
    return this.http.get<any>('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/rechargeplan/prepaid');
  }
  addpPlan(val:any){
    return this.http.post('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/rechargeplan',val);
  }
  updatepPlan(val:any){
    return this.http.put('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/rechargeplan',val);
 }
 deletepPlan(val:any){
  return this.http.delete('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/rechargeplan/'+val);
}
    
    addRecharge(val:any)
    {
      return this.http.post('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Recharge',val);
    }
    
    getAllPlanList():Observable<any[]>{
      return this.http.get<any>('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/admin/getAllPlan');
    }
    getaddOns():Observable<any[]>{
      return this.http.get<any>('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/getAddon');
    }
    addAddon(val:any)
    {
      return this.http.post('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Addons',val);
    }
    updateaddOn(val:any){
      return this.http.put('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Addons',val);
    }

    deleteAddOnPlan(val:any){
      return this.http.delete('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Addons/'+val);
    }

    getLargeId(): Observable<number> {
      return this.http.get<number>('https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Recharge/largeId');
    }
   
    getRechargeDetailsId(largeId: number): Observable<any> {
      return this.http.get(`https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Recharge/${largeId}`);
    }
    getPlanDetailsById(planId: number): Observable<any> {
      return this.http.get(`https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/plans/${planId}`);
    }
    getAddonDetailsById(planId:number):Observable<any> {
      return this.http.get(`https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/Addons/${planId}`);
    }
    createPlanReview(planId: number, feedback: any): Observable<any> {
      const url = `https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/reviews/plan/${planId}`;
      return this.http.post(url, feedback);
    }
  
    createAddonReview(addonId: number, feedback: any): Observable<any> {
      const url = `https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/reviews/addon/${addonId}`;
      return this.http.post(url, feedback);
    }
    getAverageRatingByPlanId(planId: number): Observable<number> {
      const url = `https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/reviews/plan/${planId}/average-rating`;
      return this.http.get<number>(url);
    }
    getAverageRatingByAddonId(planId: number): Observable<number> {
      const url = `https://8080-fdbbaecbaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/reviews/addon/${planId}/average-rating`;
      return this.http.get<number>(url);
    }

  }

