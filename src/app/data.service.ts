import { Injectable } from '@angular/core';
import { UserSettings } from './data/user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  
  // postUserSettings(userSettings: UserSettings): Observable<UserSettings> { 
    //   return of(userSettings);
    // }
    
    url = 'https://putsreq.com/D0UR1gdeyVDkzoFMaaQt';
    
    postUserSettings(userSettings: UserSettings): Observable<any> { 
      return this.http.post(this.url, userSettings);
    }
  
    getSubscriptionTypes(): Observable<String[]> {
      return of(['Monthly', 'Annual', 'Lifetime']);
      // if we were reaching out to a server, we'd use http get 
      // something similar to using http post as above
     }
  
}
