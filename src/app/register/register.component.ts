import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name:"Jack",
      username: "me",
      pass: "123",
      repass: "123"
    })
    // this.registrationForm = new FormGroup({
    //   name: new FormControl(),
    //   username: new FormControl(),
    //   pass: new FormControl(),
    //   repass: new FormControl(),
    // })
  }

  ngOnInit(): void {

  }
  register() {
    console.log("Form Submit");

    console.log(this.registrationForm.value);

  }

}
