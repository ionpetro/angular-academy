import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm = new FormGroup({
    firstName: new FormControl('', {
      validators: Validators.required
    }),
    lastName: new FormControl('', {
      validators: Validators.required
    }),
    username: new FormControl('', {
      validators: Validators.required
    }),
    password: new FormControl('', {
      validators: Validators.required
    })
  });

  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
        
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
   }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

      this.authenticationService.register(
        this.f.firstName.value,
        this.f.lastName.value,
        this.f.username.value,
        this.f.password.value
      )
      .pipe(first())
      .subscribe()

      this.router.navigate(['/login'])

  }

}
