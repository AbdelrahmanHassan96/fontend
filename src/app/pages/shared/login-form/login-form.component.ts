import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isSubmit = false
  loginData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  user:any={
    email:'',
    password:''
  }
  constructor(private _user:UserService,private _router:Router) { 
    this.loginData.patchValue(this.user)
  }

  ngOnInit(): void {
  }
  handleSubmit(){
    this.isSubmit = true
    this._user.signin(this.loginData.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token' , `Bearer ${res.token}`)
      this._user.loged=true
    },
    ()=>{
    },
    ()=>{
      this._router.navigateByUrl("/showSchedle")
    }
    )
  }
}
