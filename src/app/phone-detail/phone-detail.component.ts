import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone, PhoneData } from '../core/phone/phone.service';

@Component({
    selector: 'phone-detail',
    templateUrl: './phone-detail.template.html'
})
export class PhoneDetailComponent implements OnInit {
    private mainImageUrl: string;
    private phone: PhoneData;

    constructor(private activatedRoute: ActivatedRoute, private Phone: Phone) { }

    public ngOnInit(): void {
        const phoneId = this.activatedRoute.snapshot.paramMap.get('phoneId');
        this.Phone.get({ phoneId: phoneId }, (phone: PhoneData) => {
            this.phone = phone;
            this.setImage(phone.images[0]);
        });
    }

    public setImage(imageUrl: string) {
        this.mainImageUrl = imageUrl;
    }
}
