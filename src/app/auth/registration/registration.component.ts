import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newUser: User = {
      firstname: this.profileForm.get('firstName').value,
      lastname: this.profileForm.get('lastName').value,
      username: this.profileForm.get('username').value,
      password: this.profileForm.get('password').value
    } as User;
    this.usersService.addUser(newUser).subscribe();
    this.usersService.getUsers().subscribe(
      x => console.log(x)
    );
  }

}
