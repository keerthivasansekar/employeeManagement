import { Component } from '@angular/core';
import { Footer } from "../partials/footer/footer";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [Footer, RouterModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
