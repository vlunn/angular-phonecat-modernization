import { Component, OnInit } from '@angular/core';
import { IComponentController, IComponentOptions, IControllerConstructor } from 'angular';
import { Phone, PhoneData } from '../core/phone/phone.service';

@Component({
    selector: 'phone-detail',
    templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent implements OnInit {
    private mainImageUrl: string;
    private phone: PhoneData;

    constructor(private Phone: Phone) {
        'ngInject';
    }

    public ngOnInit(): void {
        this.Phone.get({ phoneId: this.$routeParams.phoneId }, (phone: PhoneData) => {
            this.phone = phone;
            this.setImage(phone.images[0]);
        });
    }

    public setImage(imageUrl: string) {
        this.mainImageUrl = imageUrl;
    }
}
