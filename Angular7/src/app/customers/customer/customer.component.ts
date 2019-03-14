import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service : CustomerService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm){
    if (form!=null)
    form.resetForm();
    this.service.formData = {
      CustomerID :null,
      Name :'',
      Surname:'' 
    }
  }


  onSubmit( form : NgForm){
this.insertRecord(form);
  }

  insertRecord( form : NgForm){
    this.service.postCustomer(form.value).subscribe(res=>{
      this.resetForm(form)
    }
    )

  }
}
