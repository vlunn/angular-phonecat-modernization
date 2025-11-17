import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IHttpService } from 'angular';
import { Injectable } from '@angular/core';
'use strict';

export interface PhoneData {
    name: string;
    snippet: string;
    images: string[];
}

@Injectable()
export class Phone {
    constructor(private $http: IHttpService) {}
    get(params?: any, success?: Function, error?: Function) {
        return this.$http
            .get<PhoneData>(`phones/${params.phoneId}.json`)
            .then(({ data }) => {
                if (success) success(data);

                return data;
            })
            .catch(err => {
                if (error) error(err);
            });
    }

    query(params?: any, success?: Function, error?: Function) {
        return this.$http
            .get<PhoneData[]>(`phones/phones.json`)
            .then(({ data }) => {
                if (success) success(data);

                return data;
            })
            .catch(err => {
                if (error) error(err);
            });
    }
}
