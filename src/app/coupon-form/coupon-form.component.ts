import { LocalstorageService } from '../service/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})
export class CouponFormComponent implements OnInit {

  form: FormGroup;
  // localStorage: Storage | undefined;


  constructor(fb: FormBuilder, private LocalstorageService: LocalstorageService) {
    this.form = fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)]],
      phoneNumber: [Number, [Validators.minLength(7)]],
      coupon: ['', [Validators.pattern(/^[s](345)$/)]]
    })
  }

  ngOnInit(): void {
  }

  get fullName(): FormControl {
    return this.form.get('fullName') as FormControl
  }


  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  get phoneNumber(): FormControl {
    return this.form.get('phoneNumber') as FormControl
  }

  get coupon(): FormControl {
    return this.form.get('coupon') as FormControl
  }


  onSubmit(){
    console.log(this.form.value);
    const formValue = JSON.stringify(this.form.value)
    this.LocalstorageService.saveItem("form value", formValue );
    //  localStorage.setItem('Full name:', this.fullName.value); 
    //  localStorage.setItem('Email:', this.email.value); 
    //  localStorage.setItem('Phone number:', this.phoneNumber.value); 
    //  localStorage.setItem('Coupon:', this.coupon.value); 
    //  const getFullNameInput = localStorage.getItem('Full name:'); 
    //  const getEmailInput = localStorage.getItem('Email:'); 
    //  const getPhonenumberInput = localStorage.getItem('Phone number:'); 
    //  const getCouponInput = localStorage.getItem('Coupon:'); 
    
    //  console.log(getFullNameInput, getEmailInput, getPhonenumberInput, getCouponInput)

  
    
  }







}
