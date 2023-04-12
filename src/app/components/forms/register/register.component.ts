import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup;

  constructor(private usersService: UsersService,
    private router: Router) {
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }


  async onSubmit() {
    //console.log(this.formulario.value);
    await this.usersService.registro(this.formulario.value)
    //console.log(response);
    this.router.navigate(['/login'])
  }




}
