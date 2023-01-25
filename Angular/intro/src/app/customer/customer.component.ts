import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
 constructor(){} 
  customers:Customer[]=[];
 selectedCustomer:Customer
 //İNPUT UST COMPONENTDEN VERİ ALMAK İÇİN KULALNILIR
 @Input() city:string;
 
  ngOnInit(){
    this.customers=[{name:"ali can",lastname:"yucel",age:30},
  {name:"eser",lastname:"yucel",age:25},
{name:"emre",lastname:"aydoğduoğlu",age:23},
{name:"yavuz",lastname:"ünal",age:40}]
  }

selectCustomer(customer:Customer)
{
this.selectedCustomer=customer;
}
}
