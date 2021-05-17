import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientForm!: FormGroup
  public title = 'Clientes';
  public targetedClient!: Cliente;
  public token = false;

  login() {
    this.token = true;
  }

  clientes = [
    { id: 1, name: 'Paulo', cpf:'32894533388', birth:'18051989', phone:'41 22233445' },
    { id: 2, name: 'Maria', cpf:'32194405969', birth:'12041967', phone:'11 22334455' },
    { id: 3, name: 'Jorge', cpf:'29384506977', birth:'22022000', phone:'13 44456677' },
    { id: 4, name: 'Fernanda', cpf:'09828345678', birth:'13061969', phone:'41 23334455' },
    { id: 5, name: 'Marcelo', cpf:'98298722209', birth:'01021980', phone:'21 22334455' }
  ];

  targetClient(cliente: Cliente) {
    this.targetedClient = cliente;
  }

  goBack() {
    this.targetedClient = null as any;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
