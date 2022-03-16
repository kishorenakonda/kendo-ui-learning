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

    getUsersListService(successFn: Function, errorFn: Function) {
        return this.httpService.get(this.userServiceUrls.list, successFn, errorFn);
    }

    createUser(postJson: any, successFn: Function, errorFn: Function) {
        return this.httpService.post(this.userServiceUrls.list, postJson, successFn, errorFn);
    }

    deleteUser(userId: number, successFn: Function, errorFn: Function) {
        return this.httpService.delete(`${this.userServiceUrls.list + '/' + userId}`, successFn, errorFn);
    }
}
