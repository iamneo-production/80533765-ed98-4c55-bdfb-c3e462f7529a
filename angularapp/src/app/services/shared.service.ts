import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

<<<<<<< HEAD
  readonly APIUrl="https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api";

  baseurl = "https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons";
   
  constructor(private http:HttpClient){}
  getPlanList():Observable<any[]>{
    return this.http.get<any>('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/postpaid');
  }

  addPlan(val:any){
      return this.http.post('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
  }
  updatePlan(val:any){
      return this.http.put('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
  }
  deletePlan(val:any){
      return this.http.delete('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/'+val);
=======
  readonly APIUrl="https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api";

  baseurl = "https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons";
   
  constructor(private http:HttpClient){}
  getPlanList():Observable<any[]>{
    return this.http.get<any>('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/postpaid');
  }

  addPlan(val:any){
      return this.http.post('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
  }
  updatePlan(val:any){
      return this.http.put('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
  }
  deletePlan(val:any){
      return this.http.delete('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/'+val);
>>>>>>> c0dea137e879487d0ce944b45ac10cf0d121c3de
  }

  signup(userobj:any)
  {
<<<<<<< HEAD
     return this.http.post<any>('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/user/signup',userobj)
=======
     return this.http.post<any>('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/user/signup',userobj)
>>>>>>> c0dea137e879487d0ce944b45ac10cf0d121c3de
  }

  login(loginobj:any)
  {
<<<<<<< HEAD
    return this.http.post<any>('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/admin/login',loginobj)
  }

  getpPlanList():Observable<any[]>{
    return this.http.get<any>('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/prepaid');
  }
  addpPlan(val:any){
    return this.http.post('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
  }
  updatepPlan(val:any){
    return this.http.put('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
 }
 deletepPlan(val:any){
  return this.http.delete('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/'+val);
=======
    return this.http.post<any>('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/admin/login',loginobj)
  }

  getpPlanList():Observable<any[]>{
    return this.http.get<any>('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/prepaid');
  }
  addpPlan(val:any){
    return this.http.post('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
  }
  updatepPlan(val:any){
    return this.http.put('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan',val);
 }
 deletepPlan(val:any){
  return this.http.delete('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/rechargeplan/'+val);
>>>>>>> c0dea137e879487d0ce944b45ac10cf0d121c3de
}
    
    addRecharge(val:any)
    {
<<<<<<< HEAD
      return this.http.post('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Recharge',val);
    }
    
    getAllPlanList():Observable<any[]>{
      return this.http.get<any>('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/admin/getAllPlan');
    }
    getaddOns():Observable<any[]>{
      return this.http.get<any>('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/admin/getAddon');
    }
    addAddon(val:any)
    {
      return this.http.post('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons',val);
    }
    updateaddOn(val:any){
      return this.http.put('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons',val);
    }

    deleteAddOnPlan(val:any){
      return this.http.delete('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons/'+val);
    }

    getLargeId(): Observable<number> {
      return this.http.get<number>('https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Recharge/largeId');
    }
   
    getRechargeDetailsId(largeId: number): Observable<any> {
      return this.http.get(`https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Recharge/${largeId}`);
    }
    getPlanDetailsById(planId: number): Observable<any> {
      return this.http.get(`https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/plans/${planId}`);
    }
    getAddonDetailsById(planId:number):Observable<any> {
      return this.http.get(`https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons/${planId}`);
    }
    createPlanReview(planId: number, feedback: any): Observable<any> {
      const url = `https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/plan/${planId}`;
=======
      return this.http.post('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Recharge',val);
    }
    
    getAllPlanList():Observable<any[]>{
      return this.http.get<any>('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/admin/getAllPlan');
    }
    getaddOns():Observable<any[]>{
      return this.http.get<any>('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/admin/getAddon');
    }
    addAddon(val:any)
    {
      return this.http.post('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons',val);
    }
    updateaddOn(val:any){
      return this.http.put('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons',val);
    }

    deleteAddOnPlan(val:any){
      return this.http.delete('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons/'+val);
    }

    getLargeId(): Observable<number> {
      return this.http.get<number>('https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Recharge/largeId');
    }
   
    getRechargeDetailsId(largeId: number): Observable<any> {
      return this.http.get(`https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Recharge/${largeId}`);
    }
    getPlanDetailsById(planId: number): Observable<any> {
      return this.http.get(`https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/plans/${planId}`);
    }
    getAddonDetailsById(planId:number):Observable<any> {
      return this.http.get(`https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/Addons/${planId}`);
    }
    createPlanReview(planId: number, feedback: any): Observable<any> {
      const url = `https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/plan/${planId}`;
>>>>>>> c0dea137e879487d0ce944b45ac10cf0d121c3de
      return this.http.post(url, feedback);
    }
  
    createAddonReview(addonId: number, feedback: any): Observable<any> {
<<<<<<< HEAD
      const url = `https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/addon/${addonId}`;
      return this.http.post(url, feedback);
    }
    getAverageRatingByPlanId(planId: number): Observable<number> {
      const url = `https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/plan/${planId}/average-rating`;
      return this.http.get<number>(url);
    }
    getAverageRatingByAddonId(planId: number): Observable<number> {
      const url = `https://8080-addadbdaeaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/addon/${planId}/average-rating`;
=======
      const url = `https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/addon/${addonId}`;
      return this.http.post(url, feedback);
    }
    getAverageRatingByPlanId(planId: number): Observable<number> {
      const url = `https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/plan/${planId}/average-rating`;
      return this.http.get<number>(url);
    }
    getAverageRatingByAddonId(planId: number): Observable<number> {
      const url = `https://8080-faacbacbeaaaaddcbdfdabdafbcafdeccaedae.project.examly.io/api/reviews/addon/${planId}/average-rating`;
>>>>>>> c0dea137e879487d0ce944b45ac10cf0d121c3de
      return this.http.get<number>(url);
    }

  }

