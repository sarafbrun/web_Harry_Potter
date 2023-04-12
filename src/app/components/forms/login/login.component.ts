import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(private usersService: UsersService,
    private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.usersService.login(this.formulario.value);
    console.log(response) //me devuelve el token q necesito para la autorizacion -> queremos guardarlo en localstorage para poder acceder a el despues
    localStorage.setItem('token_hp', response.token);
    this.router.navigate(['/movies']);
  }

}
