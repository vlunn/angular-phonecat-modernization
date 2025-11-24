import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PhoneData {
    name: string;
    snippet: string;
    images: string[];
}

@Injectable()
export class Phone {
    constructor(private $http: HttpClient) {}
    get(params?: any, success?: Function, error?: Function) {
        return this.$http
            .get<PhoneData>(`assets/phones/${params.phoneId}.json`)
            .toPromise()
            .then((data) => {
                if (success) success(data);

                return data;
            })
            .catch(err => {
                if (error) error(err);
            });
    }

    query(params?: any, success?: Function, error?: Function) {
        return this.$http
            .get<PhoneData[]>(`assets/phones/phones.json`)
            .toPromise()
            .then((data) => {
                if (success) success(data);

                return data;
            })
            .catch(err => {
                if (error) error(err);
            });
    }
}
