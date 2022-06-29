import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userServiceUrls = {
        // 'list': './assets/data/userlist.json'
        'list': 'http://localhost:3000/data'
    };

    constructor(private httpService: HttpService) { }

    getUser(successFn: Function, errorFn: Function) {
        return this.httpService.get(this.userServiceUrls.list, successFn, errorFn);
    }

    createUser(postJson: any, successFn: Function, errorFn: Function) {
        return this.httpService.post(this.userServiceUrls.list, postJson, successFn, errorFn);
    }

    deleteUser(userId: number, successFn: Function, errorFn: Function) {
        return this.httpService.delete(`${this.userServiceUrls.list + '/' + userId}`, successFn, errorFn);
    }

    updateUser(user: any, successFn: Function, errorFn: Function) {
        return this.httpService.put(`${this.userServiceUrls.list + '/' + user.id}`, user, successFn, errorFn);
    }

    getCountries(successFn: Function, errorFn: Function) {
        const url = 'https://restcountries.eu/rest/v2/all';
        return this.httpService.get(url, successFn, errorFn);
    }
}
