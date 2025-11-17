import { Component, OnInit } from '@angular/core';
import { IComponentController, IComponentOptions, IControllerConstructor } from 'angular';
import { PhoneData, Phone } from '../core/phone/phone.service';

@Component({
    selector: 'phone-list',
    templateUrl: './phone-list.template.html'
})
export class PhoneListComponent implements OnInit {
    phones: PhoneData[] = [];
    orderProp: string;

    constructor(private Phone: Phone) {
        'ngInject';
    }

    public ngOnInit(): void {
        this.Phone.query({}, (phones: PhoneData[]) => {
            this.phones = phones;
        });
        this.orderProp = 'age';
    }
}
