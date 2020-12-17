import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Json Api';
 public flag:any =0;
 public user:any = null;
 public data:any = []
 public followers_data:any = []
 public columns:any =["ID", "Name", "Followers" ]
 public fcolumns:any =["ID", "Name", "Github" ]
 public index:any =["id", "login", "followers_url" ]
 constructor(private http: HttpClient) {
   
 }

 ngOnInit(){
   this.getData();
 }

 changeFlag(){
   this.flag=(this.flag == 0)?1:0;
 }

 getData(){
   const url ='https://api.github.com/users'
   this.http.get(url).subscribe((res)=>{
     this.data = res
     console.log(this.data)
   })
 }

 getFollowers(userName:any){
  this.changeFlag();
  this.user = userName;
  const followers_url ='https://api.github.com/users/'+userName+'/followers'
  console.log(followers_url);
  this.http.get(followers_url).subscribe((res)=>{
    this.followers_data = res
    console.log(this.followers_data)
  })

 }
 
}