import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiSerivce } from '../api.service';


@Component({
  selector: 'app-addcustomer-component',
  templateUrl: './addcustomer-component.component.html',
  styleUrls: ['./addcustomer-component.component.css']
})
export class AddcustomerComponentComponent {


  contactName = new FormControl();
  phoneNo = new FormControl();
  email = new FormControl();
  addressLine1 = new FormControl()
  addressLine2 = new FormControl();
  city = new FormControl();
  state = new FormControl();
  country = new FormControl();

  constructor(private http: HttpClient, private api: ApiSerivce) { }


  onSubmit() {

    let contact =
    {
      contactName: this.contactName.value,
      phoneNo: this.phoneNo.value,
      email: this.email.value,
      addressLine1: this.addressLine1.value,
      addressLine2: this.addressLine2.value,
      city: this.city.value,
      state: this.state.value,
      country: this.country.value
    }

    return this.http.post<any>(this.api.contactURL,
      {
        contactName: contact.contactName,
        phoneNo: contact.phoneNo,
        email: contact.email,
        addressLine1: contact.addressLine1,
        addressLine2: contact.addressLine2,
        city: contact.city,
        state: contact.state,
        country: contact.country
      }, {
      headers: { Authorization: this.api.bearerLoginToken }
    }
    ).subscribe(
      resData => {
        console.log("resData", resData);
      }
    )


  }

  public doLoginAndGetToken() {
    console.log('doLoginAndGetToken');
    this.http.post(this.api.loginURL,
      {
        userName: 'admin',
        password: 'Password1'
      },
      { responseType: 'json' })
      .subscribe(resdata => {
        console.log('login resdata=', resdata);
        let resJson = JSON.parse(JSON.stringify(resdata));
        this.api.bearerLoginToken = " Bearer " + resJson.token;
        console.log(' this.api.loginToken = ', this.api.bearerLoginToken);
      })
  }





}
